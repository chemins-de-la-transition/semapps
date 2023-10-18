import React from 'react';
import { ListBase, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import OfferAndNeedCard from '../resources/OfferAndNeed/OfferAndNeedCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const MyOffersAndNeedsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  const translate = useTranslate();
  if (loading) return null;
  const actions = [<Button to="/OfferAndNeed/create">{translate('app.action.offerAndNeed.create')}</Button>];
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.offerAndNeed.mine')}</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="OfferAndNeed" basePath="/OfferAndNeed" filter={{ 'cdlt:proposedBy': identity?.id }}>
            <CardsList CardComponent={OfferAndNeedCard} link="show" all />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyOffersAndNeedsPage;