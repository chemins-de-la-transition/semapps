import React from 'react';
import { Datagrid, DateField, EditButton, ShowButton, TextField } from 'react-admin';
import { MultiViewsList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from '@semapps/auth-provider';
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import ListIcon from '@material-ui/icons/List';
import EventIcon from '@material-ui/icons/Event';

const EventList = props => (
  <MultiViewsList
    ListComponent={ListWithPermissions}
    views={{
      list: {
        label: 'Liste',
        icon: ListIcon,
        perPage: 1000,
        pagination: false,
        sort: { field: 'pair:startDate', order: 'ASC' },
        list: (
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <DateField source="pair:startDate" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        )
      },
      calendar: {
        label: 'Calendrier',
        icon: EventIcon,
        perPage: 1000,
        pagination: false,
        list: (
          <CalendarList
            locale={frLocale}
            label="pair:label"
            startDate="pair:startDate"
            endDate="pair:endDate"
            linkType="show"
          />
        )
      }
    }}
    {...props}
  />
);

export default EventList;

