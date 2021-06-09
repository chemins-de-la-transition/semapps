import TypeCreate from './TypeCreate';
import TypeEdit from './TypeEdit';
import TypeList from './TypeList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: TypeList,
    create: TypeCreate,
    edit: TypeEdit,
    icon: StyleIcon,
    options: {
      label: 'Types',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: ['cdlt:SessionType', 'cdlt:PathType'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Type |||| Types',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
