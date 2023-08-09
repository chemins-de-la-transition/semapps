import React from 'react';
import { ImageInput, TabbedForm, FormTab, TextInput, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { ImageField } from '@semapps/field-components';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import { 
//  OrganizationsInput ,
  PersonsInput, 
  SectorsInput, 
  TopicsInput, 
//  TypesInput, 
} from '../../pair';
// import ReminderBeforeRecording from '../../common/ReminderBeforeRecording';
import Edit from "../../layout/edit/Edit";

export const OfferAndNeedEdit = (props) => (
  <Edit title={<OfferAndNeedTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Principal">
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <SectorsInput source="pair:hasSector" fullWidth />
        <TopicsInput source="pair:hasTopic" fullWidth />
        {/*<TypesInput source="pair:hasType" filter={{ a: 'pair:OfferAndNeedType' }} validate={[required()]} />*/}
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth helperText="Lien affiché sur la page"/>        
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
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default OfferAndNeedEdit;
