export default {
  dataModel: {
    types: ['pair:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'users',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: ['pair:firstName', 'pair:lastName'],
  }
};
