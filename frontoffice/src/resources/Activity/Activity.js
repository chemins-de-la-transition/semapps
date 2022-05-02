import ExploreIcon from '@material-ui/icons/Explore';

export default {
  config: {
    icon: ExploreIcon,
    options: {
      label: 'Voyages',
    },
  },
  dataModel: {
    types: ['pair:Event', 'cdlt:Course'],
  },
  translations: {
    fr: {
      name: 'Activité |||| Activités',
    },
  },
};
