import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { TypeInput } from '../../../../pair';

const PersonCreate = (props) => (
  <Create
    {...props}
    transform={(data) => ({
      ...data,
      'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`,
    })}
  >
    <SimpleForm>
      <TextInput source="pair:firstName" label="Prénom" fullWidth />
      <TextInput source="pair:lastName" label="Nom de famille" fullWidth />
      <TextInput source="foaf:email" fullWidth />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
    </SimpleForm>
  </Create>
);

export default PersonCreate;
