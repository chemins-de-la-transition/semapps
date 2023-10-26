import React from 'react';
import { Create, useTranslate } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import AlertTitle from './AlertTitle';
import AlertForm from './AlertForm';
import Button from '../../commons/Button';

const AlertCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  const translate = useTranslate();
  const actions = [<Button to="/MyAlerts">{translate('app.action.alert.mine')}</Button>];
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.alert.create')}</HeaderTitle>
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
