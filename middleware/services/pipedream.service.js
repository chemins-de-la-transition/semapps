const fetch = require("node-fetch");
const { MIME_TYPES } = require("@semapps/mime-types");

module.exports = {
  name: 'pipedream',
  dependencies: ['api'],
  async started() {
    this.broker.call('api.addRoute', {
      route: {
        path: '/_stats',
        bodyParsers: {
          json: true
        },
        aliases: {
          'POST /click': 'pipedream.click'
        }
      }
    });
  },
  actions: {
    async post(ctx) {
      const { url, data } = ctx.params;
      const now = new Date();
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          posted: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`,
          ...data,
        })
      });
    },
    async postContact(ctx) {
      this.actions.post(
        {
          url: 'https://eozmaiweichanh3.m.pipedream.net',
          data: ctx.params
        },
        {
        parentCtx: ctx
      }
      );
    },
    async postRegistration(ctx) {
      this.actions.post(
        {
          url: 'https://eoxe7g2vooldrlq.m.pipedream.net',
          data: ctx.params
        },
        {
          parentCtx: ctx
        }
      );
    },
    async click(ctx) {
      const { userUri, resourceUri } = ctx.params;

      const user = await ctx.call('ldp.resource.get', {
        resourceUri: userUri,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });

      const resource = await ctx.call('ldp.resource.get', {
        resourceUri: resourceUri,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });

      this.actions.post(
        {
          url: 'https://eo36jy5cssig664.m.pipedream.net',
          data: {
            user,
            resource
          }
        },
        {
          parentCtx: ctx
        }
      );
    },
  }
}