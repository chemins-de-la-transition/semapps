import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    lineHeight: 1.3,
  },
}));

const BodyLabel = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" color="secondary" className={classes.root}>
      {children}
    </Typography>
  );
};

export default BodyLabel;
