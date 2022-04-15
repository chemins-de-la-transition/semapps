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
      parent: 'Concept',
    },
  },
  dataModel: {
    types: [
      'pair:Type',
      'pair:PersonType',
      'pair:PlaceType',
      'pair:EventType',
      'pair:DocumentType',
      'pair:IntentionType',
      'cdlt:CourseType',
      'cdlt:PathType'
    ],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Type |||| Types',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom',
      },
    },
  },
};
