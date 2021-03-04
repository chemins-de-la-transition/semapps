import { PairResourceCreate } from '../../../../pair';
import SessionEdit from './SessionEdit';
import SessionList from './SessionList';
import SessionShow from './SessionShow';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default {
  config: {
    list: SessionList,
    show: SessionShow,
    create: PairResourceCreate,
    edit: SessionEdit,
    icon: DateRangeIcon,
    options: {
      label: 'Sessions',
      parent: 'Activity'
    }
  },
  dataModel: {
    types: ['cdlt:Session'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'sessions',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Session |||| Sessions',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:aboutPage': 'Site web',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:hasStatus': 'Statut',
        'pair:hasType': 'Type',
        'pair:produces': 'Permet d\'apprendre',
        'pair:organizedBy': 'Organisé par',
        'pair:hasPart': 'Evénements',
        'pair:hasTopic': 'A pour thème',
        'cdlt:sessionOf': 'Est une session de',
        'cdlt:hasLearner': 'A pour apprenant',
        'cdlt:hasMentor': 'A pour mentor'
      }
    }
  }
};
