import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { ImageField } from '@semapps/field-components';
import SectorTitle from './SectorTitle';
import Edit from "../../../layout/edit/Edit";

export const SectorEdit = (props) => (
  <Edit title={<SectorTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <ImageInput source="pair:depictedBy" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ImageInput source="cdlt:alternativeImage" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default SectorEdit;
