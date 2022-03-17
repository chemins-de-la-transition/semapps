import DocumentCreate from "./DocumentCreate";
import DocumentEdit from './DocumentEdit';
import DocumentList from './DocumentList';
import DocumentShow from './DocumentShow';
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    create: DocumentCreate,
    edit: DocumentEdit,
    icon: DescriptionIcon,
    options: {
      label: 'Documents',
      parent: 'Resource',
    },
  },
  dataModel: {
    types: ['pair:Document'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Document |||| Documents',
      fields: {
        'dc:creator': 'Créateur',
        'dc:created': 'Créé le',
        'dc:modified': 'Mis à jour',
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:hasType': 'Type',
        'pair:documents': 'Documente'
      }
    }
  }
};
