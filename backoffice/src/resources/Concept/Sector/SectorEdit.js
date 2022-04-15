import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import SectorTitle from './SectorTitle';

export const SectorEdit = (props) => (
  <EditWithPermissions title={<SectorTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default SectorEdit;
