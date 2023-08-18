import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';
import EventCreate from './EventCreate';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements'
    },
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      explicitEmbedOnFraming: false, // Increase performance since explicit embed is not necessary
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Événement |||| Événements',
      fields: {
        'pair:label': 'Titre',
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:comment': "En quelques mots",
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Mode de voyage',
        'pair:hasType': "Type d'événement",
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'cdlt:requiredSkills': 'Compétences requises', /*Skill*/
        'pair:produces': 'Compétences visées', /*Skill*/
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Description de l\'événement',
        'cdlt:organizerDescription': "Descriptions des organisateurs",
        'cdlt:mentorDescription': "Descriptions des intervenants",
        'cdlt:program': 'Programme',
        'pair:hostedIn': 'Lieu', /*Place*/
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Prix',
        'pair:partOf': 'Voyage associé', /*Course*/
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par', /*Actor*/
        'cdlt:hasMentor': 'Intervenant(e)s', /*Person*/
        'cdlt:eventOn': 'Chemins', /*Path*/
        'pair:hasFinality': 'Finalités',
        'cdlt:hasTargetAudience': 'Public cible',
        'cdlt:pedagogicalMeans': 'Moyens matériels et pédagogiques',
        'cdlt:evaluationMethod': 'Modalités d\'évaluation (pour les formations financées)',
        'cdlt:minimumCapacity': 'Capacité d\'accueil minimum',
        'cdlt:maximumCapacity': 'Capacité d\'accueil maximum',
        'cdlt:full': 'Événement complet',
        'cdlt:accessibility': 'Accessibilité',
        'cdlt:financialSupport': 'Eligibilité à des dispositifs de financement',
        //'cdlt:price': 'Prix par défaut',
        'cdlt:directRegistration' : "Possibilité de s'inscrire directement",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:referenceNumber':"N° de l'événement",
        'cdlt:hasJobOpportunities':"Idées de débouchés vers des métiers de transition",
        "cdlt:registrationOutsideCourse": "Possibilité de s'inscrire à l'événement en dehors du voyage",
      },
    },
    en: {
      name: 'Event |||| Events',
      fields: {
        'pair:label': 'Title',
        'cdlt:hasPublicationStatus': 'Publication Status',
        'pair:comment': 'In a few words',
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Travel Mode',
        'pair:hasType': 'Event Type',
        'pair:hasStatus': 'Status',
        'pair:hasSector': 'Activity Sectors',
        'pair:hasTopic': 'Keywords',
        'cdlt:requiredSkills': 'Required Skills',
        'pair:produces': 'Targeted Skills',
        'pair:startDate': 'Start Date',
        'pair:endDate': 'End Date',
        'pair:description': 'Event Description',
        'cdlt:organizerDescription': 'Descriptions of Organizers',
        'cdlt:mentorDescription': 'Descriptions of Speakers',
        'cdlt:program': 'Program',
        'pair:hostedIn': 'Place',
        'pair:hasLocation': 'Location',
        'cdlt:hasRegion': 'Region',
        'cdlt:prerequisites': 'Prerequisites',
        'cdlt:practicalConditions': 'Accommodation Conditions',
        'cdlt:learningObjectives': 'Educational Objectives',
        'cdlt:economicalConditions': 'Prices',
        'pair:partOf': 'Associated Travel',
        'pair:e-mail': 'Email Address',
        'pair:phone': 'Phone',
        'pair:aboutPage': 'Website',
        'cdlt:organizedBy': 'Organized by',
        'cdlt:hasMentor': 'Speakers',
        'cdlt:eventOn': 'Paths',
        'pair:hasFinality': 'Purposes',
        'cdlt:hasTargetAudience': 'Target Audience',
        'cdlt:pedagogicalMeans': 'Material and Pedagogical Means',
        'cdlt:evaluationMethod': 'Evaluation Method (for funded training)',
        'cdlt:minimumCapacity': 'Minimum Capacity',
        'cdlt:maximumCapacity': 'Maximum Capacity',
        'cdlt:full': 'Event full',
        'cdlt:accessibility': 'Accessibility',
        'cdlt:financialSupport': 'Eligibility for financing devices',
        //'cdlt:price': 'Default price',
        'cdlt:directRegistration': 'Possibility of direct registration',
        'cdlt:registrationOption': 'Registration Option',
        'cdlt:jotformLink': 'JotForm Registration Form',
        'cdlt:registrationLink': 'Registration System Link',
        'cdlt:referenceNumber': 'Event Number',
        'cdlt:hasJobOpportunities': 'Ideas for career opportunities in transition jobs',
        'cdlt:registrationOutsideCourse': 'Possibility to register for the event outside the travel',
      },
    },    
  },
};
