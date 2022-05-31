import ThemeCreate from "./ThemeCreate";
import ThemeEdit from './ThemeEdit';
import ThemeList from './ThemeList';
import ThemeShow from './ThemeShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: ThemeList,
    show: ThemeShow,
    create: ThemeCreate,
    edit: ThemeEdit,
    icon: LocalOfferIcon,
    options: {
      label: 'Sujets',
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
      name: 'Sujet |||| Sujets',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:topicOf': 'Est un sujet de',
      },
    },
  },
};
