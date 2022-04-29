import { PairResourceCreate } from '../../../../pair';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: PairResourceCreate,
    edit: OrganizationEdit,
    icon: HomeIcon,
    options: {
      label: 'Organisations',
      parent: 'Actor',
    },
  },
  dataModel: {
    types: ['pair:Organization'],
    list: {
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    },
    fieldsMapping: {
      title: ['pair:label']
    }
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        'pair:image': 'Logo',
        'pair:affiliates': 'A pour membres',
        'pair:partnerOf': 'A pour partenaires',
        'pair:organizes': 'Organise',
        'pair:hasTopic': 'A pour secteur d\'activité',
        'pair:hasLocation': 'Adresse',
      },
    },
  },
};
