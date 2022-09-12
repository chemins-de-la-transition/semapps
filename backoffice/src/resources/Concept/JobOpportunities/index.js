import { PairResourceCreate } from '../../../pair';
import JobOpportunitiesEdit from './JobOpportunitiesEdit';
import JobOpportunitiesList from './JobOpportunitiesList';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
  config: {
    list: JobOpportunitiesList,
    create: PairResourceCreate,
    edit: JobOpportunitiesEdit,
    icon: LocalOfferIcon,
    options: {
      label: 'Débouchés métiers',
      parent: 'Concept',
    },
  },
  dataModel: {
    types: ['cdlt:JobOpportunities'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Débouchés métiers |||| Débouché métier',
      fields: {
        'pair:label': 'Titre',
      },
    },
  },
};

