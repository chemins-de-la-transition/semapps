const urlJoin = require("url-join");
const CONFIG = require("./config");

const anonReadPermission = {
  anon: {
    read: true
  }
};

const loggedUsersReadWritePermission = {
  anyUser: {
    read: true,
    write: true
  }
}

const anonReadWritePermission = {
  anon: {
    read: true,
    append: true,
    write: true,
  }
};

const writePermissionToCreator = creatorUri => {
  if( creatorUri !== 'system' ) {
    return({
      ...anonReadPermission,
      user: {
        uri: creatorUri,
        write: true
      }
    });
  } else {
    return anonReadPermission;
  }
}

const writePermissionToActors = {
  group: {
    uri: urlJoin(CONFIG.HOME_URL, '_groups', 'actors'),
    write: true
  }
};

const defaultWritePermissionToContributors = {
  default: {
    group: {
      uri: urlJoin(CONFIG.HOME_URL, '_groups', 'contributors'),
      write: true
    }
  }
};

const rootPermissions = {
  anon: {
    read: true,
  },
  group: {
    uri: urlJoin(CONFIG.HOME_URL, '_groups', 'superadmins'),
    read: true,
    write: true,
    control: true
  },
  default: {
    anon: {
      read: true
    },
    group: {
      uri: urlJoin(CONFIG.HOME_URL, '_groups', 'superadmins'),
      read: true,
      write: true,
      control: true
    }
  }
};

module.exports = {
  anonReadPermission,
  anonReadWritePermission,
  loggedUsersReadWritePermission,
  writePermissionToCreator,
  writePermissionToActors,
  defaultWritePermissionToContributors,
  rootPermissions
};
