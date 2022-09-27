import TopicCreate from "./TopicCreate";
import TopicEdit from './TopicEdit';
import TopicList from './TopicList';
import TopicShow from './TopicShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: TopicList,
    show: TopicShow,
    create: TopicCreate,
    edit: TopicEdit,
    icon: LocalOfferIcon,
    options: {
      label: 'Mots clé',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Topic'],
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
