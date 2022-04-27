import React from 'react';
import { FormTab, ImageInput, TabbedForm, TextInput, BooleanInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import {
  PathsInput, 
  PersonsInput,
  EventsInput,
  ThemesInput,
  StatusInput,
  TypesInput,
  SkillsInput,
  DocumentsType
} from '../../../../pair';
import CourseTitle from './CourseTitle';
import { DateInput } from '@semapps/date-components';
import frLocale from 'date-fns/locale/fr';

const CourseEdit = (props) => (
  <EditWithPermissions title={<CourseTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <ImageInput source="pair:isDepictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <DateInput
          source="pair:startDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <DateInput
          source="pair:endDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <TextInput source="cdlt:priceRange" fullWidth />
        <MarkdownInput source="cdlt:economicalConditions" fullWidth />
        <BooleanInput source="cdlt:directRegistration" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        {/*<PathInput source="cdlt:courseOn" />*/}
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:CourseStatus' }} />
        <PathsInput source="cdlt:courseOn" />
        <ThemesInput source="pair:hasTopic" />
        <EventsInput source="pair:hasPart" />
        <SkillsInput source="pair:produces" />
        <PersonsInput source="cdlt:organizedBy" />
        <PersonsInput source="cdlt:hasMentor" />
        <DocumentsType source="pair:documentedBy" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth />
        <TextInput source="pair:phone" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default CourseEdit;
