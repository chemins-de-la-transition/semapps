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
      label: 'Mots clé',
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
      name: 'Mot clé |||| Mots clé',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:topicOf': 'Mot clé utilisé par',
      },
    },
  },
};
