const { MirrorService } = require('@semapps/mirror');
const CONFIG = require('../config');

module.exports = {
  mixins: [MirrorService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
  }
};
