import React from 'react';
import { ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';
import { AutocompleteInput, AutocompleteArrayInput, SelectInput } from 'react-admin';
import { LexiconCreateDialog, fetchESCO, fetchWikidata } from "@semapps/interop-components";

export const OrganizationsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Organization" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ActorsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Actor" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PersonsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Activity" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Event" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PlacesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Place" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const DocumentsType = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Document" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const PathsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Path" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);
  
export const FinalitiesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Finality" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SectorsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Sector" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SkillsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Skill" source={source} {...rest}>
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

export const ThemesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Theme" source={source} {...rest}>
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

export const UsersInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const AgentsInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Agent" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const StatusInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Status" source={source} {...rest}>
    <SelectInput optionText="pair:label" allowEmpty />
  </ReferenceInput>
);

export const TypesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Type" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TypeInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Type" source={source} {...rest}>
    <SelectInput optionText="pair:label" allowEmpty />
  </ReferenceArrayInput>
);

export const PlaceInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Place" source={source} {...rest} allowEmpty>
    <AutocompleteInput optionText="pair:label" fullWidth />
  </ReferenceInput>
);

export const CoursesInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Course" source={source} {...rest}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const CourseInput = ({ label, source, ...rest }) => (
  <ReferenceArrayInput label={label} reference="Course" source={source} {...rest}>
    <SelectInput optionText="pair:label" allowEmpty />
  </ReferenceArrayInput>
);

export const PathInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Path" source={source} {...rest}>
    <SelectInput optionText="pair:label" allowEmpty />
  </ReferenceInput>
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
export { default as PairResourceCreate } from './PairResourceCreate';
export { default as RegistrationInput } from './RegistrationInput';