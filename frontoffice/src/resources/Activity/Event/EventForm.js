import React from 'react';
import { SimpleForm, ImageInput, TextInput, useGetIdentity, required, email } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { DateTimeInput } from '@semapps/date-components';
import { ThemesInput, TypeInput, SkillsInput } from '../../../pair';
import frLocale from 'date-fns/locale/fr';

const EventForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <SimpleForm
      initialValues={mode === 'create' ? { 'cdlt:organizedBy': identity?.id } : undefined}
      {...rest}
      redirect="/MyEvents"
    >
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
      <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
      <MarkdownInput source="cdlt:program" fullWidth />
      <MarkdownInput source="cdlt:prerequisites" fullWidth />
      <MarkdownInput source="cdlt:practicalConditions" fullWidth />
      <MarkdownInput source="cdlt:economicalConditions" fullWidth />
      <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:EventType' }} validate={[required()]} />
      <ThemesInput source="pair:hasTopic" />
      <SkillsInput source="pair:produces" fullWidth />
      <TextInput source="pair:e-mail" fullWidth validate={[required(), email()]} />
      <TextInput source="pair:phone" fullWidth />
      <TextInput source="pair:aboutPage" fullWidth />
    </SimpleForm>
  );
};

export default EventForm;
