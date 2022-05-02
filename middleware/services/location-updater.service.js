const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  name: 'location-updater',
  actions: {
    async updateEventLocation(ctx) {
      const { eventUri, placeUri } = ctx.params;

      const place = await this.broker.call('ldp.resource.get', {
        resourceUri: placeUri,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });

      // Delete current location of selected event
      await this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          DELETE
          WHERE {
            <${eventUri}> pair:hasLocation ?hasLocation
          }
        `,
        webId: 'system'
      });

      const postalAddress = Array.isArray(place['pair:hasPostalAddress']) ? place['pair:hasPostalAddress'][0] : place['pair:hasPostalAddress'];

      if (postalAddress) {
        // Insert new location of selected event
        await this.broker.call('triplestore.update', {
          query: `
            PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
            PREFIX ldp: <http://www.w3.org/ns/ldp#>
            INSERT DATA {
              <${eventUri}> pair:hasLocation [
                a pair:Place ;
                pair:label '''${postalAddress['pair:label']}''' ;
                pair:longitude '${postalAddress['pair:longitude']}'^^<http://www.w3.org/2001/XMLSchema#double> ;
                pair:latitude '${postalAddress['pair:latitude']}'^^<http://www.w3.org/2001/XMLSchema#double> ;
                pair:hasPostalAddress [
                  a pair:PostalAddress ;
                  pair:addressCountry '''${postalAddress['pair:addressCountry']}''' ;
                  pair:addressLocality '''${postalAddress['pair:addressLocality']}''' ;
                  pair:addressStreet '''${postalAddress['pair:addressStreet']}''' ;
                  pair:addressZipCode '''${postalAddress['pair:addressZipCode']}''' ;
                ]
              ]
            }
          `,
          webId: 'system'
        });
      }

      await this.broker.call('region-tagger.tag', { resourceUri: eventUri, zipCodes: [place['pair:hasPostalAddress']['pair:addressZipCode']] });
    },
    async updatePlaceEventsLocation(ctx) {
      const { placeUri } = ctx.params;

      // Find all events hosted in selected place
      const results = await this.broker.call('triplestore.query', {
        query: `
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          SELECT ?eventUri
          WHERE {
            <${urlJoin(CONFIG.HOME_URL, 'events')}> ldp:contains ?eventUri .
            ?eventUri pair:hostedIn <${placeUri}> .
          }
        `,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });

      if (results.length === 0) return;

      for( let eventUri of results.map(node => node.eventUri.value) ) {
        await this.actions.updateEventLocation({ eventUri, placeUri });
      }
    },
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      const { resourceUri, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'places':
          if( newData['pair:hasPostalAddress'] ) {
            await this.actions.updatePlaceEventsLocation({ placeUri: resourceUri }, { parentCtx: ctx });
          }
          break;
        case CONFIG.HOME_URL + 'events':
          if( newData['pair:hostedIn'] ) {
            await this.actions.updateEventLocation({ eventUri: resourceUri, placeUri: newData['pair:hostedIn'] }, { parentCtx: ctx });
          }
          break;
      }
    },
    async 'ldp.resource.updated'(ctx) {
      const { resourceUri, oldData, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'places':
          if( oldData['pair:hasPostalAddress'] && newData['pair:hasPostalAddress'] && JSON.stringify(oldData['pair:hasPostalAddress']) === JSON.stringify(newData['pair:hasPostalAddress']) ) {
            await this.actions.updatePlaceEventsLocation({ placeUri: resourceUri }, { parentCtx: ctx });
          }
          break;
        case CONFIG.HOME_URL + 'events':
          if( oldData['pair:hostedIn'] !== newData['pair:hostedIn'] ) {
            await this.actions.updateEventLocation({ eventUri: resourceUri, placeUri: newData['pair:hostedIn'] }, { parentCtx: ctx });
          }
          break;
      }
    }
  }
};
