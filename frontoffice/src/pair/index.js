import React from 'react';
import { ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';
import { AutocompleteArrayInput, SelectInput } from 'react-admin';

export const PersonsInput = (props) => (
  <ReferenceArrayInput reference="Person" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = (props) => (
  <ReferenceArrayInput reference="Event" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PlacesInput = (props) => (
  <ReferenceArrayInput reference="Place" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SkillsInput = (props) => (
  <ReferenceArrayInput reference="Skill" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ThemesInput = (props) => (
  <ReferenceArrayInput reference="Theme" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const StatusInput = (props) => (
  <ReferenceInput reference="Status" {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const TypesInput = (props) => (
  <ReferenceArrayInput reference="Type" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TypeInput = (props) => (
  <ReferenceArrayInput reference="Type" {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceArrayInput>
);

export const PlaceInput = (props) => (
  <ReferenceInput reference="Place" {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const CoursesInput = (props) => (
  <ReferenceArrayInput reference="Course" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const CourseInput = (props) => (
  <ReferenceArrayInput reference="Course" {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceArrayInput>
);

export { default as PairLocationInput } from './PairLocationInput';
