import React from 'react';
import { Container } from '@material-ui/core';
import { EditWithPermissions } from '@semapps/auth-provider';
import OrganizationForm from './OrganizationForm';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <Container maxWidth="lg">
    <EditWithPermissions title={<OrganizationTitle />} {...props}>
      <OrganizationForm mode="edit" />
    </EditWithPermissions>
  </Container>
);

export default OrganizationEdit;
