const urlJoin = require('url-join');
const { ACTOR_TYPES } = require('@semapps/activitypub');
const CONFIG = require('./config');

const anonReadPermission = {
  anon: {
    read: true
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

module.exports = [
  {
    path: '/',
    permissions: anonReadPermission,
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person', 'foaf:Person', ACTOR_TYPES.PERSON],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/paths',
    acceptedTypes: ['cdlt:Path'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/courses',
    acceptedTypes: ['cdlt:Course'],
    permissions: {
      ...anonReadPermission,
      ...writePermissionToActors,
      ...defaultWritePermissionToContributors
    },
    newResourcesPermissions: {} // By default, no read rights to new courses
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    permissions: {
      ...anonReadPermission,
      ...writePermissionToActors,
      ...defaultWritePermissionToContributors
    },
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/places',
    acceptedTypes: ['pair:Place'],
    dereference: ['pair:hasPostalAddress'],
    permissions: {
      ...anonReadPermission,
      ...writePermissionToActors,
      ...defaultWritePermissionToContributors
    },
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/themes',
    acceptedTypes: ['pair:Theme'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/finalities',
    acceptedTypes: ['pair:Finality'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/sectors',
    acceptedTypes: ['pair:Sector'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/skills',
    acceptedTypes: ['pair:Skill'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/documents',
    acceptedTypes: ['pair:Document'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/types',
    acceptedTypes: ['cdlt:PathType', 'cdlt:CourseType', 'pair:PlaceType', 'pair:EventType', 'pair:PersonType'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/status',
    acceptedTypes: ['cdlt:PathStatus', 'cdlt:CourseStatus'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/regions',
    acceptedTypes: ['pair:Place'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/pages',
    acceptedTypes: ['semapps:Page'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/files'
  }
];
