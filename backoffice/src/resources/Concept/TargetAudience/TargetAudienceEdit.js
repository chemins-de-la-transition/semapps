import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import TargetAudienceTitle from './TargetAudienceTitle';
import Edit from "../../../layout/edit/Edit";

export const TargetAudienceEdit = (props) => (
  <Edit title={<TargetAudienceTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default TargetAudienceEdit;
