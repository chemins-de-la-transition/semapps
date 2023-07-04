const urlJoin = require("url-join");
const { ControlledContainerMixin } = require('@semapps/ldp');
const { ACTOR_TYPES } = require("@semapps/activitypub");
const { MIME_TYPES } = require("@semapps/mime-types");
const CONFIG = require("../config");

module.exports = {
  name: 'users',
  mixins: [ControlledContainerMixin],
  settings: {
    path: '/users',
    acceptedTypes: ['pair:Person', 'foaf:Person', ACTOR_TYPES.PERSON],
    preferredView: '/Person',
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
    excludeFromMirror: true
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
    },
    async createAdmin(ctx) {
      const { email, username } = ctx.params;
      const containerUri = await this.actions.getContainerUri({}, { parentCtx: ctx });;

      const adminUri = await this.actions.post({
        containerUri,
        slug: username,
        resource: {
          'pair:label': 'Admin',
          'pair:firstName': 'Admin',
          'foaf:name': 'Admin',
          'foaf:email': email,
          'pair:hasType': urlJoin(CONFIG.HOME_URL, 'types', 'admin')
        },
        contentType: MIME_TYPES.JSON
      }, { parentCtx: ctx, meta: { webId: 'system' } });

      await ctx.call('webacl.resource.addRights', {
        resourceUri: adminUri,
        additionalRights: {
          user: {
            uri: adminUri,
            write: true,
            control: true
          }
        },
        webId: 'system',
      });

      this.logger.info(`Created an admin with URI ${adminUri}`);
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
