import React from 'react';
import { Create, useGetIdentity, useTranslate} from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import organizationTheme from '../../../../config/themes/organizationTheme';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import OrganizationTitle from './OrganizationTitle';
import OrganizationForm from './OrganizationForm';
import Button from '../../../../commons/Button';


const OrganizationCreate = (props) => {
  const translate = useTranslate(); // Move the translate function here

  const actions = [<Button to="/MyOrganizations">{translate('app.action.organization.myOrganizations')}</Button>];

  const createContainerUri = useCreateContainer(props.resource);
  const { identity } = useGetIdentity();
  useCheckPermissions(createContainerUri, 'create');
  return (
    <ThemeProvider theme={organizationTheme}>
      <HeaderTitle actions={actions}>Ajouter une organisation</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<OrganizationTitle />} actions={null} {...props}>
            <OrganizationForm initialValues={{ 'pair:affiliatedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }} />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </ThemeProvider>
  );
};

export default OrganizationCreate;
