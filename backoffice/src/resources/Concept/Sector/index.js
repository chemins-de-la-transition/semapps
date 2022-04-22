import { PairResourceCreate } from '../../../pair';
import SectorEdit from './SectorEdit';
import SectorList from './SectorList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: SectorList,
    create: PairResourceCreate,
    edit: SectorEdit,
    icon: StyleIcon,
    options: {
      label: 'Secteur d\'activité',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['pair:Sector'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Secteur d\'activité |||| Secteurs d\'activité ',
      fields: {
        'pair:label': 'Nom',
        'pair:isDepictedBy': 'Image',
      },
    },
  },
};
