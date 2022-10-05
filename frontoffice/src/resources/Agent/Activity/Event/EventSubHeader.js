import React from 'react';
import { TextField } from "react-admin";
import PlaceIcon from '../../../svg/PlaceIcon';
import Chip from "../../../commons/Chip";
import { ReferenceField } from "@semapps/field-components";

const EventSubHeader = ({ record }) => {
  return record['pair:hasRegion'] ? (
    <Chip icon={<PlaceIcon />}>
      <ReferenceField record={record} source="pair:hasRegion" reference="Region" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </Chip>
  ) : null;
};

export default EventSubHeader;
