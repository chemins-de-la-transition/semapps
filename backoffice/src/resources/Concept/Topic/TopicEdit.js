import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { AgentsInput } from '../../../pair';
import TopicTitle from './TopicTitle';

export const TopicEdit = (props) => (
  <EditWithPermissions title={<TopicTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <AgentsInput source="pair:topicOf" />
    </SimpleForm>
  </EditWithPermissions>
);

export default TopicEdit;
