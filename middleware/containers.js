const { ACTOR_TYPES, OBJECT_TYPES } = require('@semapps/activitypub');
const { rootPermissions, anonReadPermission, writePermissionToActors, defaultWritePermissionToContributors, writePermissionToCreator, anonReadWritePermission, loggedUsersReadWritePermission } = require('./permissions');

module.exports = [
  {
    path: '/',
    permissions: rootPermissions,
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    preferredView: '/Organization',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    permissions: {
      ...anonReadPermission,
      ...writePermissionToActors,
      ...defaultWritePermissionToContributors
    },
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/paths',
    acceptedTypes: ['cdlt:Path'],
    preferredView: '/Path',
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/courses',
    acceptedTypes: ['cdlt:Course'],
    preferredView: '/Course',
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
    preferredView: '/Event',
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
    preferredView: '/Place',
    dereference: ['pair:hasPostalAddress'],
    permissions: {
      ...anonReadPermission,
      ...writePermissionToActors,
      ...defaultWritePermissionToContributors
    },
    newResourcesPermissions: writePermissionToCreator
  },
  {
    path: '/topics',
    acceptedTypes: ['pair:Topic'],
    permissions: {
      ...anonReadPermission,
      ...loggedUsersReadWritePermission
    },
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/finalities',
    acceptedTypes: ['pair:Finality'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/target-audiences',
    acceptedTypes: ['cdlt:TargetAudience'],
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/job-opportunities',
    acceptedTypes: ['cdlt:JobOpportunities'],
    permissions: {
      ...anonReadPermission,
      ...loggedUsersReadWritePermission
    },
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
    permissions: {
      ...anonReadPermission,
      ...loggedUsersReadWritePermission
    },
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
    acceptedTypes: ['cdlt:PathType', 'cdlt:CourseType', 'pair:PlaceType', 'pair:EventType', 'pair:PersonType', 'pair:OrganizationType'],
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
    preferredView: '/Page',
    permissions: anonReadPermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/debates',
    acceptedTypes: ['pair:Debate'],
    permissions: anonReadPermission,
    newResourcesPermissions: anonReadPermission,
  },
  {
    path: '/registrations',
    acceptedTypes: ['cdlt:Registration'],
    permissions: anonReadPermission,
    newResourcesPermissions: anonReadPermission,
  },
  {
    path: '/notes',
    acceptedTypes: [OBJECT_TYPES.NOTE],
    permissions: anonReadWritePermission,
    newResourcesPermissions: writePermissionToCreator,
  },
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    dereference: ['sec:publicKey'],
    excludeFromMirror: true
  }
];
