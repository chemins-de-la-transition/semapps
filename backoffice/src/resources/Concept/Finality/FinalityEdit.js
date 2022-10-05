import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import FinalityTitle from './FinalityTitle';
import Edit from "../../../layout/edit/Edit";

export const FinalityEdit = (props) => (
  <Edit title={<FinalityTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default FinalityEdit;
