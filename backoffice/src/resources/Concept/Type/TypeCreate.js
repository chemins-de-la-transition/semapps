import React from 'react';
import { SimpleForm, TextInput, SelectArrayInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const TypeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <SelectArrayInput source="@type" choices={[
        { id: 'pair:PersonType', name: 'PersonType' },
        { id: 'cdlt:CourseType', name: 'CourseType' },
        { id: 'cdlt:PathType', name: 'PathType' }
      ]} />
    </SimpleForm>
  </Create>
);

export default TypeCreate;
