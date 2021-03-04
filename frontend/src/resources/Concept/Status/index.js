import StatusCreate from './StatusCreate';
import TypeEdit from './StatusEdit';
import StatusList from './StatusList';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default {
  config: {
    list: StatusList,
    create: StatusCreate,
    edit: TypeEdit,
    icon: VisibilityIcon,
    options: {
      label: 'Statuts',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: ['cdlt:SessionStatus', 'cdlt:PathStatus'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'status',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Statut |||| Statuts',
      fields: {
        '@type': 'Type',
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:topicOf': 'Sujets'
      }
    }
  }
};
