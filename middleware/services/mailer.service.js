const path = require('path');
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
          [`POST _mailer/contact`]: 'mailer.contact'
        }
      }
    });
  },
  actions: {
    async contact(ctx) {
      const { resourceUri, name, email, content } = ctx.params;
      let to, resourceLabel, resourceFrontPath;

      if( !resourceUri ) throw new Error('Un ou plusieurs paramètres sont manquants');

      const resource = await ctx.call('ldp.resource.get', {
        resourceUri,
        accept: MIME_TYPES.JSON,
        webId: 'system'
      });

      const types = Array.isArray(resource.type) ? resource.type : [resource.type];

      if( types.includes('pair:Place') ) {
        to = resource['pair:e-mail'];
        resourceLabel = resource['pair:label'];
        resourceFrontPath = 'Place';
      } else if( types.includes('pair:Event') ) {
        to = resource['pair:e-mail'];
        resourceLabel = resource['pair:label'];
        resourceFrontPath = 'Event';
      } else if( types.includes('pair:Organization') ) {
        to = resource['pair:e-mail'];
        resourceLabel = resource['pair:label'];
        resourceFrontPath = 'Organization';
      } else if( types.includes('pair:Person') ) {
        const account = await ctx.call('auth.account.findByWebId', { webId: resourceUri });
        to = account && account.email;
        resourceLabel = "votre profil";
        resourceFrontPath = 'Person';
      } else if( types.includes('cdlt:Path') ) {
        to = "bonjour@lescheminsdelatransition.org";
        resourceLabel = resource['pair:label'];
        resourceFrontPath = 'Path';
      } else if( types.includes('cdlt:OfferAndNeed') ) {
        to = resource['pair:e-mail'];
        resourceLabel = resource['pair:label'];
        resourceFrontPath = 'OfferAndNeed';
      } else {
        throw new Error('Impossible de contacter ce type de ressource: ' + resource.type);
      }

      if (!to) throw new Error('Aucune adresse mail définie pour ' + resourceLabel + '!')

      const resourceFrontUrl = `https://lescheminsdelatransition.org/${resourceFrontPath}/${encodeURIComponent(resourceUri)}/show`;

      await ctx.call('mailer.send', {
        to,
        replyTo: `${name} <${email}>`,
        template: 'contact',
        data: {
          resourceLabel,
          resourceFrontUrl,
          name,
          email,
          content,
          contentWithBr: content.replace(/\r\n|\r|\n/g, '<br />')
        }
      });

      await ctx.call('pipedream.postContact', {
        name,
        email,
        resource,
        resourceType: resourceFrontPath,
        resourceEmail: to
      });
    },
    async inviteActor(ctx) {
      let { actorUri, accountData } = ctx.params;

      const actor = await ctx.call('ldp.resource.get', {
        resourceUri: actorUri,
        accept: MIME_TYPES.JSON
      });

      await ctx.call('mailer.send', {
        to: accountData.email,
        replyTo: this.settings.from,
        template: 'invite-actor',
        data: {
          actor,
          account: accountData,
          loginUri: `https://lescheminsdelatransition.org/login`
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
