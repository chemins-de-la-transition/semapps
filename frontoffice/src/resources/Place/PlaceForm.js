import React from 'react';
import { TabbedForm, FormTab, ImageInput, NumberInput, TextInput, useGetIdentity, email, required, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import {
  FinalitiesInput,
  OrganizationsInput,
  PathsInput,
  PersonsInput, PublicationStatusInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
  TopicsInput,
  TypesInput,
} from '../../pair';
import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

const PlaceForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  const translate = useTranslate();
  return (
    <TabbedForm
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label={translate('app.tab.place.about')}>
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:PlaceType' }} validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <MarkdownInput source="cdlt:hostDescription" fullWidth />
        <MarkdownInput source="cdlt:activities" fullWidth />
        <SectorsInput source="pair:hasSector" fullWidth />
        <TopicsInput source="pair:hasTopic" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
        <SkillsInput source="pair:produces" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label={translate('app.tab.place.link')}>
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <OrganizationsInput source="cdlt:hostsOrganization" />
        <PathsInput source="cdlt:placeOn" fullWidth />
      </FormTab>
      <FormTab label={translate('app.tab.place.contact')}>
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')} validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="cdlt:publicPhone" fullWidth helperText={translate('app.helper.publicPhone')} />
        <TextInput source="pair:homePage" fullWidth helperText={translate('app.helper.publicLink')} />
        <RegistrationInput
          directRegistrationSource="cdlt:directRegistration" helperText={translate('app.helper.directRegistration')}
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"
          fullWidth
        />
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
      </FormTab>
      <FormTab label={translate('app.tab.visibility')}>
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default PlaceForm;
