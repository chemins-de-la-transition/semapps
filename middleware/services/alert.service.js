const urlJoin = require("url-join");
const { ACTOR_TYPES, ACTIVITY_TYPES } = require('@semapps/activitypub');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require("../config");

const BOT_SLUG = 'alert-bot';
const BOT_URI = urlJoin(CONFIG.HOME_URL, 'bots', BOT_SLUG);
const BOT_NAME = 'Alert Bot';

// Taken from https://stackoverflow.com/a/21623206/7900695
const distanceBetweenPoints = (lat1, lon1, lat2, lon2) => {
  const p = 0.017453292519943295; // Math.PI / 180
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};

const defaultToArray = value => (!value ? [] : Array.isArray(value) ? value : [value]);

const AlertService = {
  name: 'alert',
  dependencies: [
    'activitypub',
    'activitypub.follow', // Ensure the /followers and /following collection are registered
    'auth.account',
    'ldp.container',
    'ldp.registry'
  ],
  async started() {
    // Wait until bots container has been created
    let containerExist;
    do {
      containerExist = await this.broker.call('ldp.container.exist', { containerUri: urlJoin(CONFIG.HOME_URL), webId: 'system' });
    } while (!containerExist);

    const botExist = await this.broker.call('auth.account.usernameExists', { username: BOT_SLUG });

    if (!botExist) {
      this.logger.info(`Bot ${BOT_URI} does not exist yet, creating it...`);

      const account = await this.broker.call(
        'auth.account.create',
        {
          username: BOT_SLUG,
          webId: BOT_URI
        },
        { meta: { isSystemCall: true } }
      );

      try {
        await this.broker.call('ldp.container.post', {
          containerUri: urlJoin(CONFIG.HOME_URL, 'bots'),
          slug: BOT_SLUG,
          resource: {
            '@context': 'https://www.w3.org/ns/activitystreams',
            type: ACTOR_TYPES.APPLICATION,
            preferredUsername: BOT_SLUG,
            name: BOT_NAME
          },
          contentType: MIME_TYPES.JSON,
          webId: 'system'
        });
      } catch(e) {
        // Delete account if resource creation failed, or it may cause problems when retrying
        await this.broker.call('auth.account.remove', { id: account['@id'] });
        throw e;
      }
    }

    // Wait until the actor is fully created
    this.botActor = await this.broker.call('activitypub.actor.awaitCreateComplete', { actorUri: BOT_URI });
  },
  actions: {
    async announce(ctx) {
      const { offerAndNeed } = ctx.params;
      let actorsToNotify = [];

      console.log('offerAndNeed', offerAndNeed);

      const alertsContainer = await ctx.call('ldp.container.get', { 
        containerUri: CONFIG.HOME_URL + 'alerts', 
        accept: MIME_TYPES.JSON, 
        webId: 'system' 
      });

      console.log('alerts', alertsContainer);
      
      for (let alert of alertsContainer?.['ldp:contains']) {
        if (this.matchLocation(offerAndNeed, alert) && (this.matchSector(offerAndNeed, alert) || this.matchTopic(offerAndNeed, alert))) {
          console.log('Match!!', offerAndNeed, alert)
          actorsToNotify.push(alert['cdlt:proposedBy']);
        }
      }

      console.log('actorsToNotify', actorsToNotify);

      if (actorsToNotify.length > 0) {
        await ctx.call(
          'activitypub.outbox.post',
          {
            collectionUri: this.botActor.outbox,
            type: ACTIVITY_TYPES.ANNOUNCE,
            object: offerAndNeed.id,
            to: actorsToNotify
          },
          {
            meta: {
              webId: this.botActor.id
            }
          }
        );
      }
    }
  },
  methods: {
    matchLocation(offerAndNeed, alert) {
      // If no location is set in the OfferAndNeed, it is not geo-localized
      if (!offerAndNeed['pair:hasLocation']) return true;
      // If no location is set in the alert, the user wants to be notified of all objects
      if (!alert['pair:hasLocation']) return true;
      const distance = distanceBetweenPoints(
        parseFloat(alert['pair:hasLocation']?.['pair:latitude']),
        parseFloat(alert['pair:hasLocation']?.['pair:longitude']),
        parseFloat(offerAndNeed['pair:hasLocation']?.['pair:latitude']),
        parseFloat(offerAndNeed['pair:hasLocation']?.['pair:longitude'])
      );
      return distance <= parseInt(alert['cdlt:radius']);
    },
    matchSector(offerAndNeed, alert) {
      if (!offerAndNeed['pair:hasSector'] || !alert['pair:hasSector']) return false;
      // Return true if at least one sector of OfferAndNeed match with one sector of alert
      return defaultToArray(offerAndNeed['pair:hasSector']).some(t => defaultToArray(alert['pair:hasSector']).includes(t));
    },
    matchTopic(offerAndNeed, alert) {
      if (!offerAndNeed['pair:hasTopic'] || !alert['pair:hasTopic']) return false;
      // Return true if at least one topic of OfferAndNeed match with one topic of alert
      return defaultToArray(offerAndNeed['pair:hasTopic']).some(t => defaultToArray(alert['pair:hasTopic']).includes(t));
    },
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      const { newData } = ctx.params;
      // OfferAndNeed has been created and immediately published
      if (newData.type === 'cdlt:OfferAndNeed' 
          && newData['cdlt:hasPublicationStatus'] === urlJoin(CONFIG.HOME_URL, 'publication-status/valide')
          ) {
        this.actions.announce({ offerAndNeed: newData }, { parentCtx: ctx });
      }
    },
    async 'ldp.resource.updated'(ctx) {
      const { newData, oldData } = ctx.params;
      // OfferAndNeed has been published
      if (newData.type === 'cdlt:OfferAndNeed' 
          && oldData['cdlt:hasPublicationStatus'] === urlJoin(CONFIG.HOME_URL, 'publication-status/en-cours')
          && newData['cdlt:hasPublicationStatus'] === urlJoin(CONFIG.HOME_URL, 'publication-status/valide')
          ) {
        this.actions.announce({ offerAndNeed: newData }, { parentCtx: ctx });
      }
    }
  }
};

module.exports = AlertService;
