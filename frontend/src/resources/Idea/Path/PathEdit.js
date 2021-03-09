import React from 'react';
import { TabbedForm, TextInput, FormTab } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { SessionsInput, ActorsInput, PlacesInput, StatusInput, ThemesInput, TypeInput, SkillsInput } from '../../../pair';
import PathTitle from './PathTitle';

const PathEdit = props => (
  <Edit title={<PathTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <MarkdownInput multiline source="cdlt:forWhom" fullWidth />
        <MarkdownInput multiline source="cdlt:prerequisites" fullWidth />
        <MarkdownInput multiline source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput multiline source="cdlt:professionalPerspectives" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <SessionsInput source="cdlt:hasSession" />
        <StatusInput source="pair:hasStatus" filter={{ a: 'cdlt:PathStatus' }} />
        <TypeInput source="pair:hasType" filter={{ a: 'cdlt:PathType' }} />
        <PlacesInput source="pair:hasLocation" />
        <ActorsInput source="cdlt:proposedBy" />
        <SkillsInput source="pair:produces" />
        <ThemesInput source="pair:hasTopic" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PathEdit;
