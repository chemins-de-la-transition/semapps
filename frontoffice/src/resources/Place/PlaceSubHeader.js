import React from 'react';
import { TextField } from "react-admin";
import PlaceIcon from '../../svg/PlaceIcon';
import Chip from "../../commons/Chip";
import { ReferenceField } from "@semapps/semantic-data-provider";

const PlaceSubHeader = ({ record }) => {
  return record['cdlt:hasRegion'] ? (
    <Chip icon={<PlaceIcon />}>
      <ReferenceField record={record} source="cdlt:hasRegion" reference="Region" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </Chip>
  ) : null;
};

export default PlaceSubHeader;
