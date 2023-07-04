const CONFIG = require('./config');
const { WebAclMiddleware, CacherMiddleware } = require('@semapps/webacl');
const { ObjectsWatcherMiddleware } = require('@semapps/sync');

// Use the cacher only if Redis is configured
const cacherConfig = CONFIG.REDIS_CACHE_URL
  ? {
    type: 'Redis',
    options: {
      prefix: 'action',
      ttl: 2592000, // Keep in cache for one month
      redis: CONFIG.REDIS_CACHE_URL
    }
  }
  : undefined;

module.exports = {
  // You can set all ServiceBroker configurations here
  // See https://moleculer.services/docs/0.14/configuration.html
  middlewares: [
    CacherMiddleware(cacherConfig), // Set the cacher before the WebAcl middleware
    WebAclMiddleware({ baseUrl: CONFIG.HOME_URL }),
    // TODO enable ObjectsWatcherMiddleware when this commit will be published:
    // https://github.com/assemblee-virtuelle/semapps/commit/ec278afeb3cbb07b85036bb0bc80f8824d22b2b9
    // ObjectsWatcherMiddleware({ baseUrl: CONFIG.HOME_URL })
  ],
  // logLevel: 'debug'
};
