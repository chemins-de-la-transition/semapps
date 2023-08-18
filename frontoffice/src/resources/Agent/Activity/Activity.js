import React from 'react';
import { Show } from 'react-admin';
import ExploreIcon from '@material-ui/icons/Explore';
import RedirectByType from "../../../commons/RedirectByType";

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
    en: {
      name: 'Activity |||| Activities',
    },
  },
};
