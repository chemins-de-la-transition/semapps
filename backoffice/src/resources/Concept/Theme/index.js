import { PairResourceCreate } from '../../../pair';
import ThemeEdit from './ThemeEdit';
import ThemeList from './ThemeList';
import ThemeShow from './ThemeShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: ThemeList,
    show: ThemeShow,
    create: PairResourceCreate,
    edit: ThemeEdit,
    icon: LocalOfferIcon,
    options: {
      label: 'Secteurs d\'activité',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Theme'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Secteur d\'activité |||| Secteurs d\'activité',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:topicOf': 'Est un sujet de',
      },
    },
  },
};
