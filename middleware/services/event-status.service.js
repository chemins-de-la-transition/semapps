const urlJoin = require('url-join');
const CronMixin = require("moleculer-cron");
const CONFIG = require('../config');

module.exports = {
  name: 'event-status',
  mixins: [CronMixin],
  settings: {
    containerUri: urlJoin(CONFIG.HOME_URL, 'events')
  },
  dependencies: ['triplestore'],
  actions: {
    tagEvents(ctx) {
      this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          DELETE {
            ?eventUri pair:hasStatus ?status .
          }
          INSERT { 
            ?eventUri pair:hasStatus <${urlJoin(CONFIG.HOME_URL, 'status', 'open')}> .
          }
          WHERE {
            <${this.settings.containerUri}> ldp:contains ?eventUri .
            OPTIONAL { ?eventUri pair:hasStatus ?status . }
            ?eventUri pair:endDate ?endDate .
            FILTER(NOW() < ?endDate) .
          }
        `,
        webId: 'system'
      });

      this.broker.call('triplestore.update', {
        query: `
          PREFIX pair: <http://virtual-assembly.org/ontologies/pair#>
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          DELETE {
            ?eventUri pair:hasStatus ?status .
          }
          INSERT { 
            ?eventUri pair:hasStatus <${urlJoin(CONFIG.HOME_URL, 'status', 'finished')}> .
          }
          WHERE {
            <${this.settings.containerUri}> ldp:contains ?eventUri .
            OPTIONAL { ?eventUri pair:hasStatus ?status . }
            ?eventUri pair:endDate ?endDate .
            FILTER(NOW() > ?endDate) .
          }
        `,
        webId: 'system'
      });

      // Invalidate all events cache
      if( this.broker.cacher ) {
        // TODO improve performance by only invalidating updated events
        this.broker.call('ldp.cache.invalidateResource', { resourceUri: urlJoin(CONFIG.HOME_URL, 'events') });
      }
    }
  },
  crons: [
    {
      cronTime: '0 */3 * * *',
      onTick: function() {
        // this.call('event-status.tagEvents');
      },
      timeZone: 'Europe/Paris'
    },
  ]
};
