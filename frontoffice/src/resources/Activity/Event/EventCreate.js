import React from 'react';
import { Create } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from "../../../commons/FullWidthBox";
import LargeContainer from "../../../commons/LargeContainer";
import HeaderTitle from "../../../commons/HeaderTitle";
import EventTitle from './EventTitle';
import EventForm from "./EventForm";
import Button from "../../../commons/Button";

const actions = [
  <Button to="/MyEvents">Mes événements</Button>,
];

const EventCreate = (props) => {
  useCheckPermissions(props.resource, 'create');
  return(
    <>
      <HeaderTitle actions={actions}>Ajouter un événement</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<EventTitle />} actions={null} {...props}>
            <EventForm />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
}

export default EventCreate;
