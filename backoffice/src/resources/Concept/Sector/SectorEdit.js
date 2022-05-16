import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import SectorTitle from './SectorTitle';

export const SectorEdit = (props) => (
  <EditWithPermissions title={<SectorTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <ImageInput source="pair:isDepictedBy" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </EditWithPermissions>
);

export default SectorEdit;