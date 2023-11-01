import React from 'react';
import { Edit, useTranslate } from 'react-admin';
import { usePermissionsWithRefetch } from '@semapps/auth-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import EventTitle from './EventTitle';
import EventForm from './EventForm';
import Button from '../../../../commons/Button';

const EventEdit = (props) => {
  usePermissionsWithRefetch(props.id, 'edit', props.basePath);
  const translate = useTranslate();
  const actions = [<Button to="/MyEvents">{translate('app.action.list')}</Button>];
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
