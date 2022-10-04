import React from 'react';
import { SelectInput, SimpleForm, TextInput } from 'react-admin';
import { CourseInput } from "../../../pair";
import { ReferenceInput } from "@semapps/input-components";
import Create from "../../../layout/create/Create";

const DocumentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <CourseInput source="pair:documents" />
      <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:DocumentType' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default DocumentCreate;
