import React from 'react';
import { ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';
import { AutocompleteInput, AutocompleteArrayInput, SelectInput } from 'react-admin';
import { LexiconCreateDialog, fetchESCO, fetchWikidata } from "@semapps/interop-components";

const ifTwoLetters = ({ q }) => !!(q && q.length > 1);

export const AgentsInput = (props) => (
  <ReferenceArrayInput reference="Agent" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ActorsInput = (props) => (
  <ReferenceArrayInput reference="Actor" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const OrganizationsInput = (props) => (
  <ReferenceArrayInput reference="Organization" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PersonsInput = (props) => (
  <ReferenceArrayInput reference="Person" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = (props) => (
  <ReferenceArrayInput reference="Activity" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = (props) => (
  <ReferenceArrayInput reference="Event" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PlacesInput = (props) => (
  <ReferenceArrayInput reference="Place" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const FinalitiesInput = (props) => (
  <ReferenceArrayInput reference="Finality" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const SectorsInput = (props) => (
  <ReferenceArrayInput reference="Sector" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const SkillsInput = (props) => (
  <ReferenceArrayInput reference="Skill" enableGetChoices={ifTwoLetters} {...props}>
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

export const ThemesInput = (props) => (
  <ReferenceArrayInput reference="Theme" enableGetChoices={ifTwoLetters} {...props}>
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

export const UsersInput = (props) => (
  <ReferenceArrayInput reference="Person" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const StatusInput = (props) => (
  <ReferenceInput reference="Status" allowEmpty {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const TypesInput = (props) => (
  <ReferenceArrayInput reference="Type" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TypeInput = (props) => (
  <ReferenceArrayInput reference="Type" allowEmpty {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceArrayInput>
);

export const PlaceInput = (props) => (
  <ReferenceInput reference="Place" allowEmpty enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} />
  </ReferenceInput>
);

export const CoursesInput = (props) => (
  <ReferenceArrayInput reference="Course" enableGetChoices={ifTwoLetters} {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth shouldRenderSuggestions={(value) => value.length > 1} />
  </ReferenceArrayInput>
);

export const CourseInput = (props) => (
  <ReferenceArrayInput reference="Course" allowEmpty enableGetChoices={ifTwoLetters} {...props}>
    <SelectInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} />
  </ReferenceArrayInput>
);

export const PathsInput = (props) => (
  <ReferenceArrayInput reference="Path" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const RegionsInput = (props) => (
  <ReferenceArrayInput reference="Region" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const TargetAudienceInput = (props) => (
  <ReferenceArrayInput reference="TargetAudience" {...props}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export { default as PairLocationInput } from './PairLocationInput';
export { default as PairResourceCreate } from './PairResourceCreate';
export { default as RegistrationInput } from './RegistrationInput';
