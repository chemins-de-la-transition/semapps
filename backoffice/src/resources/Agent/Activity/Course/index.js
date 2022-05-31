import CourseEdit from './CourseEdit';
import CourseList from './CourseList';
import CourseShow from './CourseShow';
import CourseCreate from './CourseCreate';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default {
  config: {
    list: CourseList,
    show: CourseShow,
    create: CourseCreate,
    edit: CourseEdit,
    icon: DateRangeIcon,
    options: {
      label: 'Voyages',
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
      name: 'Voyage |||| Voyages',
      fields: {
        'pair:label': 'Titre',
        'pair:isDepictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasTopic': 'Secteurs d\'activité',
        'cdlt:hasRegion': 'Région(s)',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Présentation',
        'cdlt:organizerDescription': 'Description du ou des organisateurs',
        'cdlt:mentorDescription': 'Description du ou des intervenants',
        'pair:hasPart': 'Evénements constitutifs du voyage',
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
        'pair:documentedBy': 'Documents',
        'cdlt:courseOn': 'Est un voyage de',
        'pair:hasFinality': 'Finalités',
        'cdlt:jotformLink':"Formulaire d'inscription",
        'cdlt:personalizedJotformLink':"Utiliser un lien personnalisé",
        'cdlt:directRegistration' : "Possibilité de s'enregistrer directement",
        'cdlt:referenceNumber': "Numéro de référence",
      },
    },
  },
};
