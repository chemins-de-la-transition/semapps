import React from 'react';
import { ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';
import { AutocompleteInput, AutocompleteArrayInput, SelectInput } from 'react-admin';
import { LexiconCreateDialog, fetchESCO, fetchWikidata } from "@semapps/interop-components";

export const ActorsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Actor" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const OrganizationsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Organization" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PersonsInput = (props) => (
  <ReferenceArrayInput reference="Person" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Activity" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
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

export const FinalitiesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Finality" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SectorsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Sector" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SkillsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Skill" source={source}>
    <AutocompleteArrayInput
      optionText="pair:label"
      shouldRenderSuggestions={(value) => value.length > 1}
      create={
        <LexiconCreateDialog
          fetchLexicon={fetchESCO('https://esco.commondata.one')}
          selectData={data => ({
            'pair:label': data.label,
            'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
          })}
        />
      }
      fullWidth
    />
  </ReferenceArrayInput>
);

export const ThemesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Theme" source={source}>
    <AutocompleteArrayInput
      optionText="pair:label"
      shouldRenderSuggestions={(value) => value.length > 1}
      create={
        <LexiconCreateDialog
          fetchLexicon={fetchWikidata()}
          selectData={data => ({
            'pair:label': data.label,
            'pair:comment': data.summary,
            'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
          })}
        />
      }
      fullWidth
    />
  </ReferenceArrayInput>
);

export const UsersInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const StatusInput = (props) => (
  <ReferenceInput reference="Status" {...props} allowEmpty>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const TypesInput = (props) => (
  <ReferenceArrayInput reference="Type" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TypeInput = (props) => (
  <ReferenceArrayInput reference="Type" {...props} allowEmpty>
    <SelectInput optionText="pair:label" />
  </ReferenceArrayInput>
);

export const PlaceInput = (props) => (
  <ReferenceInput reference="Place" {...props} allowEmpty>
    <AutocompleteInput optionText="pair:label" />
  </ReferenceInput>
);

export const CoursesInput = (props) => (
  <ReferenceArrayInput reference="Course" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const CourseInput = (props) => (
  <ReferenceArrayInput reference="Course" {...props} allowEmpty>
    <SelectInput optionText="pair:label" />
  </ReferenceArrayInput>
);

export const PathsInput = (props) => (
  <ReferenceArrayInput reference="Path" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const RegionsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Region" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TargetAudienceInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="TargetAudience" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export { default as PairLocationInput } from './PairLocationInput';
export { default as RegistrationInput } from './RegistrationInput';
