const dataServers = {
  cdlt: {
    name: 'Les Chemins de la Transition',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      cdlt: {
        'pair:Document': ['/documents'],
        'pair:Event': ['/events'],
        'pair:Intention': ['/intentions'],
        'pair:Organization': ['/organizations'],
        'pair:Person': ['/users'],
        'foaf:Person': ['/users'],
        'pair:Place': ['/places', '/regions'],
        'pair:Skill': ['/skills'],
        'pair:Status': ['/status'],
        'pair:Theme': ['/themes'],
        'pair:Type': ['/types'],
        'cdlt:Path': ['/paths'],
        'cdlt:Course': ['/courses'],
        'semapps:Page': ['/pages']
      }
    },
    uploadsContainer: '/files'
  }
};

export default dataServers;
