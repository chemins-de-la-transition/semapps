import React from 'react';
import { FormTab, TabbedForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from "@semapps/auth-provider";
import { ActorsInput, EventsInput, ThemesInput, StatusInput, TypesInput, SkillsInput, PathInput } from '../../../../pair';
import CourseTitle from './CourseTitle';
import { DateInput } from "@semapps/date-components";
import frLocale from "date-fns/locale/fr";

const CourseEdit = props => (
  <EditWithPermissions title={<CourseTitle />} {...props}>
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
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:forWhom" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:economicalConditions" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <PathInput source="cdlt:courseOn" />
        <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:CourseStatus' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'cdlt:CourseType' }} />
        <EventsInput source="pair:hasPart" />
        <ActorsInput source="pair:organizedBy" />
        <SkillsInput source="pair:produces" />
        <ActorsInput source="cdlt:hasMentor" />
        <ActorsInput source="cdlt:hasLearner" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default CourseEdit;