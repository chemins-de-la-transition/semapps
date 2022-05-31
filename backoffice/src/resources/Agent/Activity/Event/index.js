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
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': "Phrase d'accroche",
        'pair:depictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': "Type d'événement",
        'pair:hasStatus': "Statut",
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Description de l\'événement',
        'cdlt:organizerDescription': "Description organisateur.rice.s",
        'cdlt:mentorDescription': "Description intervenant.e.s",
        'cdlt:program': "Programme de l'événement",
        'pair:hostedIn': 'Lieu',
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:partOf': 'Fait partie de',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par',
        'cdlt:hasMentor': 'Intervenant.e.s',
        'cdlt:eventOn': 'Est un événement de',
        'pair:hasFinality': 'Finalités',
        'cdlt:jotformLink':"Formulaire d'inscription",
        'cdlt:personalizedJotformLink':"Utiliser un lien personnalisé",
        'cdlt:targetAudience': 'Public cible',
        'cdlt:pedagogicalMeans': 'Moyens matériels et pédagogiques',
        'cdlt:evaluationMethod': 'Modalités d\'évaluation',
        'cdlt:attendeesMin': 'Nombre de participants minimum',
        'cdlt:attendeesMax': 'Nombre de participants maximum',
        'cdlt:full': 'Événement complet',
        'cdlt:accessibility': 'Accessibilité',
        'cdlt:financialSupport': 'Dispositifs de financement',
        'cdlt:price': 'Prix par défaut',
        'cdlt:directRegistration' : "Possibilité de s'enregistrer directement",
      },
    },
  },
};
