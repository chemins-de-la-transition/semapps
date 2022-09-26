import React from 'react';
import { ListBase } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import EventCard from '../resources/Agent/Activity/Event/EventCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const actions = [<Button to="/Event/create">Ajouter</Button>];

const MyEventsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>Mes événements</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Event" basePath="/Event" filter={{ 'cdlt:organizedBy': identity?.id }}>
            <CardsList CardComponent={EventCard} link="show" />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyEventsPage;
