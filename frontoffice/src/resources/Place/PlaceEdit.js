import React from 'react';
import { Edit } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from "../../commons/FullWidthBox";
import LargeContainer from "../../commons/LargeContainer";
import HeaderTitle from "../../commons/HeaderTitle";
import PlaceTitle from './PlaceTitle';
import PlaceForm from "./PlaceForm";
import Button from "../../commons/Button";

const actions = [
  <Button to="/MyPlaces">Mes lieux</Button>,
];

const PlaceEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  return(
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<PlaceTitle />} actions={null} {...props}>
            <PlaceForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
}

export default PlaceEdit;
