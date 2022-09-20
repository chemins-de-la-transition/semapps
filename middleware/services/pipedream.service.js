const fetch = require("node-fetch");

module.exports = {
  name: 'pipedream',
  actions: {
    async post(ctx) {
      const { url, data } = ctx.params;
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    },
    async postContact(ctx) {
      const { name, email, resourceLabel, resourceUri } = ctx.params;
      this.actions.post(
        {
          url: 'https://eozmaiweichanh3.m.pipedream.net',
          data: {
            name,
            email,
            resourceLabel,
            resourceUri
          }
        },
        {
        parentCtx: ctx
      }
      );
    },
    async postRegistration(ctx) {
      const { name, email, resourceLabel, resourceUri } = ctx.params;
      this.actions.post(
        {
          url: 'https://eoxe7g2vooldrlq.m.pipedream.net',
          data: {
            name,
            email,
            resourceLabel,
            resourceUri
          }
        },
        {
          parentCtx: ctx
        }
      );
    }
  }
}