import { PairResourceCreate } from '../../../pair';
import TargetAudienceEdit from './TargetAudienceEdit';
import TargetAudienceList from './TargetAudienceList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: TargetAudienceList,
    create: PairResourceCreate,
    edit: TargetAudienceEdit,
    icon: StyleIcon,
    options: {
      label: 'Public cible',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['cdlt:TargetAudience'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Public cible',
      fields: {
        'pair:label': 'Public cible',
      },
    },
  },
};
