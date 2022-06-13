import React from 'react';
import { Edit } from 'react-admin';
import { usePermissionsWithRefetch } from '@semapps/auth-provider';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import HeaderTitle from '../../../commons/HeaderTitle';
import EventTitle from './EventTitle';
import EventForm from './EventForm';
import Button from '../../../commons/Button';

const actions = [<Button to="/MyEvents">Liste</Button>];

const EventEdit = (props) => {
  usePermissionsWithRefetch(props.id, 'edit', props.basePath);
  return (
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<EventTitle />} {...props}>
            <EventForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default EventEdit;
