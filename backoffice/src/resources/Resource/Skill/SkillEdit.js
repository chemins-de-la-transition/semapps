import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { UsersInput } from '../../../pair';
import SkillTitle from './SkillTitle';
import Edit from "../../../layout/edit/Edit";

export const SkillEdit = (props) => (
  <Edit title={<SkillTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <UsersInput source="pair:offeredBy" />
    </SimpleForm>
  </Edit>
);

export default SkillEdit;
