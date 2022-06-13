import EventCreate from './EventCreate';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements',
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
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
        'pair:comment': "Phrase d'accroche",
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': "Type d'événement",
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'pair:produces': 'Compétences visées', /*Skill*/
        'cdlt:requiredSkills': 'Compétences requises', /*Skill*/
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Description de l\'événement',
        'cdlt:organizerDescription': "Les organisateurs",
        'cdlt:mentorDescription': "Les intervenants",
        'cdlt:program': "Programme de l'événement",
        'pair:hostedIn': 'Lieu', /*Place*/
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:partOf': 'Fait partie de', /*Course*/
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par', /*Actor*/
        'cdlt:hasMentor': 'Intervenant.e.s', /*Person*/
        'cdlt:eventOn': 'Est un événement de', /*Path*/
        'pair:hasFinality': 'Finalités',
        'cdlt:hasTargetAudience': 'Public cible',
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
        'cdlt:referenceNumber':"Numéro de référence",
      },
    },
  },
};
