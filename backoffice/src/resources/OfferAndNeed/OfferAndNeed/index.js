import OfferAndNeedCreate from './OfferAndNeedCreate';
import OfferAndNeedEdit from './OfferAndNeedEdit';
import OfferAndNeedList from './OfferAndNeedList';
import OfferAndNeedShow from './OfferAndNeedShow';
import OfferAndNeedIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    list: OfferAndNeedList,
    show: OfferAndNeedShow,
    create: OfferAndNeedCreate,
    edit: OfferAndNeedEdit,
    icon: OfferAndNeedIcon,
    options: {
      label: 'Annonces',
      parent: 'OfferAndNeedFolder',
    },
  },
  dataModel: {
    types: ['cdlt:OfferAndNeed'],
    create: {
      container: {
        cdlt: '/offers-and-needs'
      }
    },
    list: {
      containers: {
        cdlt: ['/offers-and-needs']
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Annonce |||| Annonces',
      fields: {
        'pair:label': 'Nom',
        'cdlt:hasPublicationStatus':'Statut de publication',
        'cdlt:hasTemplate': 'Modèle d\'annonce',
        'pair:comment': "Phrase d'accroche",
        'pair:description': "Description",
        'pair:depictedBy': 'Image',
        'cdlt:proposedBy': 'Proposé par',
        'cdlt:sponsoredBy': 'Parainé par',
        'pair:hasType': 'Type d\'annonce',
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé',
        'pair:hasLocation': 'Localisation',
        'cdlt:hasRegion': 'Région',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
      },
    },
    en: {
      name: 'Announcement |||| Announcements',
      fields: {
        'pair:label': 'Name',
        'cdlt:hasPublicationStatus':'Visibility',
        'cdlt:hasTemplate': 'Announcement template',
        'pair:comment': "Summary",
        'pair:description': "Description",
        'pair:depictedBy': 'Image',
        'cdlt:proposedBy': 'Proposed by',
        'cdlt:sponsoredBy': 'Sponsored by',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Status',
        'pair:hasSector': 'Activity sectors',
        'pair:hasTopic': 'Keywords',
        'pair:hasLocation': 'Location',
        'cdlt:hasRegion': 'Region',
        'pair:e-mail': 'E-mail',
        'pair:phone': 'Phone',
        'pair:homePage': 'Website',
      },
    },
  },
};
