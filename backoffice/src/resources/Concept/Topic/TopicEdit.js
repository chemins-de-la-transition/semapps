import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { AgentsInput } from '../../../pair';
import TopicTitle from './TopicTitle';
import Edit from "../../../layout/edit/Edit";

export const TopicEdit = (props) => (
  <Edit title={<TopicTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <AgentsInput source="pair:topicOf" />
    </SimpleForm>
  </Edit>
);

export default TopicEdit;
