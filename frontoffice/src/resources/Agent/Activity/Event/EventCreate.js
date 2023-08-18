import React from 'react';
import { Create, useTranslate} from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from '@semapps/semantic-data-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import EventTitle from './EventTitle';
import EventForm from './EventForm';
import Button from '../../../../commons/Button';


const EventCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  const translate = useTranslate();
  const actions = [<Button to="/MyEvents">{translate('app.action.event.myEvents')}</Button>];

  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.event.create')}</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<EventTitle />} actions={null} {...props}>
            <EventForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default EventCreate;
