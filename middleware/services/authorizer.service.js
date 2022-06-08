const { AuthorizerBot } = require('@semapps/webacl');

module.exports = {
  mixins: [AuthorizerBot],
  settings: {
    rules: [
      {
        match: { type: 'pair:Event' },
        rights: {
          read: true,
          write: true
        },
        users: record => record['cdlt:hasReferent']
      },
      {
        match: { type: 'pair:Place' },
        rights: {
          read: true,
          write: true
        },
        users: record => record['cdlt:proposedBy']
      },
      {
        match: { type: 'pair:Person' },
        rights: {
          read: true,
          write: true,
          control: true
        },
        users: record => record.id || record['@id']
      }
    ]
  }
};
