const ApiGatewayService = require('moleculer-web');
const { Errors: E } = require("moleculer-web");

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    cors: {
      origin: '*',
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
      exposedHeaders: '*'
    }
  },
  methods: {
    authenticate(ctx, route, req, res) {
      if (req.headers.signature) {
        return ctx.call('signature.authenticate', { route, req, res });
      } else if (req.headers.authorization) {
        return ctx.call('auth.authenticate', { route, req, res });
      } else {
        ctx.meta.webId = 'anon';
        return Promise.resolve(null);
      }
    },
    authorize(ctx, route, req, res) {
      if (req.headers.signature) {
        return ctx.call('signature.authorize', { route, req, res });
      } else if (req.headers.authorization) {
        return ctx.call('auth.authorize', { route, req, res });
      } else {
        ctx.meta.webId = 'anon';
        return Promise.reject(new E.UnAuthorizedError(E.ERR_NO_TOKEN));
      }
    }
  }
};
