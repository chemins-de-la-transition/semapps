import React from 'react';
import { Edit, useTranslate} from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import PlaceTitle from './PlaceTitle';
import PlaceForm from './PlaceForm';
import Button from '../../commons/Button';

const PlaceEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  const translate = useTranslate();
  const actions = [<Button to="/MyPlaces">{translate('app.action.place.myPlaces')}</Button>];
  return (
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<PlaceTitle />} {...props}>
            <PlaceForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default PlaceEdit;
