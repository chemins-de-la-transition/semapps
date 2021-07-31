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
        users: record => record['cdlt:organizedBy']
      }
    ]
  }
};
