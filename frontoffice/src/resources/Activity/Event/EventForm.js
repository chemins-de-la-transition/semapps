import React from 'react';
import { SimpleForm, ImageInput, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { DateTimeInput } from '@semapps/date-components';
import { ThemesInput, TypeInput, SkillsInput } from '../../../pair';
import frLocale from "date-fns/locale/fr";

const EventForm = (props) =>(
  <SimpleForm {...props}>
    <TextInput source="pair:label" fullWidth />
    <TextInput source="pair:comment" fullWidth />
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
    />
    <ImageInput source="pair:isDepictedBy" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <MarkdownInput source="pair:description" fullWidth />
    <MarkdownInput source="cdlt:program" fullWidth />
    <MarkdownInput source="cdlt:prerequisites" fullWidth />
    <MarkdownInput source="cdlt:practicalConditions" fullWidth />
    <MarkdownInput source="cdlt:economicalConditions" fullWidth />
    <ThemesInput source="pair:hasTopic" />
    <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
    <TypeInput source="pair:hasType" filter={{ a: 'pair:EventType' }} />
    <SkillsInput source="pair:produces" fullWidth />
    <TextInput source="pair:e-mail" fullWidth />
    <TextInput source="pair:phone" fullWidth />
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default EventForm;
