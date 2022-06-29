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
      <FormTab label="A propos du lieu">
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <LocationInput
          mapboxConfig={{
            access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
            types: ['place', 'address'],
            country: ['fr', 'be', 'ch'],
          }}
          source="pair:hasPostalAddress"
          parse={(value) => ({
            type: 'pair:PostalAddress',
            'pair:label': value.place_name,
            'pair:addressLocality': value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
            'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
            'pair:addressZipCode': extractContext(value.context, 'postcode'),
            'pair:addressCountry': extractContext(value.context, 'country'),
            'pair:longitude': value.center[0],
            'pair:latitude': value.center[1],
          })}
          optionText={(resource) => resource['pair:label']}
          validate={[required()]}
          fullWidth
        />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <MarkdownInput source="cdlt:hostDescription" fullWidth />
        <MarkdownInput source="cdlt:activities" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <RegistrationInput 
            directRegistrationSource="cdlt:directRegistration"
            registrationOptionSource="cdlt:registrationOption"
            jotformLinkSource="cdlt:jotformLink"
            registrationLinkSource="cdlt:registrationLink"          
            fullWidth
        />
        <FinalitiesInput source="pair:hasFinality" />
        <SectorsInput source="pair:hasSector" fullWidth />
        <ThemesInput source="pair:hasTopic" fullWidth />
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />        
        <TypesInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} validate={[required()]} />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec le lieu">
        {/*<StatusInput source="pair:hasStatus" filter={{ a: 'pair:PlaceStatus' }} fullWidth />*/}       
        <OrganizationsInput source="cdlt:hostsOrganization" />
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <PathsInput source="cdlt:placeOn" fullWidth />
      </FormTab>
      <FormTab label="Contact">
      <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth />
      </FormTab>
    </TabbedForm>
  );
};

export default PlaceForm;
