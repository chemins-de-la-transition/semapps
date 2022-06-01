import React from 'react';
import { ListBase } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import OrganizationCard from '../resources/Agent/Actor/Organization/OrganizationCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const actions = [<Button to="/Organization/create">Ajouter</Button>];

const MyOrganizationsPage = () => {
  const { identity } = useCheckAuthenticated();
  return (
    <>
      <HeaderTitle actions={actions}>Mes organisations</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Organization" basePath="/Organization" filter={{ 'pair:affiliatedBy': identity?.id }}>
            <CardsList CardComponent={OrganizationCard} link="edit" />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyOrganizationsPage;
