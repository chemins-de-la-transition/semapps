import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import JobOpportunitiesTitle from './JobOpportunitiesTitle';
import Edit from "../../../layout/edit/Edit";

export const JobOpportunitiesEdit = (props) => (
  <Edit title={<JobOpportunitiesTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default JobOpportunitiesEdit;
