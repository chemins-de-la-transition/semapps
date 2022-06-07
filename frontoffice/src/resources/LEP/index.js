import LEPList from "./LEPList";

export default {
  config: {
    list: LEPList,
  },
  dataModel: {
    types: ['pair:Place', 'pair:Event', 'cdlt:Course', 'pair:Organization'],
    list: {
      containers: {
        cdlt: ['/places', '/events', '/courses', 'organizations'] // We don't want regions to be returned
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
};
