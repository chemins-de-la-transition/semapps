import NaturePeopleIcon from '@material-ui/icons/NaturePeople';

export default {
  config: {
    icon: NaturePeopleIcon,
    options: {
      label: 'Ressources',
    },
  },
  dataModel: {
    types: ['pair:Skill', 'pair:Document'],
  },
  translations: {
    fr: {
      name: 'Ressource |||| Ressources',
    },
  },
};
