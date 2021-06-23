import React from 'react';
import { ListWithPermissions } from "@semapps/auth-provider";
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';

const EventList = props => (
  <ListWithPermissions perPage={1000} pagination={false} {...props}>
    <CalendarList
      locale={frLocale}
      label="pair:label"
      startDate="pair:startDate"
      endDate="pair:endDate"
      linkType="show"
    />
  </ListWithPermissions>
);

export default EventList;
