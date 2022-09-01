import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import JobOpportunitiesTitle from './JobOpportunitiesTitle';

export const JobOpportunitiesEdit = (props) => (
  <EditWithPermissions title={<JobOpportunitiesTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default JobOpportunitiesEdit;
