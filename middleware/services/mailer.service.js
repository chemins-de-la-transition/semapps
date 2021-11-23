const path = require('path');
const urlJoin = require('url-join');
const MailerService = require('moleculer-mail');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  name: 'mailer',
  mixins: [MailerService],
  settings: {
    from: `${CONFIG.FROM_NAME} <${CONFIG.FROM_EMAIL}>`,
    transport: {
      host: CONFIG.SMTP_HOST,
      port: CONFIG.SMTP_PORT,
      secure: CONFIG.SMTP_SECURE,
      auth: {
        user: CONFIG.SMTP_USER,
        pass: CONFIG.SMTP_PASS,
      },
    },
    templateFolder: path.join(__dirname, "../templates"),
  },
  dependencies: ['api'],
  async started() {
    // Wait a bit before adding the route, or sometimes it is not added
    await new Promise(resolve => setTimeout(resolve, 3000));

    await this.broker.call('api.addRoute', {
      route: {
        bodyParsers: { json: true },
        aliases: {
          [`POST _mailer/contact-place`]: 'mailer.contactPlace'
        }
      }
    });
  },
  actions: {
    async contactPlace(ctx) {
      let { placeUri, name, email, content } = ctx.params;

      if( !placeUri ) {
        throw new Error('One or more parameters are missing');
      }

      const place = await ctx.call('ldp.resource.get', {
        resourceUri: placeUri,
        accept: MIME_TYPES.JSON
      });

      await ctx.call('mailer.send', {
        to: place['pair:e-mail'],
        replyTo: `${name} <${email}>`,
        template: 'contact-place',
        data: {
          place,
          placeFrontUri: `https://app.lescheminsdelatransition.org/Place/${encodeURIComponent(placeUri)}/show`,
          name,
          email,
          content,
          contentWithBr: content.replace(/\r\n|\r|\n/g, '<br />')
        }
      });
    },
    async inviteActor(ctx) {
      let { userData } = ctx.params;

      await ctx.call('mailer.send', {
        to: userData['foaf:email'],
        replyTo: this.settings.from,
        template: 'invite-actor',
        data: {
          userData,
          loginUri: `https://app.lescheminsdelatransition.org/login`
        }
      });
    },
    async notifyOrganizer(ctx) {
      let { to, lep } = ctx.params;

      await ctx.call('mailer.send', {
        to,
        replyTo: this.settings.from,
        template: 'notify-organizer',
        data: {
          lep
        },
      });
    },
    async notifyVisitor(ctx) {
      let { to, lep, prenom, nom } = ctx.params;

      await ctx.call('mailer.send', {
        to,
        replyTo: this.settings.from,
        template: 'notify-visitor',
        data: {
          lep, prenom, nom
        },
      });
    }
  }
};
