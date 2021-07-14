export default {
  dataModel: {
    types: ['cdlt:CourseStatus', 'cdlt:PathStatus'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'status',
    slugField: 'pair:label',
  }
};
