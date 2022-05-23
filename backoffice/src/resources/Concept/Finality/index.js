import { PairResourceCreate } from '../../../pair';
import FinalityEdit from './FinalityEdit';
import FinalityList from './FinalityList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: FinalityList,
    create: PairResourceCreate,
    edit: FinalityEdit,
    icon: StyleIcon,
    options: {
      label: 'Finalités',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Finality'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Finalité |||| Finalités',
      fields: {
        'pair:label': 'Finalité',
      },
    },
  },
};
