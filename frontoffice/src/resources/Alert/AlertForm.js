import React from 'react';
import { SimpleForm, NumberInput, TextInput, useGetIdentity, required } from 'react-admin';
import {
  SectorsInput,
  PublicationStatusInput,
  TopicsInput
} from '../../pair';
import { PairLocationInput } from '../../pair';

const AlertForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <SimpleForm 
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      <SectorsInput source="pair:hasSector" fullWidth />
      <TopicsInput source="pair:hasTopic" fullWidth />
      <PairLocationInput source="pair:hasLocation" fullWidth />
      <NumberInput source="cdlt:radius" fullWidth />
      <PublicationStatusInput source="cdlt:hasPublicationStatus" />
    </SimpleForm>
  );
};

export default AlertForm;
