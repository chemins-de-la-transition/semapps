const fetch = require("node-fetch");

module.exports = {
  name: 'pipedream',
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
    }
  }
}