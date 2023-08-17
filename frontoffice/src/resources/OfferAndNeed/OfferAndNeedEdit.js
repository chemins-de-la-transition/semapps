import React from 'react';
import { Edit } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import OfferAndNeedForm from './OfferAndNeedForm';
import Button from '../../commons/Button';

const actions = [<Button to="/MyOffersAndNeeds">Mes annonces</Button>];

const OfferAndNeedEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  return (
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<OfferAndNeedTitle />} {...props}>
            <OfferAndNeedForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default OfferAndNeedEdit;
