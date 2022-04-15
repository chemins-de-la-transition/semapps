import { PairResourceCreate } from '../../../pair';
import SectorEdit from './SectorEdit';
import SectorList from './SectorList';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: SectorList,
    create: PairResourceCreate,
    edit: SectorEdit,
    icon: LocalOfferIcon,
    options: {
      label: 'Secteur d\'activité',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Sector'],
    fieldsMapping: {
      title: 'pair:sector'
    }
  },
  translations: {
    fr: {
      name: 'Secteur d\'activité |||| Secteurs d\'activité ',
      fields: {
        'pair:label': 'Nom',
      },
    },
  },
};
