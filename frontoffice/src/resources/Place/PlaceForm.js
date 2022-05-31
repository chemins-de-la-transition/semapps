import React from 'react';
import { SimpleForm, ImageInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { FinalitiesInput, ThemesInput, TypeInput, SkillsInput, TypesInput, PathsInput, RegistrationInput, OrganizationsInput, PersonsInput } from '../../pair';

const PlaceForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <SimpleForm
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id } : undefined}
      {...rest}
      redirect="/MyPlaces"
    >
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      <TextInput source="pair:comment" fullWidth validate={[required()]} />
      <ImageInput source="pair:depictedBy" accept="image/*" multiple>
        <ImageField source="src" />
      </ImageInput>
      <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
      <MarkdownInput source="cdlt:hostDescription" fullWidth />
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
      <RegistrationInput 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"          
          fullWidth
      />
      <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} validate={[required()]} />
      <ThemesInput source="pair:hasTopic" />
      <SkillsInput source="pair:produces" fullWidth />
      <FinalitiesInput source="pair:hasFinality" />
      <PathsInput source="cdlt:placeOn" fullWidth />
      <OrganizationsInput source="cdlt:hostsOrganization" />
      <TextInput source="pair:e-mail" fullWidth validate={[required(), email()]} helperText="Ne sera pas visible, mais on pourra vous contacter via un formulaire" />
      <TextInput source="pair:phone" fullWidth helperText="Si vous entrez un numéro de téléphone, il sera visible sur la page de votre lieu" />
      <TextInput source="pair:homePage" fullWidth />
    </SimpleForm>
  );
};

export default PlaceForm;
