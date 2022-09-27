import StatusCreate from './StatusCreate';
import StatusEdit from './StatusEdit';
import StatusList from './StatusList';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default {
  config: {
    list: StatusList,
    create: StatusCreate,
    edit: StatusEdit,
    icon: VisibilityIcon,
    options: {
      label: 'Statuts',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:AgentStatus', 'pair:EventStatus', 'pair:Status', 'cdlt:CourseStatus', 'pair:OrganizationStatus'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Statut |||| Statuts',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom',
      },
    },
  },
};
