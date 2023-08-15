import { PairResourceCreate } from '../../pair';
import OfferAndNeedEdit from './OfferAndNeedEdit';
import OfferAndNeedList from './OfferAndNeedList';
import OfferAndNeedShow from './OfferAndNeedShow';
import OfferAndNeedIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    list: OfferAndNeedList,
    show: OfferAndNeedShow,
    create: PairResourceCreate,
    edit: OfferAndNeedEdit,
    icon: OfferAndNeedIcon,
    options: {
      label: 'Annonces',
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
        'pair:comment': "Phrase d'accroche",
        'pair:description': "Description",
        'pair:depictedBy': 'Image',
        'cdlt:proposedBy': 'Proposé par',
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
  },
};
