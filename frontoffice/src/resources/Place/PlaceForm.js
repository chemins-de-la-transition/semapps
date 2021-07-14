import React from 'react';
import { SimpleForm, ImageInput, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { ThemesInput, TypeInput, SkillsInput } from '../../pair';

const PlaceForm = (props) =>(
  <SimpleForm {...props}>
    <TextInput source="pair:label" fullWidth />
    <TextInput source="pair:comment" fullWidth />
    <ImageInput source="pair:isDepictedBy" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <MarkdownInput source="pair:description" fullWidth />
    <MarkdownInput source="cdlt:activities" fullWidth />
    <MarkdownInput source="cdlt:practicalConditions" fullWidth />
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
    <ThemesInput source="pair:hasTopic" />
    <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
    <TypeInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} />
    <SkillsInput source="pair:produces" fullWidth />
    <TextInput source="pair:e-mail" fullWidth />
    <TextInput source="pair:phone" fullWidth />
    <TextInput source="pair:homePage" fullWidth />
  </SimpleForm>
);

export default PlaceForm;
