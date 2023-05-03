const urlJoin = require("url-join");
const CONFIG = require("../config");

const PUBLISHED_STATUS = urlJoin(CONFIG.HOME_URL, 'publication-status/valide');
const UNPUBLISHED_STATUS = urlJoin(CONFIG.HOME_URL, 'publication-status/en-cours');

module.exports = {
  name: 'publisher',
  dependencies: ['webacl.resource'],
  events: {
    async 'ldp.resource.created'(ctx) {
      const { resourceUri, newData } = ctx.params;
      if (newData['cdlt:hasPublicationStatus'] === PUBLISHED_STATUS) {
        await ctx.call('webacl.resource.addRights', {
          resourceUri,
          additionalRights: {
            anon: {
              read: true
            }
          },
          webId: 'system'
        });
      }
    },
    async 'ldp.resource.updated'(ctx) {
      const { resourceUri, newData, oldData } = ctx.params;

      if (oldData['cdlt:hasPublicationStatus'] === UNPUBLISHED_STATUS && newData['cdlt:hasPublicationStatus'] === PUBLISHED_STATUS) {
        await ctx.call('webacl.resource.addRights', {
          resourceUri,
          additionalRights: {
            anon: {
              read: true
            }
          },
          webId: 'system'
        });
      }

      if (oldData['cdlt:hasPublicationStatus'] === PUBLISHED_STATUS && newData['cdlt:hasPublicationStatus'] === UNPUBLISHED_STATUS) {
        await ctx.call('webacl.resource.removeRights', {
          resourceUri,
          rights: {
            anon: {
              read: true
            }
          },
          webId: 'system'
        });
      }
    }
  }
};
