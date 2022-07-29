const { ControlledContainerMixin } = require('@semapps/ldp');
const urlJoin = require("url-join");
const CONFIG = require("../config");
const { ACTOR_TYPES } = require("@semapps/activitypub");

module.exports = {
  name: 'users',
  mixins: [ControlledContainerMixin],
  settings: {
    path: '/users',
    acceptedTypes: ['pair:Person', 'foaf:Person', ACTOR_TYPES.PERSON],
    preferredView: '/Person',
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
    excludeFromMirror: false
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
        if( account ) {
          await ctx.call('auth.account.remove', { id: account['@id'] });
        }
        return res;
      }
    }
  }
};
