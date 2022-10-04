import React from 'react';
import { Show } from 'react-admin';
import PersonIcon from '@material-ui/icons/Person';
import RedirectByType from "../../../commons/RedirectByType";

const ActorRedirect = (props) => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Person: 'pair:Person',
        Organization: 'pair:Organization',
      }}
    />
  </Show>
);

export default {
  config: {
    icon: PersonIcon,
    show: ActorRedirect,
    options: {
      label: 'Acteurs',
    },
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Person'],
  },
  translations: {
    fr: {
      name: 'Acteur |||| Acteurs',
    },
  },
};
