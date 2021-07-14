import React from 'react';
import { ListBase } from 'react-admin';
import CardsList from "../commons/lists/CardsList";
import EventCard from "../resources/Activity/Event/EventCard";
import FullWidthBox from "../commons/FullWidthBox";
import LargeContainer from "../commons/LargeContainer";
import HeaderTitle from "../commons/HeaderTitle";
import Button from "../commons/Button";

const actions = [
  <Button to="/Event/create">Ajouter un événement</Button>
];

const MyEventsPage = () => (
  <>
    <HeaderTitle actions={actions}>Mes événements</HeaderTitle>
    <br />
    <FullWidthBox>
      <LargeContainer>
        <ListBase resource="Event" basePath="/Event">
          <CardsList CardComponent={EventCard} link="edit" />
        </ListBase>
      </LargeContainer>
    </FullWidthBox>
  </>
);

export default MyEventsPage;
