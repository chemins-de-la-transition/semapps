import React from 'react';
import { TabbedForm, FormTab, ImageInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  PersonsInput,
  SectorsInput,
  TopicsInput,
  TypeInput
} from '../../pair';
import { PairLocationInput } from '../../pair';
// import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

const OfferAndNeedForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="Description">
        <TypeInput source="pair:hasType" filter={{ a: 'cdlt:OfferAndNeedType' }} validate={[required()]} />
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <SectorsInput source="pair:hasSector" fullWidth />
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth helperText="Lien affiché sur la page"/>        
      </FormTab>
    </TabbedForm>
  );
};

export default OfferAndNeedForm;
