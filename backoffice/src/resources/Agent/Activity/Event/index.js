import { PairResourceCreate } from '../../../../pair';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: PairResourceCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements',
      parent: 'Activity'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'events',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:hostedIn': 'Lieu',
        'pair:aboutPage': 'Site web',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:involves': 'Implique',
        'pair:hasTopic': 'Thèmes',
        'pair:partOf': 'Fait partie de'
      }
    }
  }
};
