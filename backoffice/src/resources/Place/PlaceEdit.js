import React from 'react';
import { ImageInput, TabbedForm, FormTab, NumberInput, TextInput, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { ImageField } from '@semapps/field-components';
import PlaceTitle from './PlaceTitle';
import { 
  FinalitiesInput, 
  OrganizationsInput ,
  PathsInput, 
  PersonsInput, 
  SectorsInput, 
  RegistrationInput,
  SkillsInput, 
//  StatusInput, 
  TopicsInput, 
  TypesInput, 
} from '../../pair';
import ReminderBeforeRecording from '../../common/ReminderBeforeRecording';
import Edit from "../../layout/edit/Edit";

export const PlaceEdit = (props) => (
  <Edit title={<PlaceTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth />
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
        <PersonsInput source="cdlt:proposedBy" />
        <PathsInput source="cdlt:placeOn" />
        <SectorsInput source="pair:hasSector" />
        <TopicsInput source="pair:hasTopic" />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} />
        {/*<StatusInput source="pair:hasStatus" filter={{ a: 'pair:PlaceStatus' }} />*/}
        {/*<EventsInput source="pair:hosts" fullWidth />*/}
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
  </Edit>
);

export default PlaceEdit;
