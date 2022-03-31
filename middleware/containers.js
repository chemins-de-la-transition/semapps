const writePermissionsToCreator = creatorUri => ({
  anon : {
    read: true
  },
  anyUser: {
    read: true
  },
  user: {
    uri: creatorUri,
    read: true,
    write: true
  }
});

module.exports = [
  {
    path: '/'
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/paths',
    acceptedTypes: ['cdlt:Path']
  },
  {
    path: '/courses',
    acceptedTypes: ['cdlt:Course'],
    // By default, no read rights to new courses
    newResourcesPermissions: {}
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    dereference: ['pair:hostedIn/pair:hasPostalAddress'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/places',
    acceptedTypes: ['pair:Place'],
    dereference: ['pair:hasPostalAddress'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/themes',
    acceptedTypes: ['pair:Theme']
  },
  {
    path: '/skills',
    acceptedTypes: ['pair:Skill']
  },
  {
    path: '/documents',
    acceptedTypes: ['pair:Document']
  },
  {
    path: '/types',
    acceptedTypes: ['cdlt:PathType', 'cdlt:CourseType', 'pair:PlaceType', 'pair:EventType', 'pair:PersonType']
  },
  {
    path: '/status',
    acceptedTypes: ['cdlt:PathStatus', 'cdlt:CourseStatus']
  },
  {
    path: '/regions',
    acceptedTypes: ['pair:Place']
  },
  {
    path: '/pages'
  },
  {
    path: '/files'
  }
];
