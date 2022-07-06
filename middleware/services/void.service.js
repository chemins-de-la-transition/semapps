const { VoidService } = require('@semapps/void');
const ontologies = require('../ontologies.json');
const CONFIG = require('../config');

module.exports = {
  mixins: [VoidService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies,
    title: CONFIG.INSTANCE_NAME,
    description: CONFIG.INSTANCE_DESCRIPTION
  }
};
