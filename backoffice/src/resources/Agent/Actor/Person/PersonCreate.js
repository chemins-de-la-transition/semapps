import React from 'react';
import { SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from 'react-admin';
import { TypeInput } from '../../../../pair';
import Create from "../../../../layout/create/Create";

const PersonCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('Utilisateur en cours de création...');
    setTimeout(() => {
      notify('Utilisateur créé');
      redirect('/Person');
      refresh();
    }, 8000)
  };

  const transform = (data) => {
    const label = data['pair:alternativeLabel']
      ? data['pair:alternativeLabel']
      : `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`;
    return ({
      ...data,
      name: label,
      'foaf:name': label,
      'pair:label': label
    });
  };

  return (
    <Create
      transform={transform}
      onSuccess={onSuccess}
      {...props}
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
};

export default PersonCreate;
