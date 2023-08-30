import React from 'react';
import { TabbedForm, FormTab, ImageInput, TextInput, useGetIdentity, email, required, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  OrganizationsInput,
  PersonsInput,
  PublicationStatusInput,
  SectorsInput,
  TopicsInput,
  TypeInput
} from '../../pair';
import { PairLocationInput } from '../../pair';
// import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

const OfferAndNeedForm = ({ mode, record, ...rest }) => {
  const translate = useTranslate();
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label={translate('app.tab.offerAndNeed.description')}>
        <TypeInput source="pair:hasType" filter={{ a: 'cdlt:OfferAndNeedType' }} validate={[required()]} />
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <SectorsInput source="pair:hasSector" fullWidth />
        <TopicsInput source="pair:hasTopic" fullWidth />
        <PersonsInput source="cdlt:proposedBy" fullWidth validate={[required()]} />
        <OrganizationsInput source="cdlt:sponsoredBy" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
      <FormTab label={translate('app.tab.offerAndNeed.contact')}>
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')} validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="pair:homePage" fullWidth helperText={translate('app.helper.publicLink')} />        
      </FormTab>
      <FormTab label={translate('app.tab.offerAndNeed.visibility')}>
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default OfferAndNeedForm;
