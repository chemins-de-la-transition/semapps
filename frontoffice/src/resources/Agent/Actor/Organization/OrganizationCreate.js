import React from 'react';
import { Create } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import OrganizationTitle from './OrganizationTitle';
import OrganizationForm from './OrganizationForm';
import Button from '../../../../commons/Button';

const actions = [<Button to="/MyOrganizations">Mes organisations</Button>];

const OrganizationCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  return (
    <>
      <HeaderTitle actions={actions}>Ajouter une organisation</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<OrganizationTitle />} actions={null} {...props}>
            <OrganizationForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default OrganizationCreate;
