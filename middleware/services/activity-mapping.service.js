const { ActivityMappingService } = require('@semapps/activitypub');

module.exports = {
  mixins: [ActivityMappingService],
  settings: {
    mappers: [
      {
        match: {
          type: 'Announce',
          object: {
            type: 'cdlt:OfferAndNeed',
          }
        },
        mapping: {
          title: {
            en: 'A new offer or need matches with your alerts: {{activity.object.pair:label}}',
            fr: 'Une nouvelle annonce correspond à vos alertes: {{activity.object.pair:label}}',
          },
          description: "{{activity.object.pair:comment}}",
          actionName: {
            en: 'View',
            fr: 'Voir',
          },
          actionLink: '/OfferAndNeed/{{encodeUri activity.object.id}}/show'
        }
      }
    ],
    handlebars: {
      helpers: {
        encodeUri: (uri) => encodeURIComponent(uri),
      },
    },
  }
};