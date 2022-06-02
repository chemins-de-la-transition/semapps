import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { TypeInput } from '../../../../pair';

const PersonCreate = (props) => (
  <Create
    {...props}
    transform={(data) => ({
      ...data,
      'pair:label': 
        data['pair:alternativeLabel']
          ? data['pair:alternativeLabel']
          : `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`
    })}
  >
    <SimpleForm>
      <TextInput source="pair:firstName" label="Prénom" fullWidth />
      <TextInput source="pair:lastName" label="Nom de famille" fullWidth />
      <TextInput source="pair:alternativeLabel" label="Nom d'utilisateur" fullWidth />
      <TextInput source="foaf:email" fullWidth />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} fullWidth helperText="Si vous créer un utilisateur de type Acteur, il recevra automatiquement une invitation à son adresse mail"  />
    </SimpleForm>
  </Create>
);

export default PersonCreate;
