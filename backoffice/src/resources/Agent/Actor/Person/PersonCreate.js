import React from 'react';
import { SimpleForm, TextInput, useNotify, useRefresh, useRedirect, useTranslate } from 'react-admin';
import { TypeInput } from '../../../../pair';
import Create from "../../../../layout/create/Create";

const PersonCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const translate = useTranslate();

  const onSuccess = () => {
    notify(translate('app.action.userCreation'));
    setTimeout(() => {
      notify(translate('app.action.successMessageSent'));
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
        <TextInput source="pair:firstName" label={translate('app.input.person.firstname')} fullWidth />
        <TextInput source="pair:lastName" label={translate('app.input.person.lastName')} fullWidth />
        <TextInput source="pair:alternativeLabel" label={translate('app.input.person.alternativeLabel')} fullWidth />
        <TextInput source="foaf:email" fullWidth />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} fullWidth helperText={translate('app.input.person.userCreation')}  />
      </SimpleForm>
    </Create>
  );
};

export default PersonCreate;
