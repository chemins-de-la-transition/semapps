export default {
  dataModel: {
    types: ['pair:Theme'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'themes',
    slugField: 'pair:label',
  }
};
