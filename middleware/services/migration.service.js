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
    }
  }
}