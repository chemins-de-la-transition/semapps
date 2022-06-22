const urlJoin = require("url-join");
const { JotformImporterMixin } = require('@semapps/importer');
const QueueMixin = require("moleculer-bull");
const CONFIG = require('../config');

const jotformDateToIsoString = value => {
  const day = parseInt(value.day, 10);
  const month = parseInt(value.month, 10);
  const year = parseInt(value.year, 10);
  const date = new Date(year, month-1, day);
  // Remove the timezone offset to avoid having the previous day ending with 22:00:00+0200
  return (new Date(date.getTime() - date.getTimezoneOffset()*60000)).toISOString();
}

module.exports = {
  name: 'importer.registrations',
  mixins: [JotformImporterMixin, CONFIG.NODE_ENV === 'production' && CONFIG.QUEUE_SERVICE_URL ? QueueMixin(CONFIG.QUEUE_SERVICE_URL) : {}],
  settings: {
    source: {
      jotform: {
        apiKey: CONFIG.JOTFORM_API_KEY,
        type: 'submissions'
      },
    },
    dest: {
      containerUri: urlJoin(CONFIG.HOME_URL, 'registrations')
    },
    cronJob: CONFIG.NODE_ENV === 'production' ? {
      time: '0 0 4 * * *', // Every night at 4am
      timeZone: 'Europe/Paris'
    } : undefined
  },
  methods: {
    getAnswer(answers, name) {
      const result = Object.values(answers).find(a => a.name === name);
      return result && result.answer;
    },
    async transform(submission) {
      const lepId = this.getAnswer(submission.answers, 'lepid');
      const webId = this.getAnswer(submission.answers, 'webid');
      const startDate = this.getAnswer(submission.answers, 'dateArrivee');
      const endDate = this.getAnswer(submission.answers, 'dateDepart');

      if (!lepId || !webId || !startDate || !endDate) {
        this.logger.info('Some required fields are missing for submission ' + submission.id + ', skipping...');
        return false;
      }

      return({
        '@type': 'cdlt:Registration',
        'cdlt:registrationFor': lepId,
        'cdlt:registrant': webId,
        'pair:startDate': jotformDateToIsoString(startDate),
        'pair:endDate': jotformDateToIsoString(endDate),
      })
    }
  }
};
