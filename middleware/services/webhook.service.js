const multiparty = require('multiparty');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

const defaultToArray = value => (!value ? [] : Array.isArray(value) ? value : [value]);

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
  dependencies: ['api', 'mailer'],
  async started() {
    await this.broker.call('api.addRoute', {
      route: {
        path: '/webhooks/' + this.settings.hash,
        bodyParsers: {
          json: false,
          urlencoded: false
        },
        aliases: {
          'POST /': [formDataMiddleware, 'webhook.process']
        }
      }
    });
  },
  actions: {
    async process(ctx) {
      const getResource = id => ctx.call('ldp.resource.get', {
        resourceUri: id,
        accept: MIME_TYPES.JSON
      });

      const rawJson = JSON.parse(ctx.params.rawRequest)
      const json = Object.keys(rawJson).reduce((acc, e) => {
        acc[e.split('_')[1]] = rawJson[e]
        return acc
      }, {})

      const { lepid, nomComplet, email } = json;

      const lep = await getResource(lepid)
      const organizers = await Promise.all(defaultToArray(lep['cdlt:organizedBy']).map(getResource));

      await Promise.all(organizers.map(async o => {
        await ctx.call('mailer.notifyOrganizer', { to:  o['foaf:email'], lep: lep['pair:label'], });
      }));

      await ctx.call('mailer.notifyVisitor', {
        to:  email,
        lep: lep['pair:label'],
        prenom: nomComplet.first,
        nom: nomComplet.last
      });

      await ctx.call('pipedream.postRegistration', {
        name: nomComplet.first + ' ' + nomComplet.last,
        email,
        formData: json,
        resource: lep,
        resourceType: defaultToArray(lep.type).join(', '),
        resourceEmail: organizers.map(o => o['foaf:email']).join(', ')
      });
    }
  }
};
