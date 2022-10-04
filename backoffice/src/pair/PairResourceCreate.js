import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import Create from "../layout/create/Create";

const PairResourceCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Create>
);

export default PairResourceCreate;
