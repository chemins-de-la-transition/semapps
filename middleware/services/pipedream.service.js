const fetch = require("node-fetch");

module.exports = {
  name: 'pipedream',
  settings: {
    webhookUrl: 'https://eoxe7g2vooldrlq.m.pipedream.net'
  },
  actions: {
    async post(ctx) {
      const { sheet, data } = ctx.params;
      await fetch(this.settings.webhookUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet,
          ...data
        })
      });
    }
  }
}