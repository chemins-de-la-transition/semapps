import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    icon: PersonIcon,
    options: {
      label: 'Acteurs',
    },
  },
  dataModel: {
    types: ['pair:Person', 'pair:organization'],
  },
  translations: {
    fr: {
      name: 'Acteur |||| Acteurs',
    },
  },
};
