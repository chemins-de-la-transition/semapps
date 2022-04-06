const createSlug = require('speakingurl');
const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');
const departments = require('../departments.json');

module.exports = {
  name: 'region-tagger',
  dependencies: ['ldp'],
  methods: {
    async tag(resourceUri, zipCodes) {
      let regionsUris = [];

      for( let zipCode of zipCodes ) {
        const regionUri = await this.getRegionUriFromZip(zipCode);
        if( regionUri ) regionsUris.push(regionUri);
      }

      await this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          DELETE { <${resourceUri}> pair:hasLocation ?regions }
          INSERT { <${resourceUri}> pair:hasLocation ${regionsUris.map(uri => `<${uri}>`).join(', ')} }
          WHERE { <${resourceUri}> pair:hasLocation ?regions }
        `,
        webId: 'system'
      });
    },
    async tagPlace(courseUri, place) {
      if( place['pair:hasPostalAddress'] ) {
        await this.tag(courseUri, [place['pair:hasPostalAddress']['pair:addressZipCode']]);
      }
    },
    async tagEvent(eventUri, event) {
      if( event['pair:hostedIn'] && event['pair:hostedIn']['pair:hasPostalAddress'] ) {
        await this.tag(eventUri, [event['pair:hostedIn']['pair:hasPostalAddress']['pair:addressZipCode']]);
      }
    },
    async tagCourse(courseUri, course) {
      if( course['pair:hasPart'] ) {
        let zipCodes = [];

        // Gather the zip code of all events in this course
        for (let eventUri of course['pair:hasPart']) {
          const event = await this.broker.call('ldp.resource.get', {
            resourceUri: eventUri,
            accept: MIME_TYPES.JSON,
            webId: 'system'
          });

          if( event['pair:hostedIn'] && event['pair:hostedIn']['pair:hasPostalAddress'] ) {
            zipCodes.push(event['pair:hostedIn']['pair:hasPostalAddress']['pair:addressZipCode']);
          }
        }

        if( zipCodes.length ) {
          await this.tag(courseUri, zipCodes);
        }
      }
    },
    getRegionNameFromZip(zip) {
      if (zip) {
        const departmentNumber = zip.toString().slice(0, 2);
        const department = departments.find(d => d.num_dep.toString() === departmentNumber);
        if (department) return department.region_name;
      }
    },
    async getRegionUriFromZip(zip) {
      const regionName = this.getRegionNameFromZip(zip);

      if( regionName ) {
        const regionSlug = createSlug(regionName, {lang: 'fr', custom: {'.': '.'}});
        const regionUri = urlJoin(CONFIG.HOME_URL, 'regions', regionSlug);

        // Create region if it doesn't exist yet
        const regionExists = await this.broker.call('ldp.resource.exist', {resourceUri: regionUri});
        if (!regionExists) {
          await this.broker.call('ldp.container.post', {
            resource: {
              '@context': {
                '@vocab': 'http://virtual-assembly.org/ontologies/pair#'
              },
              '@type': 'Place',
              label: regionName
            },
            containerUri: urlJoin(CONFIG.HOME_URL, 'regions'),
            slug: regionSlug,
            contentType: MIME_TYPES.JSON,
            webId: 'system'
          });
        }

        return regionUri;
      }
    }
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      const { resourceUri, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'places':
          await this.tagPlace(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'events':
          await this.tagEvent(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'courses':
          await this.tagCourse(resourceUri, newData);
          break;
      }
    },
    async 'ldp.resource.updated'(ctx) {
      const { resourceUri, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'places':
          await this.tagPlace(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'events':
          await this.tagEvent(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'courses':
          await this.tagCourse(resourceUri, newData);
          break;
      }
    }
  }
};
