const urlJoin = require("url-join");
const { ActivityPubService, ACTOR_TYPES } = require('@semapps/activitypub');
const { getSlugFromUri } = require('@semapps/ldp');
const containers = require('../containers');
const ontologies = require('../ontologies.json');
const CONFIG = require('../config');

module.exports = {
  mixins: [ActivityPubService],
  settings: {
    baseUri: CONFIG.HOME_URL,
    jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json'),
    containers,
    selectActorData: resource => ({
      '@type': ACTOR_TYPES.PERSON,
      name: resource['pair:label'],
      preferredUsername: getSlugFromUri(resource.id)
    })
  }
};
