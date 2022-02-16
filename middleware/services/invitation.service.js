const urlJoin = require('url-join');
const { defaultToArray } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  name: 'invitation',
  dependencies: ['api'],
  events: {
    async 'ldp.resource.created'(ctx) {
      const { newData } = ctx.params;
      if( defaultToArray(newData.type).includes('pair:Person') && newData['pair:hasType'] === urlJoin(CONFIG.HOME_URL, 'types', 'actor')) {
        // Mark actor as invited
        await ctx.call('ldp.resource.put', {
          resource: {
            ...newData,
            'pair:hasStatus': urlJoin(CONFIG.HOME_URL, 'status', 'invited')
          },
          contentType: MIME_TYPES.JSON
        });

        await ctx.call('mailer.inviteActor', { userData: newData });
      }
    },
    async 'auth.connected'(ctx) {
      const { webId } = ctx.params;

      const userData = await ctx.call('ldp.resource.get', {
        resourceUri: webId,
        accept: MIME_TYPES.JSON
      });

      // Mark actor as connected
      await ctx.call('ldp.resource.put', {
        resource: {
          ...userData,
          'pair:hasStatus': urlJoin(CONFIG.HOME_URL, 'status', 'connected')
        },
        contentType: MIME_TYPES.JSON
      });
    }
  }
};
