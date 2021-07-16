import React from 'react';
import StickyBox from 'react-sticky-box';
import { useRecordContext, TextField } from 'react-admin';
import { makeStyles, Box, Card } from '@material-ui/core';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    lineHeight: 1.15,
  },
  block: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
  },
}));

const StickyCard = ({ children, actionLabel }) => {
  const classes = useStyles();
  const record = useRecordContext();
  return (
    <StickyBox offsetTop={168} className={classes.root}>
      <Card>
        <Box p={2}>
          <TextField record={record} source="pair:label" variant="h2" className={classes.title} />
        </Box>
        <Box className={classes.block} p={2}>
          {children}
        </Box>
        <Box className={classes.button} pb={3} pr={2} pl={2}>
          <Button variant="contained" color="primary" typographyVariant="button1">
            {actionLabel}
          </Button>
        </Box>
      </Card>
    </StickyBox>
  );
};

export default StickyCard;
