import React from 'react';
import { Edit } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import organizationTheme from '../../../../config/themes/organizationTheme';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import OrganizationTitle from './OrganizationTitle';
import OrganizationForm from './OrganizationForm';
import Button from '../../../../commons/Button';

const actions = [<Button to="/MyOrganizations">Mes organisations</Button>];

const OrganizationEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  return (
    <ThemeProvider theme={organizationTheme}>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<OrganizationTitle />} {...props}>
            <OrganizationForm />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </ThemeProvider>
  );
};

export default OrganizationEdit;
