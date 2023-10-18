import AlertCreate from './AlertCreate';
import AlertEdit from './AlertEdit';
import AlertIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    create: AlertCreate,
    edit: AlertEdit,
    icon: AlertIcon,
    options: {
      label: 'Alerte'
    },
  },
  dataModel: {
    types: ['cdlt:Alert'],
    create: {
      container: {
        cdlt: '/alerts'
      }
    },
    list: {
      containers: {
        cdlt: ['/alerts']
      },
      explicitEmbedOnFraming: false, // Increase performance since explicit embed is not necessary
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Alerte |||| Alertes',
      fields: {
        'pair:label': 'Nom',
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé',
        'pair:hasLocation': 'Localisation',
        'cdlt:radius': 'Rayon (km)',
        'cdlt:hasRegion': 'Région',
      },
    },
    en: {
      name: 'Alert |||| Alerts',
      fields: {
        'pair:label': 'Name',
        'cdlt:hasPublicationStatus':'Visibility',
        'pair:hasSector': 'Activity sectors',
        'pair:hasTopic': 'Keywords',
        'pair:hasLocation': 'Location',
        'cdlt:radius': 'Radius (km)',
        'cdlt:hasRegion': 'Region',
      },
    },
  },
};