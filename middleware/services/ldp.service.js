const { LdpService } = require('@semapps/ldp');
const DocumentTaggerMixin = require('../mixins/document-tagger');
const urlJoin = require('url-join');
const ontologies = require('../ontologies');
const CONFIG = require('../config');
const containers = require('../containers');

module.exports = {
  mixins: [LdpService, DocumentTaggerMixin],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies,
    containers,
    defaultContainerOptions: {
      jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json'),
      newResourcesPermissions: {
        anon: {
          read: true
        },
        anyUser: {
          read: true
        }
      }
    }
  }
};
