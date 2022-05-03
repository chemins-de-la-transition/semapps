import React from 'react';
import { TabbedForm, FormTab, TextInput, ImageInput, BooleanInput, email, required } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { DateTimeInput } from '@semapps/date-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { PairLocationInput, ActorsInput, PathsInput, PersonsInput, PlaceInput, SkillsInput, ThemesInput, TypeInput, CourseInput } from '../../../../pair';
import EventTitle from './EventTitle';

const EventEdit = (props) => (
  <EditWithPermissions title={<EventTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <DateTimeInput
          source="pair:startDate"
          options={{
            format: 'dd/MM/yyyy à HH:mm',
            ampm: false,
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
          validate={[required()]}
        />
        <DateTimeInput
          source="pair:endDate"
          options={{
            format: 'dd/MM/yyyy à HH:mm',
            ampm: false,
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
          validate={[required()]}
        />
        <ImageInput source="pair:isDepictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} />
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:organizerDescription" fullWidth />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth />
        <MarkdownInput source="cdlt:program" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:economicalConditions" fullWidth />
        <BooleanInput source="cdlt:directRegistration" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <ActorsInput source="cdlt:organizedBy" />
        <PersonsInput source="cdlt:hasMentor" />
        <PlaceInput source="pair:hostedIn" />
        <CourseInput source="pair:partOf" />
        <PathsInput source="cdlt:eventOn" />
        <ThemesInput source="pair:hasTopic" />
        <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:EventType' }} validate={[required()]} />
        <SkillsInput source="pair:produces" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth />
        <TextInput source="pair:aboutPage" fullWidth />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default EventEdit;
