const path = require('path');
const { namedNode, triple, literal } = require('@rdfjs/data-model');
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
    webIdSelection: ['nick', 'name', 'familyName'],
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
        resourceUri: webId,
        triplesToAdd: [
          triple(namedNode(webId), namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://virtual-assembly.org/ontologies/pair#Person')),
          triple(namedNode(webId), namedNode('http://virtual-assembly.org/ontologies/pair#label'), literal(`${profileData.name} ${profileData.familyName.toUpperCase()}`)),
          triple(namedNode(webId), namedNode('http://virtual-assembly.org/ontologies/pair#firstName'), literal(profileData.name)),
          triple(namedNode(webId), namedNode('http://virtual-assembly.org/ontologies/pair#lastName'), literal(profileData.familyName)),
          triple(namedNode(webId), namedNode('http://virtual-assembly.org/ontologies/pair#hasType'), namedNode(urlJoin(CONFIG.HOME_URL, 'types/traveler'))),
        ],
        webId: 'system'
      });
    },
    async 'auth.connected'(ctx) {
      const { webId } = ctx.params;

      const userData = await ctx.call('ldp.resource.get', {
        resourceUri: webId,
        accept: MIME_TYPES.JSON
      });

      // Mark user as connected
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
