const path = require('path');
const { AuthOIDCService } = require('@semapps/auth');
const CONFIG = require('../config');

module.exports = {
  mixins: [AuthOIDCService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    jwtPath: path.resolve(__dirname, '../jwt'),
    registrationAllowed: false,
    selectSsoData: authData => ({
      email: authData.email,
      name: authData.given_name,
      familyName: authData.family_name
    }),
    accountsDataset: CONFIG.AUTH_ACCOUNTS_DATASET,
    // OIDC-specific settings
    issuer: CONFIG.OIDC_ISSUER,
    clientId: CONFIG.OIDC_CLIENT_ID,
    clientSecret: CONFIG.OIDC_CLIENT_SECRET,
  }
};
