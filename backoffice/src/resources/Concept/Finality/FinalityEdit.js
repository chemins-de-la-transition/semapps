import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import FinalityTitle from './FinalityTitle';

export const FinalityEdit = (props) => (
  <EditWithPermissions title={<FinalityTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default FinalityEdit;
