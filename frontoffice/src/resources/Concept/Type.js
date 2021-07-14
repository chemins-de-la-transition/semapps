export default {
  dataModel: {
    types: ['pair:PersonType', 'pair:PlaceType', 'pair:EventType', 'cdlt:CourseType', 'cdlt:PathType'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'types',
    slugField: 'pair:label',
  }
};
