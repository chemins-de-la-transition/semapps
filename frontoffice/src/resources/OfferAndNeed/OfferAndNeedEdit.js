import React from 'react';
import { Edit, useTranslate } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import OfferAndNeedForm from './OfferAndNeedForm';
import Button from '../../commons/Button';

const OfferAndNeedEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  const translate = useTranslate();
  const actions = [<Button to="/MyOffersAndNeeds">{translate('app.action.offerAndNeed.mine')}</Button>];
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
