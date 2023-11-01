import React from 'react';
import { ImageInput, TabbedForm, FormTab, TextInput, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import { PairLocationInput } from '../../pair';
import { 
  OrganizationsInput,
  PersonsInput, 
  SectorsInput,
  TopicsInput,
  TypeInput, 
} from '../../pair';
// import ReminderBeforeRecording from '../../common/ReminderBeforeRecording';
import Edit from "../../layout/edit/Edit";

export const OfferAndNeedEdit = (props) => (
  <Edit title={<OfferAndNeedTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Description">
        <TypeInput source="pair:hasType" filter={{ a: 'cdlt:OfferAndNeedType' }} validate={[required()]} />
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
        <SectorsInput source="pair:hasSector" fullWidth />
        <TopicsInput source="pair:hasTopic" fullWidth />
        <PersonsInput source="cdlt:proposedBy" fullWidth />
        <OrganizationsInput source="cdlt:sponsoredBy" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')} validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="pair:homePage" fullWidth helperText="Lien affiché sur la page"/>        
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default OfferAndNeedEdit;
