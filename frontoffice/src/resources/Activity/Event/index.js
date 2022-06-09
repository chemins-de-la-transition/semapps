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
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
      explicitEmbedOnFraming: false // Increase performance since explicit embed is not necessary
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
        'pair:comment': "En quelques mots",
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': "Type d'événement",
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'cdlt:requiredSkills': 'Compétences requises', /*Skill*/
        'pair:': 'Compétences visées', /*Skill*/
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Description de l\'événement',
        'cdlt:organizerDescription': "Les organisateurs",
        'cdlt:mentorDescription': "Les intervenants",
        'cdlt:program': 'Programme',
        'pair:hostedIn': 'Lieu',
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'cdlt:prerequisites': 'Autres prérequis',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:partOf': 'Voyage associé',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par',
        'cdlt:hasMentor': 'Intervenant(e)s',
        'cdlt:eventOn': 'Chemins',
        'pair:hasFinality': 'Finalités',
        'cdlt:targetAudience': 'Public cible',
        'cdlt:pedagogicalMeans': 'Moyens matériels et pédagogiques',
        'cdlt:evaluationMethod': 'Modalités d\'évaluation',
        'cdlt:minimumCapacity': 'Capacité d\'accueil minimum',
        'cdlt:maximumCapacity': 'Capacité d\'accueil maximum',
        'cdlt:full': 'Événement complet',
        'cdlt:accessibility': 'Accessibilité',
        'cdlt:financialSupport': 'Eligibilité à des dispositifs de financement',
        'cdlt:price': 'Prix par défaut',
        'cdlt:directRegistration' : "Possibilité de s'inscrire directement",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:referenceNumber':"N° de l'événement",
      },
    },
  },
};
