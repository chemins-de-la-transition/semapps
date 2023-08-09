const { SingleMailNotificationsService } = require('@semapps/notifications');
const QueueMixin = require('moleculer-bull');
const CONFIG = require('../config');
const transport = require('../transport');

module.exports = {
  mixins: [SingleMailNotificationsService, QueueMixin(CONFIG.QUEUE_SERVICE_URL)],
  settings: {
    defaultLocale: CONFIG.LOCALE,
    defaultFrontUrl: CONFIG.FRONTOFFICE_URL,
    color: '#D4A24C',
    // The following settings are from the moleculer-mail mixin used to send emails
    // See https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-mail
    from: `${CONFIG.FROM_NAME} <${CONFIG.FROM_EMAIL}>`,
    transport,
    // Global data to be used in the template
    data: {}
  }
};
