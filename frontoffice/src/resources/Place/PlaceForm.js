import React from 'react';
import { TabbedForm, FormTab, ImageInput, NumberInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { 
  FinalitiesInput,
  OrganizationsInput,
  PathsInput,
  PersonsInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
//  StatusInput,
  ThemesInput,
  TypesInput,
} from '../../pair';
import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

const PlaceForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="Données">

        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <MarkdownInput source="cdlt:hostDescription" fullWidth />
        <MarkdownInput source="cdlt:activities" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <LocationInput
          mapboxConfig={{
            access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
            types: ['place', 'address', 'region'],
            country: ['fr', 'be', 'ch'],
          }}
          source="pair:hasPostalAddress"
          parse={(value) => {
            const countryName = extractContext(value.context, 'country');
            return ({
              type: 'pair:PostalAddress',
              'pair:label': value.place_name,
              'pair:addressLocality': value.place_type[0] === 'place' ? value.text : value.place_type[0] === 'address' ? extractContext(value.context, 'place') : undefined,
              'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
              'pair:addressZipCode': value.place_type[0] !== 'region' ? extractContext(value.context, 'postcode') : countryName === 'France' ? value.properties?.short_code?.substring(3) : undefined,
              'pair:addressCountry': countryName,
              'pair:longitude': value.center[0],
              'pair:latitude': value.center[1],
            })
          }}
          optionText={(resource) => resource['pair:label']}
          validate={[required()]}
          fullWidth
        />
        <RegistrationInput 
            directRegistrationSource="cdlt:directRegistration"
            registrationOptionSource="cdlt:registrationOption"
            jotformLinkSource="cdlt:jotformLink"
            registrationLinkSource="cdlt:registrationLink"          
            fullWidth
        />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="Relations">
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <PathsInput source="cdlt:placeOn" fullWidth />
        <SectorsInput source="pair:hasSector" fullWidth />
        <ThemesInput source="pair:hasTopic" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />        
        <TypesInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} validate={[required()]} />
        {/*<StatusInput source="pair:hasStatus" filter={{ a: 'pair:PlaceStatus' }} fullWidth />*/}
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
        <OrganizationsInput source="cdlt:hostsOrganization" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="cdlt:publicPhone" fullWidth helperText="Numéro public affiché sur la page" />
        <TextInput source="pair:homePage" fullWidth helperText="Lien affiché sur la page"/>
      </FormTab>
    </TabbedForm>
  );
};

export default PlaceForm;
