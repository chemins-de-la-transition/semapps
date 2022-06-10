const createSlug = require('speakingurl');
const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');
const departments = require('../departments.json');

module.exports = {
  name: 'region-tagger',
  dependencies: ['ldp'],
  actions: {
    async tag(ctx) {
      const { resourceUri, zipCodes } = ctx.params;
      let regionsUris = [];

      for( let zipCode of zipCodes ) {
        const regionUri = await this.getRegionUriFromZip(zipCode);
        if( regionUri ) regionsUris.push(regionUri);
      }

      if( regionsUris.length > 0 ) {
        // Delete hasRegion relation
        await ctx.call('triplestore.update', {
          query: `
            PREFIX cdlt: <http://virtual-assembly.org/ontologies/cdlt#>
            DELETE { ?s1 cdlt:hasRegion ?regions }
            WHERE { BIND(<${resourceUri}> AS ?s1) . ?s1 cdlt:hasRegion ?regions }
          `,
          webId: 'system'
        });
        // Delete regionOf inverse relation
        await ctx.call('triplestore.update', {
          query: `
            PREFIX cdlt: <http://virtual-assembly.org/ontologies/cdlt#>
            DELETE { ?regions cdlt:regionOf ?p1 }
            WHERE { BIND(<${resourceUri}> AS ?p1) . ?regions cdlt:regionOf ?p1  }
          `,
          webId: 'system'
        });

        // Insert hasRegion relation
        await ctx.call('triplestore.update', {
          query: `
            PREFIX cdlt: <http://virtual-assembly.org/ontologies/cdlt#>
            INSERT { ?s1 cdlt:hasRegion ${regionsUris.map(uri => `<${uri}>`).join(', ')} }
            WHERE { BIND(<${resourceUri}> AS ?s1) }
          `,
          webId: 'system'
        });
        // Insert regionOf inverse relation
        await ctx.call('triplestore.update', {
          query: `
            PREFIX cdlt: <http://virtual-assembly.org/ontologies/cdlt#>
            INSERT { ${regionsUris.map(uri => `<${uri}>`).join(', ')} cdlt:regionOf ?p1 }
            WHERE { BIND(<${resourceUri}> AS ?p1) }
          `,
          webId: 'system'
        });
      }
    }
  },
  methods: {
    async tagPerson(personUri, person) {
      if (person['pair:hasLocation']) {
        await this.actions.tag({ resourceUri: personUri, zipCodes: [person['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']] });
      }
    },
    async tagOrganization(organizationUri, organization) {
      if (organization['pair:hasLocation']) {
        await this.actions.tag({ resourceUri: organizationUri, zipCodes: [organization['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']] });
      }
    },
    async tagPlace(placeUri, place) {
      if( place['pair:hasPostalAddress'] ) {
        await this.actions.tag({ resourceUri: placeUri, zipCodes: [place['pair:hasPostalAddress']['pair:addressZipCode']] });
      }
    },
    async tagEvent(eventUri, event) {
      if (event['pair:hostedIn']) {
        // location-update service updates hasLocation when hostedIn is changed : no need to check hostedIn here
      } else if (event['pair:hasLocation']) {
        await this.actions.tag({ resourceUri: eventUri, zipCodes: [event['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']] });
      }
    },
    async tagCourse(courseUri, course) {
      if( course['pair:hasPart'] ) {
        let zipCodes = [];

        // Gather the zip code of all events in this course
        for (let eventUri of [].concat(course['pair:hasPart'])) {
          const event = await this.broker.call('ldp.resource.get', {
            resourceUri: eventUri,
            accept: MIME_TYPES.JSON,
            webId: 'system'
          });

          if( event['pair:hasLocation'] && event['pair:hasLocation']['pair:hasPostalAddress'] ) {
            zipCodes.push(event['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']);
          }
        }

        if( zipCodes.length ) {
          await this.actions.tag({ resourceUri: courseUri, zipCodes });
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
        case CONFIG.HOME_URL + 'users':
          await this.tagPerson(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'organizations':
          await this.tagOrganization(resourceUri, newData);
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
        case CONFIG.HOME_URL + 'users':
          await this.tagPerson(resourceUri, newData);
          break;
        case CONFIG.HOME_URL + 'organizations':
          await this.tagOrganization(resourceUri, newData);
          break;
      }
    }
  }
};
