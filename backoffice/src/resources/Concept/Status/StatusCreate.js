import React from 'react';
import { SimpleForm, TextInput, SelectArrayInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const StatusCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <SelectArrayInput source="@type" choices={[
        { id: 'cdlt:SessionStatus', name: 'SessionStatus' },
        { id: 'cdlt:PathStatus', name: 'PathStatus' }
      ]} />
    </SimpleForm>
  </Create>
);

export default StatusCreate;
