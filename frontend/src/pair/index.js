import React from 'react';
import { UriArrayInput } from '@semapps/semantic-data-provider';
import { AutocompleteArrayInput, ReferenceInput, SelectInput } from 'react-admin';
import * as resources from '../resources';

const selectOptionTextByType = resource => {
  if (resource) {
    const resourceType = resource['@type'] || resource.type;
    const matchingResourceKey = Object.keys(resources).find(resourceKey => {
      if (resources[resourceKey].dataModel.types.length === 1) {
        if (
          resources[resourceKey].dataModel.types[0] === resourceType ||
          (Array.isArray(resourceType) && resourceType.includes(resources[resourceKey].dataModel.types[0]))
        ) {
          return true;
        }
      }
      return false;
    });
    if (Array.isArray(resources[matchingResourceKey].dataModel.slugField)) {
      return resources[matchingResourceKey].dataModel.slugField.map(field => resource[field]).join(' ');
    } else {
      return resource[resources[matchingResourceKey].dataModel.slugField];
    }
  } else {
    return null;
  }
};

export const OrganizationsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Organization" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </UriArrayInput>
);

export const ActorsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Actor" source={source}>
    <AutocompleteArrayInput
      optionText={selectOptionTextByType}
      shouldRenderSuggestions={value => value.length > 1}
      fullWidth
    />
  </UriArrayInput>
);

export const ActivitiesInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Activity" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </UriArrayInput>
);

export const EventsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Event" source={source}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </UriArrayInput>
);

export const PlacesInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Place" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </UriArrayInput>
);

export const SkillsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Skill" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </UriArrayInput>
);

export const ThemesInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Theme" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </UriArrayInput>
);

export const UsersInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Person" source={source}>
    <AutocompleteArrayInput
      optionText={record => record && `${record['pair:firstName']} ${record['pair:lastName']}`}
      shouldRenderSuggestions={value => value.length > 1}
      fullWidth
    />
  </UriArrayInput>
);

export const AgentsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Agent" source={source}>
    <AutocompleteArrayInput
      optionText={selectOptionTextByType}
      shouldRenderSuggestions={value => value.length > 1}
      fullWidth
    />
  </UriArrayInput>
);

export const StatusInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Status" source={source} {...rest}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const TypeInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Type" source={source} {...rest}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const PlaceInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Place" source={source} {...rest}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export const SessionsInput = ({ label, source }) => (
  <UriArrayInput label={label} reference="Session" source={source}>
    <AutocompleteArrayInput optionText="pair:label" fullWidth />
  </UriArrayInput>
);

export const PathInput = ({ label, source, ...rest }) => (
  <ReferenceInput label={label} reference="Path" source={source} {...rest}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);

export { default as PairLocationInput } from './PairLocationInput';
export { default as PairResourceCreate } from './PairResourceCreate';
