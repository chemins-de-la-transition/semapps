import { PairResourceCreate } from '../../../pair';
import IntentionEdit from './IntentionEdit';
import IntentionList from './IntentionList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: IntentionList,
    create: PairResourceCreate,
    edit: IntentionEdit,
    icon: StyleIcon,
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
      },
    },
  },
};
