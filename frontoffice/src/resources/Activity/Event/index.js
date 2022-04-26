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
        'pair:comment': "Phrase d'accroche",
        'pair:isDepictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': "Type d'événement",
        'pair:hasTopic': 'Secteurs d\'activité',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Présentation',
        'cdlt:organizerDescription': 'Organisateur',
        'cdlt:mentorDescription': 'Intervenant',
        'cdlt:program': 'Programme',
        'pair:hostedIn': 'Lieu',
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:partOf': 'Fait partie de',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par',
        'cdlt:hasMentor': 'Intervenant(e)s',
        'cdlt:eventOn': 'Chemins',
      },
    },
  },
};
