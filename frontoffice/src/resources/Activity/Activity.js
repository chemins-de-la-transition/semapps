import React from 'react';
import { Show } from 'react-admin';
import { RedirectByType } from '@semapps/archipelago-layout';
import ExploreIcon from '@material-ui/icons/Explore';

const ActivityRedirect = (props) => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Course: 'cdlt:Course',
        Event: 'pair:Event',
      }}
    />
  </Show>
);

export default {
  config: {
    icon: ExploreIcon,
    show: ActivityRedirect,
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
