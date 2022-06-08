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
        'pair:depictedBy': 'Logo',
        'pair:affiliates': 'A pour membres', /*Person*/
        'pair:partnerOf': 'A pour partenaires', /*Organization*/
        'pair:inspiredBy': 'Est inspirée par', /*Organization*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'pair:hasLocation': 'Adresse',
        'cdlt:organizes': 'Organise',
        'cdlt:hasRegion': 'Région(s)',
        'cdlt:supports': 'Chemins', /*Paths*/
        'cdlt:hasCourseType': 'Type de voyage',
        'cdlt:organizationHostedIn': 'Où sommes-nous',
        'pair:hasFinality': 'Finalités',
        'cdlt:intentions': 'Nos intentions en venant sur les chemins de la transition',
      },
    },
  },
};
