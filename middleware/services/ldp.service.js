const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
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
    preferredViewForResource: async (resourceUri, containerPreferredView) => {
      if (!containerPreferredView) return resourceUri;
      return urlJoin(CONFIG.FRONTOFFICE_URL, containerPreferredView, encodeURIComponent(resourceUri), 'show')
    },
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
