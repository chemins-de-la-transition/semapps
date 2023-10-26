import React from 'react';
import {SimpleForm, TextInput, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import TemplateTitle from './TemplateTitle';
import Edit from "../../../layout/edit/Edit";

export const TemplateEdit = (props) => {
  return (
  <Edit title={<TemplateTitle />} {...props}>
    <SimpleForm>
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
    </SimpleForm>
  </Edit>
  );
}

export default TemplateEdit;
