import React from 'react';
import { Edit } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import AlertTitle from './AlertTitle';
import AlertForm from './AlertForm';
import Button from '../../commons/Button';

const actions = [<Button to="/MyAlerts">Mes alertes</Button>];

const AlertEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  return (
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<AlertTitle />} {...props}>
            <AlertForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default AlertEdit;
