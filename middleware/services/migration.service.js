const urlJoin = require("url-join");
const { namedNode, quad, triple, literal } = require('@rdfjs/data-model');
const { v4: uuid } = require('uuid');
const { MigrationService } = require('@semapps/migration');
const { getContainerFromUri, defaultToArray, getSlugFromUri} = require("@semapps/ldp");
const { MIME_TYPES } = require("@semapps/mime-types");
const CONFIG = require("../config");

module.exports = {
  name: 'migration',
  mixins: [MigrationService],
  settings: {
    baseUrl: CONFIG.HOME_URL
  },
  actions: {
    async appendFoafProperties(ctx) {
      const usersContainerUri = urlJoin(CONFIG.HOME_URL, 'users');
      const usersUris = await ctx.call('ldp.container.getUris', { containerUri: usersContainerUri });

      for( let userUri of usersUris ) {
        this.logger.info('Migrating user ' + userUri + '...');

        const user = await ctx.call('ldp.resource.get', {
          resourceUri: userUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });

        if (user['foaf:email']) {
          delete user['foaf:email'];
        }

        user['foaf:name'] = user['pair:firstName'];
        user['foaf:familyName'] = user['pair:lastName'];

        await ctx.call('ldp.resource.put', {
          resource: user,
          contentType: MIME_TYPES.JSON,
          webId: 'system'
        });
      }
    },
    async migrateThemesToTopics(ctx) {
      const themesContainerUri = urlJoin(CONFIG.HOME_URL, 'themes');
      const themesUris = await ctx.call('ldp.container.getUris', { containerUri: themesContainerUri });
      
      for( let themeUri of themesUris ) {
        const theme = await ctx.call('ldp.resource.get', {
          resourceUri: themeUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });

        await ctx.call('ldp.resource.put', {
          resource: {
            ...theme,
            type: 'pair:Topic'
          },
          contentType: MIME_TYPES.JSON,
          webId: 'system'
        });

        await this.actions.moveResource({
          oldResourceUri: themeUri,
          newResourceUri: urlJoin(CONFIG.HOME_URL, 'topics', getSlugFromUri(themeUri)),
        });
      }

      await ctx.call('triplestore.update', {
        query: `
          DELETE
          WHERE {
            <${themesContainerUri}> a ?containerType
          }
        `,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });
    },
    async fixOrganizationsRights(ctx) {
      const organizationsUris = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'organizations') });
      for( let organizationUri of organizationsUris ) {
        this.logger.info('Fixing rights for ' + organizationUri + '...');
        const organization = await ctx.call('ldp.resource.get', {
          resourceUri: organizationUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });
        const usersUris = defaultToArray(organization['pair:affiliates']);
        if (usersUris) {
          this.logger.info(`Adding rights to ${usersUris.length} affiliated users`);
          for (let userUri of usersUris) {
            await ctx.call('webacl.resource.addRights', {
              resourceUri: organizationUri,
              additionalRights: {
                user: {
                  uri: userUri,
                  read: true,
                  write: true
                }
              },
              webId: 'system'
            });
          }
        } else {
          this.logger.warn('No affiliated users found!')
        }
      }
    },
    async activateActivityPub(ctx) {
      const actors = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'users') });
      for( let actorUri of actors ) {
        this.logger.info('Appending ActivityPub data to ' + actorUri + '...');
        await ctx.call('activitypub.actor.appendActorData', { actorUri });
        await ctx.call('activitypub.actor.generateKeyPair', { actorUri });
      }
    },
    async migrateEventsLocation(ctx) {
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#organizes', newPredicate: 'http://virtual-assembly.org/ontologies/cdlt#organizes' }, { parentCtx: ctx });
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#organizedBy', newPredicate: 'http://virtual-assembly.org/ontologies/cdlt#organizedBy' }, { parentCtx: ctx });

      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#hasLocation', newPredicate: 'http://virtual-assembly.org/ontologies/cdlt#hasRegion' }, { parentCtx: ctx });
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#locationOf', newPredicate: 'http://virtual-assembly.org/ontologies/cdlt#regionOf' }, { parentCtx: ctx });

      const events = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'events') });

      for( let eventUri of events ) {
        const event = await ctx.call('ldp.resource.get', {
          resourceUri: eventUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });

        if( event['pair:hostedIn'] ) {
          this.logger.info('Replacing location for event ' + eventUri + '...');
          await ctx.call('location-updater.updateEventLocation', { eventUri, placeUri: event['pair:hostedIn'] });
        } else {
          this.logger.info('Event ' + eventUri + ' has no location, skipping...');
        }
      }
    },
    async assignReferenceNumberToEvents(ctx) {
      const events = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'events') });

      for( let eventUri of events ) {
        await ctx.call('ldp.resource.patch', {
          resourceUri: eventUri,
          triplesToAdd: [
            triple(namedNode(eventUri), namedNode('http://virtual-assembly.org/ontologies/cdlt#referenceNumber'), literal(uuid().slice(0,8).toUpperCase())),
          ],
          webId: 'system'
        });
      }
    },
    async migrateImagePredicates(ctx) {
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#image', newPredicate: 'http://virtual-assembly.org/ontologies/pair#depictedBy' }, { parentCtx: ctx });
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#isDepictedBy', newPredicate: 'http://virtual-assembly.org/ontologies/pair#depictedBy' }, { parentCtx: ctx });
    },
    async setWritePermissionsToCreator(ctx) {
      console.log('*** setWritePermissionsToCreator ***');
      await this.setWritePermissionsToCreatorForASingleResource(ctx, 'places');
      await this.setWritePermissionsToCreatorForASingleResource(ctx, 'events');
      await this.setWritePermissionsToCreatorForASingleResource(ctx, 'courses');
      await this.setWritePermissionsToCreatorForASingleResource(ctx, 'paths');
      await this.setWritePermissionsToCreatorForASingleResource(ctx, 'organizations');
    },
    async clearUserRights(ctx) {
      const { userUri, dataset } = ctx.params;

      // Remove user from all WebACL groups he may be member of
      await ctx.call('triplestore.update', {
        query: `
          WITH <http://semapps.org/webacl>
          DELETE { ?groupUri <http://www.w3.org/2006/vcard/ns#hasMember> <${userUri}> }
          WHERE { ?groupUri <http://www.w3.org/2006/vcard/ns#hasMember> <${userUri}> }
        `,
        dataset,
        webId: 'system'
      });

      // Remove all authorization given specifically to this user
      await ctx.call('triplestore.update', {
        query: `
          WITH <http://semapps.org/webacl>
          DELETE { ?authorizationUri <http://www.w3.org/ns/auth/acl#agent> <${userUri}> }
          WHERE { ?authorizationUri <http://www.w3.org/ns/auth/acl#agent> <${userUri}> }
        `,
        dataset,
        webId: 'system'
      });
    },
    async replaceThemesWithSectors(ctx) {
      const oldResourceUris = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'themes') });

      for( let oldResourceUri of oldResourceUris ) {
        const newResourceUri = oldResourceUri.replace('/themes/', '/sectors/');

        await this.actions.moveResource({ oldResourceUri, newResourceUri });

        const oldContainerUri = getContainerFromUri(oldResourceUri);
        const newContainerUri = getContainerFromUri(newResourceUri);

        this.logger.info('Replacing ' + oldContainerUri + ' with ' + newContainerUri);

        await ctx.call('triplestore.update', {
          query: `
            PREFIX ldp: <http://www.w3.org/ns/ldp#>
            DELETE { <${oldContainerUri}> ldp:contains <${newResourceUri}> }
            INSERT { <${newContainerUri}> ldp:contains <${newResourceUri}> }
            WHERE { <${oldContainerUri}> ldp:contains <${newResourceUri}> }
          `,
          webId: 'system'
        });

        await ctx.call('triplestore.update', {
          query: `
            PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
            DELETE { <${newResourceUri}> a pair:Theme }
            INSERT { <${newResourceUri}> a pair:Sector }
            WHERE { <${newResourceUri}> a pair:Theme }
          `,
          webId: 'system'
        });
      }

      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#hasTopic', newPredicate: 'http://virtual-assembly.org/ontologies/pair#hasSector' }, { parentCtx: ctx });
      await this.actions.replacePredicate({ oldPredicate: 'http://virtual-assembly.org/ontologies/pair#topicOf', newPredicate: 'http://virtual-assembly.org/ontologies/pair#sectorOf' }, { parentCtx: ctx });
    },
    async publicationStatusInitialization(ctx) {

      const courses = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'courses') });
      const events = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'events') });
      const paths = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'paths') });
      const places = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'places') });
      const organizations = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, 'organizations') });

      for( let resourceUri of courses.concat(events).concat(paths).concat(places).concat(organizations) ) {
        const resource = await this.broker.call('ldp.resource.get', {
          resourceUri: resourceUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });
        let status = resource["pair:hasStatus"];
        let publicationStatus = resource["cdlt:hasPublicationStatus"];
        
        if ( publicationStatus ) {
          this.logger.info(resourceUri + ' already processed. Skipped...');
          continue;
        } else {
          if ( status && status === urlJoin(CONFIG.HOME_URL, 'status/en-cours') ) {
            publicationStatus = urlJoin(CONFIG.HOME_URL, 'publication-status/en-cours');
          } else {
            publicationStatus = urlJoin(CONFIG.HOME_URL, 'publication-status/valide');
          }
          await this.broker.call('triplestore.update', {
            query: `
              PREFIX cdlt: <http://virtual-assembly.org/ontologies/cdlt#>
              INSERT DATA { <${resourceUri}> cdlt:hasPublicationStatus <${publicationStatus}> }
            `,
            webId: 'system'
          });
          this.logger.info('Adding ' + publicationStatus + ' to ' + resourceUri + '...');
        }
      }
    }
  },
  methods: {
    async setWritePermissionsToCreatorForASingleResource(ctx, resourceSlug) {
      
      const resources = await ctx.call('ldp.container.getUris', { containerUri: urlJoin(CONFIG.HOME_URL, resourceSlug) });
      console.log('********************************************************');      
      console.log('****** resource: ', resourceSlug, 'nb:', resources.length);      
      console.log('********************************************************');      

      let i=0;
      for( let resourceUri of resources ) {
        
        i++;
        console.log('****** ', i);
        console.log('          ', resourceUri);
        
        const resource = await this.broker.call('ldp.resource.get', {
          resourceUri: resourceUri,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });

        await ctx.call('webacl.resource.removeRights', {
          webId: 'system',
          resourceUri: resource.id,
          rights: {
            anon: {
              write: true
            },
            anyUser: {
              write: true
            }
          }
        });
        console.log('           removeRights (anon and anyUser)');
        
        if (!resource['dc:creator']) {
          console.log(' x         => No creator !');
        } else {
          await ctx.call('webacl.resource.addRights', {
            webId: 'system',
            resourceUri: resource.id,
            additionalRights: {
              user: {
                uri: resource['dc:creator'],
                write: true
              }
            }
          });
          console.log('           addRights, user:', resource['dc:creator']);
        }
      }
    }
  }
}