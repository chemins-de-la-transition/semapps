const dataServers = {
  cdlt: {
    name: 'Les Chemins de la Transition',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      cdlt: {
        'pair:Debate': ['/debates'],
        'pair:Document': ['/documents'],
        'pair:Finality': ['/finalities'],
        'pair:Event': ['/events'],
        'pair:Organization': ['/organizations'],
        'pair:Person': ['/users'],
        'pair:Place': ['/places', '/regions'],
        'pair:Sector': ['/sectors'],
        'pair:Skill': ['/skills'],
        'pair:Status': ['/status'],
        'pair:Theme': ['/themes'],
        'pair:Type': ['/types'],
        'cdlt:Path': ['/paths'],
        'cdlt:Course': ['/courses'],
        'semapps:Page': ['/pages'],
        'cdlt:TargetAudience': ['/target-audiences'],
        'cdlt:Registration':['/registrations'],
      }
    },
    uploadsContainer: '/files'
  }
};

export default dataServers;
