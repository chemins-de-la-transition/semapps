import React from 'react';
import { ImageInput, TabbedForm, FormTab, NumberInput, TextInput, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
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
  ThemesInput, 
  TypesInput, 
} from '../../pair';
import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

export const PlaceEdit = (props) => (
  <EditWithPermissions title={<PlaceTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="A propos du lieu">
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:label" fullWidth />
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
            'pair:addressLocality':
              value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
            'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
            'pair:addressZipCode': extractContext(value.context, 'postcode'),
            'pair:addressCountry': extractContext(value.context, 'country'),
            'pair:longitude': value.center[0],
            'pair:latitude': value.center[1],
          })}
          optionText={(resource) => resource['pair:label']}
          fullWidth
        />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
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
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} />
        
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec le lieu">
        {/*<StatusInput source="pair:hasStatus" filter={{ a: 'pair:PlaceStatus' }} />*/}
        {/*<EventsInput source="pair:hosts" fullWidth />*/}
        <OrganizationsInput source="cdlt:hostsOrganization" />
        <PersonsInput source="cdlt:proposedBy" />
        <PathsInput source="cdlt:placeOn" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PlaceEdit;
