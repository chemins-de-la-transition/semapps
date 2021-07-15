const urlJoin = require('url-join');
const { GroupsManagerBot } = require('@semapps/webacl');
const CONFIG = require('../config');

module.exports = {
  mixins: [GroupsManagerBot],
  settings: {
    usersContainer: CONFIG.HOME_URL + 'users',
    rules: [
      {
        match: { 'pair:hasType': urlJoin(CONFIG.HOME_URL, 'types', 'admin') },
        groupSlug: 'superadmins'
      },
      {
        match: { 'pair:hasType': urlJoin(CONFIG.HOME_URL, 'types', 'actor') },
        groupSlug: 'actors'
      }
    ]
  }
};
