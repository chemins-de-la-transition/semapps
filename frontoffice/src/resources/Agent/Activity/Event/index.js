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
        'cdlt:organizerDescription': "Les organisateurs",
        'cdlt:mentorDescription': "Les intervenants",
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
  },
};
