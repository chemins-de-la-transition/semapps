import React from 'react';
import { ImageInput, TabbedForm, TextInput, FormTab } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  CoursesInput,
  EventsInput,
  FinalitiesInput,
  OrganizationsInput,
  PersonsInput,
  PlacesInput,
  SectorsInput,
  TopicsInput,
  SkillsInput,
  TypesInput,
  JobOpportunitiesInput
} from '../../../pair';
import PathTitle from './PathTitle';
import Edit from "../../../layout/edit/Edit";

const PathEdit = (props) => (
  <Edit title={<PathTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <PlacesInput source="cdlt:hasPlace" />
        <EventsInput source="cdlt:hasEvent" />
        <CoursesInput source="cdlt:hasCourse" />
        <PersonsInput source="cdlt:proposedBy" />
        <OrganizationsInput source="cdlt:supportedBy" />
        <SkillsInput source="pair:produces" />
        <SectorsInput source="pair:hasSector" />
        <TopicsInput source="pair:hasTopic" />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PathEdit;
