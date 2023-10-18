import React from 'react';
import { Create } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import AlertTitle from './AlertTitle';
import AlertForm from './AlertForm';
import Button from '../../commons/Button';

const actions = [<Button to="/MyAlerts">Mes alertes</Button>];

const AlertCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  return (
    <>
      <HeaderTitle actions={actions}>Ajouter une alerte</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<AlertTitle />} actions={null} {...props}>
            <AlertForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default AlertCreate;
