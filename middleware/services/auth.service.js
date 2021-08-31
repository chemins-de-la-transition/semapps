const urlJoin = require('url-join');
const path = require('path');
const { AuthService } = require('@semapps/auth');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  mixins: [AuthService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    jwtPath: path.resolve(__dirname, '../jwt'),
    oidc: {
      issuer: CONFIG.OIDC_ISSUER,
      clientId: CONFIG.OIDC_CLIENT_ID,
      clientSecret: CONFIG.OIDC_CLIENT_SECRET
    },
    selectProfileData: authData => ({
      email: authData.email,
      name: authData.given_name,
      familyName: authData.family_name
    }),
    registrationAllowed: false
  }
};
