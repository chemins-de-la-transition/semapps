import React from 'react';
import { Create, useTranslate} from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import PlaceTitle from './PlaceTitle';
import PlaceForm from './PlaceForm';
import Button from '../../commons/Button';


const PlaceCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  const translate = useTranslate();
  const actions = [<Button to="/MyPlaces">{translate('app.action.place.myPlaces')}</Button>];

  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.place.create')}</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<PlaceTitle />} actions={null} {...props}>
            <PlaceForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default PlaceCreate;
