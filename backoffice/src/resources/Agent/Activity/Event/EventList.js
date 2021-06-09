import React from 'react';
import { List } from '@semapps/archipelago-layout';
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';

const EventList = props => (
  <List perPage={1000} pagination={false} {...props}>
    <CalendarList
      locale={frLocale}
      label="pair:label"
      startDate="pair:startDate"
      endDate="pair:endDate"
      linkType="show"
    />
  </List>
);

export default EventList;
