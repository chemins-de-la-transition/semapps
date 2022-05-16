import LEPList from "./LEPList";

export default {
  config: {
    list: LEPList,
  },
  dataModel: {
    types: ['pair:Place', 'pair:Event', 'cdlt:Course'],
    list: {
      containers: {
        cdlt: ['/places', '/events', '/courses'] // We don't want regions to be returned
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
};
