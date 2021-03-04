import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { ActorsInput, EventsInput, ThemesInput, StatusInput, TypeInput, SkillsInput } from '../../../../pair';
import SessionTitle from './SessionTitle';
import { DateInput } from "@semapps/date-components";
import frLocale from "date-fns/locale/fr";

const SessionEdit = props => (
  <Edit title={<SessionTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <TextInput source="pair:aboutPage" fullWidth />
      <DateInput
        source="pair:startDate"
        options={{
          format: 'dd/MM/yyyy'
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <DateInput
        source="pair:endDate"
        options={{
          format: 'dd/MM/yyyy'
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:SessionStatus' }} />
      <TypeInput source="pair:hasType" filter={{ a: 'cdlt:SessionType' }} />
      <EventsInput source="pair:hasPart" />
      <ActorsInput source="pair:organizedBy" />
      <SkillsInput source="pair:produces" />
      <ActorsInput source="cdlt:hasMentor" />
      <ActorsInput source="cdlt:hasLearner" />
      <ThemesInput source="pair:hasTopic" />
    </SimpleForm>
  </Edit>
);

export default SessionEdit;