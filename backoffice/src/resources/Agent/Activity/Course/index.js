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
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'cdlt:hasRegion': 'Région(s)',
        'pair:produces': 'Compétences visées', /*Skill*/
        'cdlt:requiredSkills': 'Compétences requises', /*Skill*/
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Description du voyage',
        'cdlt:organizerDescription': 'Les organisateurs',
        'cdlt:mentorDescription': 'Les intervenants',
        'pair:hasPart': 'Événements constitutifs du voyage', /*Event*/
        'cdlt:prerequisites': 'Autres prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:minimumCapacity': "Nombre de participants minimum",
        'cdlt:maximumCapacity': "Nombre de participants maximum",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:eligibleForFunding': 'Eligibilité à des dispositifs de financement',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'pair:comment': 'En quelques mots',
        'cdlt:hasMentor': 'A pour intervenant', /*Person*/
        'cdlt:organizedBy': 'Organisé par', /*Actor*/
        'pair:hasStatus': 'Statut',
        'pair:documentedBy': 'Documents',
        'cdlt:courseOn': 'Est un voyage de', /*Path*/
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration' : "Possibilité de s'inscrire directement",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:referenceNumber': 'N° du voyage',
      },
    },
  },
};
