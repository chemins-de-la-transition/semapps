import React from 'react';
import { TabbedForm, FormTab, TextInput } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from "@semapps/auth-provider";
import { DateTimeInput } from '@semapps/date-components';
import { PersonsInput, PlaceInput, SkillsInput, ThemesInput, TypeInput, CourseInput } from '../../../../pair';
import EventTitle from './EventTitle';

const EventEdit = props => (
  <EditWithPermissions title={<EventTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
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
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:program" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <MarkdownInput source="cdlt:economicalConditions" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <PersonsInput source="cdlt:organizedBy" />
        <PlaceInput source="pair:hostedIn" />
        <CourseInput source="pair:partOf" />
        <ThemesInput source="pair:hasTopic" />
        <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <TypeInput source="pair:hasEventType" filter={{ a: 'pair:EventType' }} />
        <SkillsInput source="pair:produces" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth />
        <TextInput source="pair:phone" fullWidth />
        <TextInput source="pair:aboutPage" fullWidth />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default EventEdit;
