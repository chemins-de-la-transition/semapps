import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import PlaceTitle from './PlaceTitle';
import { extractContext, LocationInput } from "@semapps/geo-components";
import { ImageField } from "@semapps/semantic-data-provider";
import { ThemesInput } from "../../pair";

export const PlaceEdit = props => (
  <Edit title={<PlaceTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput source="pair:homePage" fullWidth />
      <ThemesInput source="pair:hasTopic" />
      <LocationInput
        mapboxConfig={{
          access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
          types: ['place', 'address'],
          country: ['fr', 'be', 'ch']
        }}
        source="pair:hasPostalAddress"
        parse={value => ({
          type: 'pair:PostalAddress',
          'pair:label': value.place_name,
          'pair:addressLocality': value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
          'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
          'pair:addressZipCode': extractContext(value.context, 'postcode'),
          'pair:addressCountry': extractContext(value.context, 'country'),
          'pair:longitude': value.center[0],
          'pair:latitude': value.center[1],
        })}
        optionText={resource => resource['pair:label']}
        fullWidth
      />
    </SimpleForm>
  </Edit>
);

export default PlaceEdit;
