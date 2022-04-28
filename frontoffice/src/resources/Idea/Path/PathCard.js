import React from 'react';
import { TextField, Link, linkToRecord } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
  },
}));

const PathCard = ({ record, basePath }) => {
  const classes = useStyles();
  return (
    <>
      <Link to={linkToRecord(basePath, record.id, 'show')}>
        <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title} />
      </Link>
      <Typography variant="body2" color="secondary" className={classes.description}>
        <strong>Description: </strong>
        <TextField record={record} source="pair:comment" variant="body2" color="secondary" />
      </Typography>
    </>
  );
};

export default PathCard;
