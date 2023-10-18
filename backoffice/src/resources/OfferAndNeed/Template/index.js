import { PairResourceCreate } from '../../../pair';
import TemplateEdit from './TemplateEdit';
import TemplateList from './TemplateList';
import TemplateIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    list: TemplateList,
    create: PairResourceCreate,
    edit: TemplateEdit,
    icon: TemplateIcon,
    options: {
      label: 'Modèles d\'annonce',
      parent: 'OfferAndNeedFolder',
    },
  },
  dataModel: {
    types: ['cdlt:OfferAndNeedTemplate'],
    create: {
      container: {
        cdlt: '/offer-and-need-templates'
      }
    },
    list: {
      containers: {
        cdlt: ['/offer-and-need-templates']
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Modèle d\'annonce |||| Modèles d\'annonce',
      fields: {
        'pair:label': 'Nom',
        'pair:description': "Description",
      },
    },
    en: {
      name: 'Announcement template |||| Announcement templates',
      fields: {
        'pair:label': 'Name',
        'pair:description': "Description",
      },
    },
  },
};
