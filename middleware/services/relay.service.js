const { RelayService } = require('@semapps/activitypub');

module.exports = {
  mixins: [RelayService],
  settings: {
    actor: {
      username: 'relay',
      name: 'Relay actor for instance'
    }
  }
};
