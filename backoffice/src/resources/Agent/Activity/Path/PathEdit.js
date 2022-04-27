import React from 'react';
import { ImageInput, TabbedForm, TextInput, FormTab } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import {
  // ActorsInput,
  CoursesInput,
  EventsInput,
  OrganizationsInput,
  PersonsInput,
  PlacesInput,
  // StatusInput,
  // ThemesInput,
  // TypesInput,
  SkillsInput,
} from '../../../../pair';
import PathTitle from './PathTitle';

const PathEdit = (props) => (
  <EditWithPermissions title={<PathTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:isDepictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        {/*}
        <MarkdownInput source="cdlt:forWhom" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:professionalPerspectives" fullWidth />
        */}
      </FormTab>
      <FormTab label="Relations">
        <PlacesInput source="cdlt:hasPlace" />
        <EventsInput source="cdlt:hasEvent" />
        <CoursesInput source="cdlt:hasCourse" />
        {/*
        <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:PathStatus' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'cdlt:PathType' }} />
        <PlacesInput source="pair:hasLocation" />
        */}
        {/*
        <ActorsInput source="cdlt:proposedBy" />
        */}
        <PersonsInput source="cdlt:proposedBy" />
        <OrganizationsInput source="cdlt:supportedBy" />
        <SkillsInput source="pair:produces" />
        {/*
        <ThemesInput source="pair:hasTopic" />
        */}
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PathEdit;
