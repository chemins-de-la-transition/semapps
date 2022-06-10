import React from 'react';
import { ImageInput, TabbedForm, TextInput, FormTab } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import {
  CoursesInput,
  EventsInput,
  FinalitiesInput,
  OrganizationsInput,
  PersonsInput,
  PlacesInput,
  SectorsInput,
  ThemesInput,
  SkillsInput,
  TypeInput
} from '../../../pair';
import PathTitle from './PathTitle';

const PathEdit = (props) => (
  <EditWithPermissions title={<PathTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <PlacesInput source="cdlt:hasPlace" />
        <EventsInput source="cdlt:hasEvent" />
        <CoursesInput source="cdlt:hasCourse" />
        <PersonsInput source="cdlt:proposedBy" />
        <OrganizationsInput source="cdlt:supportedBy" />
        <SkillsInput source="pair:produces" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PathEdit;
