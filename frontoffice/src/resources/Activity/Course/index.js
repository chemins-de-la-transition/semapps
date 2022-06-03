import CourseList from './CourseList';
import CourseShow from './CourseShow';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default {
  config: {
    list: CourseList,
    show: CourseShow,
    icon: DateRangeIcon,
    options: {
      label: 'Voyages'
    },
  },
  dataModel: {
    types: ['cdlt:Course'],
    list: {
      filter: {
        'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/valide'
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Voyage |||| Voyages',
      fields: {
        'pair:label': 'Titre',
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasTopic': 'Secteurs d\'activité',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Présentation',
        'cdlt:organizerDescription': 'Organisateur',
        'cdlt:mentorDescription': 'Intervenant',
        'pair:hasPart': 'Programme du voyage',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'pair:comment': "Phrase d'accroche",
        'cdlt:hasMentor': 'A pour intervenant',
        'cdlt:organizedBy': 'Organisé par',
        'pair:hasStatus': 'Statut',
        'cdlt:courseOn': 'Chemins',
        'pair:hasFinality': 'Finalités',
        'cdlt:referenceNumber': 'Numéro de référence',
      },
    },
  },
};
