const path = require('path');
const { AuthOIDCService } = require('@semapps/auth');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');
const urlJoin = require("url-join");

module.exports = {
  mixins: [AuthOIDCService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    jwtPath: path.resolve(__dirname, '../jwt'),
    registrationAllowed: true,
    selectSsoData: authData => ({
      email: authData.email,
      name: authData.given_name,
      familyName: authData.family_name
    }),
    // webIdSelection: ['nick', 'name', 'familyName'],
    accountsDataset: CONFIG.AUTH_ACCOUNTS_DATASET,
    // OIDC-specific settings
    issuer: CONFIG.OIDC_ISSUER,
    clientId: CONFIG.OIDC_CLIENT_ID,
    clientSecret: CONFIG.OIDC_CLIENT_SECRET,
  },
  events: {
    async 'auth.registered'(ctx) {
      const { webId, profileData } = ctx.params;

      await ctx.call('ldp.resource.patch', {
        resource: {
          '@context': urlJoin(CONFIG.HOME_URL, 'context.json'),
          '@id': webId,
          '@type': ['pair:Person', 'foaf:Person'],
          'pair:label': `${profileData.name} ${profileData.familyName.toUpperCase()}`,
          'pair:firstName': profileData.name,
          'pair:lastName': profileData.familyName,
          'pair:e-mail': profileData.email,
          'pair:hasType': CONFIG.HOME_URL + '/types/actor',
        },
        contentType: MIME_TYPES.JSON,
        webId: 'system'
      });
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
        contentType: MIME_TYPES.JSON,
        webId: 'system'
      });
    }
  }
};
