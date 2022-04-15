import { PairResourceCreate } from '../../../pair';
import IntentionEdit from './IntentionEdit';
import IntentionList from './IntentionList';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default {
  config: {
    list: IntentionList,
    create: PairResourceCreate,
    edit: IntentionEdit,
    icon: VisibilityIcon,
    options: {
      label: 'Intentions',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Intention'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Intention |||| Intentions',
      fields: {
        'pair:label': 'Intention',
//        'pair:hasType': 'En tant que',
      },
    },
  },
};
