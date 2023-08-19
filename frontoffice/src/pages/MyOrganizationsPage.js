import React from 'react';
import { ListBase, useTranslate } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import organizationTheme from '../config/themes/organizationTheme';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import OrganizationCard from '../resources/Agent/Actor/Organization/OrganizationCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';


const MyOrganizationsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  const translate = useTranslate();
  const actions = [<Button to="/Organization/create">{translate('app.action.create')}</Button>];
  if (loading) return null;
  return (
    <ThemeProvider theme={organizationTheme}>
      <HeaderTitle actions={actions}>{translate('app.menu.organizations')}</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Organization" basePath="/Organization" filter={{ 'pair:affiliates': identity?.id }}>
            <CardsList CardComponent={OrganizationCard} link="show" />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </ThemeProvider>
  );
};

export default MyOrganizationsPage;
