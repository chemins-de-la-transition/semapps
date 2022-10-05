import React from 'react';
import { SelectInput, SimpleForm, TextInput } from 'react-admin';
import { ReferenceInput } from '@semapps/input-components';
import { MarkdownInput } from '@semapps/markdown-components';
import { CourseInput } from '../../../pair';
import DocumentTitle from './DocumentTitle';
import Edit from "../../../layout/edit/Edit";

export const DocumentEdit = props => (
  <Edit title={<DocumentTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:DocumentType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <CourseInput source="pair:documents" />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
