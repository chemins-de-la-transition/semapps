import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import PublicationStatusTitle from './PublicationStatusTitle';
import Edit from "../../../layout/edit/Edit";

export const PublicationStatusEdit = (props) => (
  <Edit title={<PublicationStatusTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default PublicationStatusEdit;
