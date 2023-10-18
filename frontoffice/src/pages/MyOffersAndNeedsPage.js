import React from 'react';
import { ListBase } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import OfferAndNeedCard from '../resources/OfferAndNeed/OfferAndNeedCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const actions = [<Button to="/OfferAndNeed/create">Ajouter</Button>];

const MyOffersAndNeedsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>Mes annonces</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="OfferAndNeed" basePath="/OfferAndNeed" filter={{ 'cdlt:proposedBy': identity?.id }}>
            <CardsList CardComponent={OfferAndNeedCard} link="show" />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyOffersAndNeedsPage;