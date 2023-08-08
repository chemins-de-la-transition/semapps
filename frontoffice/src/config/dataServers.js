console.log('process.env.REACT_APP_MIDDLEWARE_URL', process.env.REACT_APP_MIDDLEWARE_URL);

const dataServers = {
  cdlt: {
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    authServer: true,
    default: true,
    uploadsContainer: '/files'
  }
};

export default dataServers;
