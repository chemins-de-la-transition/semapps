const urlJoin = require("url-join");
const { DiscourseImporterMixin } = require('@semapps/importer');
const QueueMixin = require("moleculer-bull");
const CONFIG = require('../config');

const categoriesMapping = {
  22: '/paths/chemin-des-tiers-lieux'
};

module.exports = {
  name: 'importer.topics',
  mixins: [DiscourseImporterMixin, CONFIG.NODE_ENV === 'production' && CONFIG.QUEUE_SERVICE_URL ? QueueMixin(CONFIG.QUEUE_SERVICE_URL) : {}],
  settings: {
    source: {
      discourse: {
        baseUrl: 'https://forums.lescheminsdelatransition.org/',
        type: 'topics'
      },
    },
    dest: {
      containerUri: urlJoin(CONFIG.HOME_URL, 'debates')
    },
    cronJob: CONFIG.NODE_ENV === 'production' ? {
      time: '0 0 4 * * *', // Every night at 4am
      timeZone: 'Europe/Paris'
    } : undefined
  },
  methods: {
    async transform(topic) {
      if( !Object.keys(categoriesMapping).includes(`${topic.category_id}`) ) return false;

      return({
        '@type': 'pair:Debate',
        'pair:label': topic.title,
        'pair:description': topic.post_stream.posts[0].cooked,
        'pair:nourishes': urlJoin(CONFIG.HOME_URL, categoriesMapping[topic.category_id]),
        'pair:webPage': urlJoin(this.settings.source.discourse.baseUrl, 't', `${topic.id}`)
      })
    }
  }
};
