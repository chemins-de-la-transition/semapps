const multiparty = require('multiparty');
const CONFIG = require('../config');

const formDataMiddleware = (req, res, next) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if( err ) throw err;
    req.$params = { ...req.$params, ...fields };
    if( Object.keys(files).length > 0 ) req.$params.files = files;
    next();
  });
};

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
        bodyParsers: { json: false, urlencoded: false },
        aliases: {
          'POST /': [formDataMiddleware, 'webhook.process']
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
