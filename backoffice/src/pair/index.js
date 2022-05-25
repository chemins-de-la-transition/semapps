import React from 'react';
import { ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';
import { FormDataConsumer, AutocompleteInput, AutocompleteArrayInput, SelectInput, BooleanInput, TextInput } from 'react-admin';
import { LexiconCreateDialog, fetchESCO, fetchWikidata } from "@semapps/interop-components";

export const OrganizationsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Organization" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const ActorsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Actor" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PersonsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Person" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const ActivitiesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Activity" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Event" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={(value) => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const PlacesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Place" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const DocumentsType = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Document" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </ReferenceArrayInput>
);

export const PathsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Path" source={source}>
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
          fetchLexicon={fetchESCO}
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
          fetchLexicon={fetchWikidata}
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

export const AgentsInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Agent" source={source}>
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

export const CoursesInput = ({ label, source }) => (
  <ReferenceArrayInput label={label} reference="Course" source={source}>
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

const options = [
  { id: "https://form.jotform.com/212722469132048?", name: 'Formulaire événement' },
  { id: "https://form.jotform.com/212722469132048?", name: 'Formulaire voyage' },
  { id: "https://form.jotform.com/212722469132048?", name: 'Formulaire chemin' },
  { id: "https://form.jotform.com/212722469132048?", name: 'Formulaire lieu' },
]

export const JotFormInput = ({ label, source, booleanSource, booleanLabel, ...rest }) => (
  <>
    <FormDataConsumer {...rest}>
        {({ formData, ...rest }) => formData[booleanSource] ?
          <TextInput label={label} source={source} {...rest} type="url"/>
        :
          <SelectInput
            source={source}
            choices={options}
            {...rest}
            allowEmpty
          />
      }
    </FormDataConsumer>
    <BooleanInput label={booleanLabel} source={booleanSource} />
  </>
)

export { default as PairLocationInput } from './PairLocationInput';
export { default as PairResourceCreate } from './PairResourceCreate';
