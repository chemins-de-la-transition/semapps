const { TripleStoreService } = require('@semapps/triplestore');
const CONFIG = require('../config');

module.exports = {
  mixins: [TripleStoreService],
  settings: {
    url: CONFIG.SPARQL_ENDPOINT,
    user: CONFIG.JENA_USER,
    password: CONFIG.JENA_PASSWORD,
    mainDataset: CONFIG.MAIN_DATASET,
  },
  async started() {
    await this.broker.call('triplestore.dataset.create', {
      dataset: CONFIG.MAIN_DATASET,
      secure: true
    });
  }
};
