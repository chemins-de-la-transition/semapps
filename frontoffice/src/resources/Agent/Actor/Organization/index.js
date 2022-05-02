import OrganizationEdit from './OrganizationEdit';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    show: OrganizationShow,
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
        'pair:affiliates': 'A pour membres', /*Person*/
        'pair:partnerOf': 'A pour partenaires', /*Organization*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'A pour secteur d\'activité',
        'pair:hasLocation': 'Adresse',
        'cdlt:organizes': 'Organise',
      },
    },
  },
};
