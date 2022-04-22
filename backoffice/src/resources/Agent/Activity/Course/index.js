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
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['cdlt:Course'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Parcours |||| Parcours',
      fields: {
        'pair:label': 'Titre',
        'pair:isDepictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de parcours',
        'pair:hasTopic': 'Thématiques',
        'pair:hasLocation': 'Région(s)',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Présentation',
        'cdlt:organizerDescription': 'Description du ou des organisateurs',
        'cdlt:mentorDescription': 'Description du ou des intervenants',
        'pair:hasPart': 'Evénements constitutifs du parcours',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'pair:comment': "Phrase d'accroche",
        'cdlt:hasMentor': 'A pour mentor',
        'cdlt:organizedBy': 'Organisé par',
        'pair:hasStatus': 'Statut',
        'pair:documentedBy': 'Documents',
        'cdlt:courseOn': 'Est un parcours de',
      },
    },
  },
};
