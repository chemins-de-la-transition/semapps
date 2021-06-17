import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import frLocale from 'date-fns/locale/fr';
import { EditWithPermissions } from "@semapps/auth-provider";
import { DateTimeInput } from '@semapps/date-components';
import { PlaceInput } from '../../../../pair';
import EventTitle from './EventTitle';

const EventEdit = props => (
  <EditWithPermissions title={<EventTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:aboutPage" fullWidth />
      <DateTimeInput
        source="pair:startDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <DateTimeInput
        source="pair:endDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <PlaceInput source="pair:hostedIn" />
    </SimpleForm>
  </EditWithPermissions>
);

export default EventEdit;
