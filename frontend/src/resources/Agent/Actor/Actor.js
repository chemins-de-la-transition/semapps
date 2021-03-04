import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    icon: PersonIcon,
    options: {
      label: 'Communauté'
    }
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Person']
  },
  translations: {
    fr: {
      name: 'Acteur |||| Acteurs'
    }
  }
};
