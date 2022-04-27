import { PairResourceCreate } from '../../../../pair';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    create: PairResourceCreate,
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
      dereference: ['pair:hostedIn/pair:hasPostalAddress'],
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
        'pair:isDepictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de parcours',
        'pair:hasType': "Type d'événement",
        'pair:hasStatus': "Statut",
        'pair:hasTopic': 'Thématiques',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:description': 'Présentation',
        'cdlt:program': "Programme de l'événement",
        'pair:hostedIn': 'Lieu',
        'pair:hasLocation': 'Région',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:partOf': 'Fait partie de',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:aboutPage': 'Site web',
        'cdlt:organizedBy': 'Organisé par',
        'cdlt:eventOn': 'Est un événement de',
      },
    },
  },
};
