import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import IntentionTitle from './IntentionTitle';

export const IntentionEdit = (props) => (
  <EditWithPermissions title={<IntentionTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default IntentionEdit;
