import React from 'react';
import { SelectInput, SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ReferenceInput } from '@semapps/semantic-data-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import { CourseInput } from '../../../pair';
import DocumentTitle from './DocumentTitle';

export const DocumentEdit = props => (
  <EditWithPermissions title={<DocumentTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:DocumentType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <CourseInput source="pair:documents" />
    </SimpleForm>
  </EditWithPermissions>
);

export default DocumentEdit;
