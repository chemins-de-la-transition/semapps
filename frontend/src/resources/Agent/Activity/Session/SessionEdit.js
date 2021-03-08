import React from 'react';
import { FormTab, TabbedForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { ActorsInput, EventsInput, ThemesInput, StatusInput, TypeInput, SkillsInput, PathInput } from '../../../../pair';
import SessionTitle from './SessionTitle';
import { DateInput } from "@semapps/date-components";
import frLocale from "date-fns/locale/fr";

const SessionEdit = props => (
  <Edit title={<SessionTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
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
        <MarkdownInput multiline source="pair:description" fullWidth />
        <MarkdownInput multiline source="cdlt:forWhom" fullWidth />
        <MarkdownInput multiline source="cdlt:prerequisites" fullWidth />
        <MarkdownInput multiline source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput multiline source="cdlt:economicalConditions" fullWidth />
        <MarkdownInput multiline source="cdlt:practicalConditions" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <PathInput source="cdlt:sessionOf" />
        <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:SessionStatus' }} />
        <TypeInput source="pair:hasType" filter={{ a: 'cdlt:SessionType' }} />
        <EventsInput source="pair:hasPart" />
        <ActorsInput source="pair:organizedBy" />
        <SkillsInput source="pair:produces" />
        <ActorsInput source="cdlt:hasMentor" />
        <ActorsInput source="cdlt:hasLearner" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default SessionEdit;
