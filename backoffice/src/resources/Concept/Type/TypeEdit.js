import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import TypeTitle from './TypeTitle';

export const TypeEdit = (props) => (
  <EditWithPermissions title={<TypeTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default TypeEdit;
