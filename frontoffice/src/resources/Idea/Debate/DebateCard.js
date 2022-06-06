import React from 'react';
import { TextField } from 'react-admin';
import { makeStyles } from '@material-ui/core';
import StrippedTextField from "../../../commons/fields/StrippedTextField";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '3.6em',
  },
}));

const DebateCard = ({ record }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title} />
      <StrippedTextField record={record} source="pair:description" variant="body2" color="secondary" className={classes.description} />
    </>
  );
};

export default DebateCard;
