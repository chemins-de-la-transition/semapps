import { PairResourceCreate } from '../../../../pair';
import CourseEdit from './CourseEdit';
import CourseList from './CourseList';
import CourseShow from './CourseShow';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default {
  config: {
    list: CourseList,
    show: CourseShow,
    create: PairResourceCreate,
    edit: CourseEdit,
    icon: DateRangeIcon,
    options: {
      label: 'Parcours',
      parent: 'Activity'
    }
  },
  dataModel: {
    types: ['cdlt:Course'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'courses',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Parcours |||| Parcours',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:hasStatus': 'Statut',
        'pair:hasType': 'Type',
        'pair:produces': 'Permet d\'apprendre',
        'pair:organizedBy': 'Organisé par',
        'pair:hasPart': 'Evénements',
        'pair:hasTopic': 'A pour thème',
        'cdlt:forWhom': 'Destiné à',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:learningObjectives': 'Objectifs d\'apprentissage',
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:practicalConditions': 'Conditions pratiques',
        'cdlt:courseOn': 'Est un parcours de',
        'cdlt:hasLearner': 'A pour apprenant',
        'cdlt:hasMentor': 'A pour mentor'
      }
    }
  }
};
