import React from 'react';
import { TabbedForm, FormTab, ImageInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  PersonsInput,
  SectorsInput,
  TopicsInput,
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
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
    </TabbedForm>
  );
};

export default OfferAndNeedForm;
