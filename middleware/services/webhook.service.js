const CONFIG = require('../config');

module.exports = {
  name: 'webhook',
  settings: {
    hash: CONFIG.WEBHOOK_HASH
  },
  dependencies: ['api'],
  async started() {
    await this.broker.call('api.addRoute', {
      route: {
        path: '/webhooks/' + this.settings.hash,
        bodyParsers: { json: true },
        aliases: {
          'POST /': 'webhook.process'
        }
      }
    });
  },
  actions: {
    async process(ctx) {
        console.log('Yeah!', ctx.params);

        return { hello: 'World' };
    }
  }
};
