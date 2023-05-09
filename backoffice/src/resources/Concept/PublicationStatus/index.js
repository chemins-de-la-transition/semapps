import { PairResourceCreate } from '../../../pair';
import PublicationStatusEdit from './PublicationStatusEdit';
import PublicationStatusList from './PublicationStatusList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: PublicationStatusList,
    create: PairResourceCreate,
    edit: PublicationStatusEdit,
    icon: StyleIcon,
    options: {
      label: 'Statut de publication',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['cdlt:PublicationStatus'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Statut de publication |||| Statuts de publication',
      fields: {
        'pair:label': 'Statut de publication',
      },
    },
  },
};
