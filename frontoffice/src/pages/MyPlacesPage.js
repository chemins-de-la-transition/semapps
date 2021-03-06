import React from 'react';
import { ListBase } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from "../commons/lists/CardsList";
import PlaceCard from "../resources/Place/PlaceCard";
import FullWidthBox from "../commons/FullWidthBox";
import LargeContainer from "../commons/LargeContainer";
import HeaderTitle from "../commons/HeaderTitle";
import Button from '../commons/Button';

const actions = [
  <Button to="/Place/create">Ajouter un lieu</Button>
];

const MyPlacesPage = () => {
  const { identity } = useCheckAuthenticated();
  return (
    <>
      <HeaderTitle actions={actions}>Mes lieux</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Place" basePath="/Place" filter={{ 'cdlt:proposedBy': identity?.id }}>
            <CardsList CardComponent={PlaceCard} link="edit" />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
}

export default MyPlacesPage;
