const urlJoin = require("url-join");
const { MigrationService } = require('@semapps/migration');
const { MIME_TYPES } = require("@semapps/mime-types");
const CONFIG = require("../config");

module.exports = {
  name: 'migration',
  mixins: [MigrationService],
  actions: {
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
        const event = await this.broker.call('ldp.resource.get', {
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