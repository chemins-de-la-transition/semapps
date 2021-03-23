module.exports = [
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/paths',
    acceptedTypes: ['cdlt:Path']
  },
  {
    path: '/sessions',
    acceptedTypes: ['cdlt:Session']
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    dereference: ['pair:hostedIn/pair:hasPostalAddress']
  },
  {
    path: '/places',
    acceptedTypes: ['pair:Place'],
    dereference: ['pair:hasPostalAddress']
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
    path: '/types',
    acceptedTypes: ['cdlt:PathType', 'cdlt:SessionType']
  },
  {
    path: '/status',
    acceptedTypes: ['cdlt:PathStatus', 'cdlt:SessionStatus']
  },
  {
    path: '/files'
  }
];
