const urlJoin = require("url-join");
const path = require("path");
const { ImporterMixin } = require('@semapps/importer');
const CONFIG = require('../config');

module.exports = {
  name: 'importer.status',
  mixins: [ImporterMixin],
  settings: {
    source: {
      getAllFull: path.resolve(__dirname, './files/status.json'),
      fieldsMapping: {
        slug: 'slug'
      },
    },
    dest: {
      containerUri: urlJoin(CONFIG.HOME_URL, 'status')
    }
  },
  methods: {
    async transform(data) {
      const { slug, ...otherData } = data;
      return otherData;
    }
  }
};
