import React from 'react';
import { Create } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import OfferAndNeedForm from './OfferAndNeedForm';
import Button from '../../commons/Button';

const actions = [<Button to="/MyOfferAndNeeds">Mes lieux</Button>];

const OfferAndNeedCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  return (
    <>
      <HeaderTitle actions={actions}>Ajouter un lieu</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<OfferAndNeedTitle />} actions={null} {...props}>
            <OfferAndNeedForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default OfferAndNeedCreate;
