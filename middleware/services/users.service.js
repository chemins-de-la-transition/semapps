const { ControlledContainerMixin } = require('@semapps/ldp');
const urlJoin = require("url-join");
const CONFIG = require("../config");

module.exports = {
  name: 'users',
  mixins: [ControlledContainerMixin],
  settings: {
    path: '/users',
    acceptedTypes: ['pair:Person'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  actions: {
    // When a user is created, create an account with the email
    // Then remove the email so that it's not visible
    // Also send an invitation email if it's an actor
    async post(ctx) {
      const { containerUri, slug, resource, contentType } = ctx.params;

      if( resource['pair:hasType'] === urlJoin(CONFIG.HOME_URL, 'types', 'actor')) {
        resource['pair:hasStatus'] = urlJoin(CONFIG.HOME_URL, 'status', 'invited');
      }

      const accountData = await ctx.call('auth.account.create', { email: resource['foaf:email'] });
      delete resource['foaf:email'];

      const actorUri = await ctx.call('ldp.container.post', { containerUri, slug, resource, contentType });

      await ctx.call('auth.account.attachWebId', { accountUri: accountData['@id'], webId: actorUri });

      if( resource['pair:hasType'] === urlJoin(CONFIG.HOME_URL, 'types', 'actor')) {
        await ctx.call('mailer.inviteActor', { actorUri, accountData });
      }

      return actorUri;
    }
  },
  hooks: {
    after: {
      // Delete account after user is deleted
      async delete(ctx, res) {
        const account = await ctx.call('auth.account.findByWebId', { webId: res.resourceUri });
        await ctx.call('auth.account.remove', { id: account['@id'] });
        return res;
      }
    }
  }
};