const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  name: 'location-update-tagger',
  dependencies: ['ldp'],
  methods: {
    async onPlaceUpdate(resourceUri, oldData, newData) {
      console.log('===> onPlaceUpdate');
      if ( ! newData['pair:hasPostalAddress'] ) {
        return
      }
      if ( oldData['pair:hasPostalAddress']
        && JSON.stringify(oldData['pair:hasPostalAddress']) === JSON.stringify(newData['pair:hasPostalAddress']) ) {
        return
      }
      console.log('===> onPlaceUpdate', resourceUri, oldData['pair:hasPostalAddress'], newData['pair:hasPostalAddress']);
      
      let events = await this.broker.call('triplestore.query', {
        query: `
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          CONSTRUCT {
            ?event pair:hostedIn ?place
          }
          WHERE {
            BIND(<${resourceUri}> AS ?place) .
            ?event pair:hostedIn ?place .
            FILTER(?containerUri IN(<http://localhost:3000/events>))
            ?containerUri ldp:contains ?event.
          }
        `,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });
      
      if (! events || ! events['@graph'] || events['@graph'].length ===0) {
        return
      }
      
      formatedEvents = events['@graph'].map(event => '<' + event['@id'] + '>');
      
      console.log('===> formatedEvents', formatedEvents);
      
      await this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          DELETE { 
            ?event pair:hasLocation ?hasLocation .
          } 
          WHERE { 
            FILTER(?event IN (${formatedEvents.join(',')}))
            FILTER(?containerUri IN (<http://localhost:3000/events>))
            ?containerUri ldp:contains ?event .
            ?event pair:hasLocation ?hasLocation
          }
        `,
        webId: 'system'
      });
      
      
      
      
      const newAddress = newData['pair:hasPostalAddress'];
      
      console.log('newAddress', newAddress);
      
    
      await this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          INSERT { 
            ?event pair:hasLocation ?hasLocation .
            ?hasLocation pair:hasPostalAddress ?hasPostalAddress .
            ?hasLocation  pair:label '''${newAddress['pair:label']}''' .
            ?hasLocation  pair:longitude '${newAddress['pair:longitude']}'^^<http://www.w3.org/2001/XMLSchema#double> .
            ?hasLocation  pair:latitude '${newAddress['pair:latitude']}'^^<http://www.w3.org/2001/XMLSchema#double> .
            ?hasLocation <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> pair:Place .
            ?hasPostalAddress pair:addressCountry '''${newAddress['pair:addressCountry']}''' . 
            ?hasPostalAddress pair:addressLocality '''${newAddress['pair:addressLocality']}''' . 
            ?hasPostalAddress pair:addressStreet '''${newAddress['pair:addressStreet']}''' . 
            ?hasPostalAddress pair:addressZipCode '''${newAddress['pair:addressZipCode']}''' . 
            ?hasPostalAddress <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> pair:PostalAddress . 
          }
          WHERE { 
            FILTER(?event IN (${formatedEvents.join(',')}))
            FILTER(?containerUri IN(<http://localhost:3000/events>))
            ?containerUri ldp:contains ?event .
            BIND (BNODE() AS ?hasPostalAddress) . BIND (BNODE() AS ?hasLocation) .
          }
        `,
        webId: 'system'
      });

    },
    async onEventUpdate(resourceUri, oldData, newData) {
      console.log('===> onEventUpdate');
      if ( ! newData['pair:hostedIn'] ) {
        return
      }
      if ( oldData['pair:hostedIn']
        && JSON.stringify(oldData['pair:hostedIn']) === JSON.stringify(newData['pair:hostedIn']) ) {
        return
      }
      console.log('===> onEventUpdate', resourceUri, oldData['pair:hostedIn'], newData['pair:hostedIn'], newData['pair:hasLocation']);
      
      let newAddress = await this.broker.call('triplestore.query', {
        query: `
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          CONSTRUCT {
            ?s1 pair:hasPostalAddress ?o1.
            ?s2 ?p2 ?o2.
          }
          WHERE {
            BIND(<${newData['pair:hostedIn']}> AS ?s1)
            FILTER(?containerUri IN(<http://localhost:3000/places>))
            ?containerUri ldp:contains ?s1.
            ?s1 pair:hasPostalAddress ?s2.
            ?s2 ?p2 ?o2.
          }
        `,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });
      
      console.log('===> newAddress', newAddress);
    
      if (newAddress) {
        await this.broker.call('triplestore.update', {
          query: `
            PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
            PREFIX ldp: <http://www.w3.org/ns/ldp#>
            DELETE { 
              ?event pair:hasLocation ?hasLocation .
            } 
            WHERE { 
              BIND(<${resourceUri}> AS ?event)
              FILTER(?containerUri IN(<http://localhost:3000/events>))
              ?containerUri ldp:contains ?event .
              ?event pair:hasLocation ?hasLocation
            }
          `,
          webId: 'system'
        });
        await this.broker.call('triplestore.update', {
          query: `
            PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
            PREFIX ldp: <http://www.w3.org/ns/ldp#>
            INSERT { 
              ?event pair:hasLocation ?hasLocation .
              ?hasLocation pair:hasPostalAddress ?hasPostalAddress .
              ?hasLocation  pair:label '''${newAddress.label}''' .
              ?hasLocation  pair:longitude '${newAddress['pair:longitude']}'^^<http://www.w3.org/2001/XMLSchema#double> .
              ?hasLocation  pair:latitude '${newAddress['pair:latitude']}'^^<http://www.w3.org/2001/XMLSchema#double> .
              ?hasLocation <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> pair:Place .
              ?hasPostalAddress pair:addressCountry '''${newAddress.addressCountry}''' . 
              ?hasPostalAddress pair:addressLocality '''${newAddress.addressLocality}''' . 
              ?hasPostalAddress pair:addressStreet '''${newAddress.addressStreet}''' . 
              ?hasPostalAddress pair:addressZipCode '''${newAddress.addressZipCode}''' . 
              ?hasPostalAddress <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> pair:PostalAddress . 
            }
            WHERE { 
              BIND(<${resourceUri}> AS ?event)
              FILTER(?containerUri IN(<http://localhost:3000/events>))
              ?containerUri ldp:contains ?event .
              BIND (BNODE() AS ?hasPostalAddress) . BIND (BNODE() AS ?hasLocation) .
            }
          `,
          webId: 'system'
        });
      }
    },
  },
  events: {
    async 'ldp.resource.updated'(ctx) {
      const { resourceUri, oldData, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'places':
          await this.onPlaceUpdate(resourceUri, oldData, newData);
          break;
        case CONFIG.HOME_URL + 'events':
          await this.onEventUpdate(resourceUri, oldData, newData);
          break;
      }
    }
  }
};
