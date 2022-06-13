import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import TargetAudienceTitle from './TargetAudienceTitle';

export const TargetAudienceEdit = (props) => (
  <EditWithPermissions title={<TargetAudienceTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default TargetAudienceEdit;
