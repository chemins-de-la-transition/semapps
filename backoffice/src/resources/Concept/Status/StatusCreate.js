import React from 'react';
import { SimpleForm, TextInput, SelectArrayInput } from 'react-admin';
import Create from "../../../layout/create/Create";

const StatusCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <SelectArrayInput
        source="@type"
        choices={[
          { id: 'cdlt:CourseStatus', name: 'CourseStatus' },
          { id: 'pair:AgentStatus', name: 'AgentStatus' },
          { id: 'pair:EventStatus', name: 'EventStatus' },
          { id: 'pair:OrganizationStatus', name: 'OrganizationStatus'},
          { id: 'pair:Status', name: 'Status' },
          // { id: 'cdlt:PathStatus', name: 'PathStatus' },
        ]}
      />
    </SimpleForm>
  </Create>
);

export default StatusCreate;
