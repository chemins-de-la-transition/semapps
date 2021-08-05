import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { TextField } from "react-admin";
import PlaceIcon from '../../../svg/PlaceIcon';
import Chip from "../../../commons/Chip";
import { ReferenceField } from "@semapps/semantic-data-provider";

const useStyles = makeStyles((theme) => ({
  placeSubHeader: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '1rem',
    },
    '& svg [fill]': {
      fill: theme.palette.secondary.main,
    },
  },
  text: {
    fontSize: '12px',
    lineHeight: '12px',
    marginLeft: '8px',
    fontWeight: 'normal',
    color: theme.palette.secondary.main,
  },
}));

const PlaceSubHeader = ({ record }) => {
  const classes = useStyles();
  return record['pair:hasLocation'] ? (
    <Chip icon={<PlaceIcon />}>
      <ReferenceField record={record} source="pair:hasLocation" reference="Region" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
    </Chip>
  ) : null;
};

export default PlaceSubHeader;
