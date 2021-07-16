export default {
  dataModel: {
    types: ['pair:Skill'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'skills',
    slugField: 'pair:label',
  },
};
