const urlJoin = require("url-join");
const { ActivityPubService, ACTOR_TYPES } = require('@semapps/activitypub');
const { getSlugFromUri } = require('@semapps/ldp');
const containers = require('../containers');
const CONFIG = require('../config');

module.exports = {
  mixins: [ActivityPubService],
  settings: {
    baseUri: CONFIG.HOME_URL,
    jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json'),
    containers,
    selectActorData: resource => ({
      'https://www.w3.org/ns/activitystreams#name': resource['pair:label']
    }),
    like: {
      attachToObjectTypes: ['cdlt:Path', 'cdlt:Course', 'pair:Event', 'pair:Place', 'pair:Person', 'pair:Organization', 'cdlt:OfferAndNeed']
    },
    reply: {
      attachToObjectTypes: ['cdlt:Path', 'cdlt:Course', 'pair:Event', 'pair:Place', 'pair:Organization', 'cdlt:OfferAndNeed']
    },
    relay: false
  }
};
