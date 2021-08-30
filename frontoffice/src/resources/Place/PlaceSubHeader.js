import React from 'react';
import { TextField } from "react-admin";
import PlaceIcon from '../../svg/PlaceIcon';
import Chip from "../../commons/Chip";
import { ReferenceField } from "@semapps/semantic-data-provider";

const PlaceSubHeader = ({ record }) => {
  return record['pair:hasLocation'] ? (
    <Chip icon={<PlaceIcon />}>
      <ReferenceField record={record} source="pair:hasLocation" reference="Region" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </Chip>
  ) : null;
};

export default PlaceSubHeader;
