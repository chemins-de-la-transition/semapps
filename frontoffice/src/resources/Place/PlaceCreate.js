import React from 'react';
import { Create } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import PlaceTitle from './PlaceTitle';
import PlaceForm from './PlaceForm';
import Button from '../../commons/Button';

const actions = [<Button to="/MyPlaces">Mes lieux</Button>];

const PlaceCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  return (
    <>
      <HeaderTitle actions={actions}>Ajouter un lieu</HeaderTitle>
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
