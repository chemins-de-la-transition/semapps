import CourseEdit from './CourseEdit';
import CourseList from './CourseList';
import CourseShow from './CourseShow';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CourseCreate from './CourseCreate';


export default {
  config: {
    list: CourseList,
    show: CourseShow,
    create: CourseCreate,
    edit: CourseEdit,
    icon: DateRangeIcon,
    options: {
      label: 'Voyages'
    },
  },
  dataModel: {
    types: ['cdlt:Course'],
    list: {
      explicitEmbedOnFraming: false, // Increase performance since explicit embed is not necessary
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
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Mode de voyage',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'cdlt:hasRegion': 'Région(s)',
        'pair:produces': 'Compétences visées', /*Skill*/
        'cdlt:requiredSkills': 'Compétences requises', /*Skill*/
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Description du voyage',
        'cdlt:organizerDescription': 'Les organisateurs',
        'cdlt:mentorDescription': 'Les intervenants',
        'pair:hasPart': 'Programme du voyage', /*Event*/
        'cdlt:prerequisites': 'Autres prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:minimumCapacity': "Nombre de participants minimum",
        'cdlt:maximumCapacity': "Nombre de participants maximum",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:financialSupport': 'Eligibilité à des dispositifs de financement',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'pair:comment': 'En quelques mots',
        'cdlt:hasMentor': 'A pour intervenant', /*Person*/
        'cdlt:organizedBy': 'Organisé par', /*Actor*/
        //'pair:documentedBy': 'Documents',
        'cdlt:courseOn': 'Chemins', /*Path*/
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration' : "Possibilité de s'inscrire directement",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:referenceNumber': 'N° du voyage',
        'cdlt:hasTargetAudience': 'Public cible',
        "cdlt:hasJobOpportunities":"Idées de débouchés vers des métiers de transition",
      },
    },
    en: 
    {
      name: 'Journey |||| Journeys',
      fields: {
        'pair:label': 'Title',
        'cdlt:hasPublicationStatus': 'Publication Status',
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Travel Mode',
        'pair:hasSector': 'Activity Sectors',
        'pair:hasTopic': 'Keywords', /*Topic*/
        'cdlt:hasRegion': 'Region(s)',
        'pair:produces': 'Targeted Skills', /*Skill*/
        'cdlt:requiredSkills': 'Required Skills', /*Skill*/
        'pair:startDate': 'Start Date',
        'pair:endDate': 'End Date',
        'cdlt:priceRange': 'Cost',
        'pair:description': 'Journey Description',
        'cdlt:organizerDescription': 'Organizers',
        'cdlt:mentorDescription': 'Speakers',
        'pair:hasPart': 'Journey Program', /*Event*/
        'cdlt:prerequisites': 'Other Prerequisites',
        'cdlt:practicalConditions': 'Practical Information',
        'cdlt:minimumCapacity': 'Minimum Number of Participants',
        'cdlt:maximumCapacity': 'Maximum Number of Participants',
        'cdlt:learningObjectives': 'Educational Objectives',
        'cdlt:economicalConditions': 'Financial Conditions',
        'cdlt:financialSupport': 'Eligibility for Financing Schemes',
        'pair:e-mail': 'Email Address',
        'pair:phone': 'Phone',
        'pair:homePage': 'Website',
        'pair:comment': 'In a Few Words',
        'cdlt:hasMentor': 'Facilitated by', /*Person*/
        'cdlt:organizedBy': 'Organized by', /*Actor*/
        //'pair:documentedBy': 'Documents',
        'cdlt:courseOn': 'Paths', /*Path*/
        'pair:hasFinality': 'Objectives',
        'cdlt:directRegistration': 'Direct Registration Option',
        'cdlt:registrationOption': 'Registration Option',
        'cdlt:jotformLink': 'JotForm Registration Form',
        'cdlt:registrationLink': 'Registration System Link',
        'cdlt:referenceNumber': 'Journey Number',
        'cdlt:hasTargetAudience': 'Target Audience',
        'cdlt:hasJobOpportunities': 'Transition Career Ideas',
      },
    },
  },
};
