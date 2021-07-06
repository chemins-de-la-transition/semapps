import React from 'react';
import StickyBox from 'react-sticky-box';
import { useRecordContext, TextField } from 'react-admin';
import { makeStyles, Box, Card } from '@material-ui/core';
import Button from '../layout/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  block: {
    backgroundColor: theme.palette.theme_3.main,
    color: theme.palette.theme_3.contrastText,
  },
  button: {
    backgroundColor: theme.palette.theme_3.main,
    textAlign: 'center',
  },
}));

const StickyCard = ({ children }) => {
  const classes = useStyles();
  const record = useRecordContext();
  return (
    <StickyBox offsetTop={168} className={classes.root}>
      <Card>
        <Box pl={2} pr={2}>
          <TextField record={record} source="pair:label" variant="h2" />
          {/*<Typography variant="h2">*/}
          {/*  Crémaillière dantesque*/}
          {/*</Typography>*/}
        </Box>
        <Box className={classes.block} p={2}>
          {children}
        </Box>
        <Box className={classes.button} pb={3} pr={2} pl={2}>
          <Button variant="contained" color="tertiary" typographyVariant="button1" text="Je candidate" />
        </Box>
      </Card>
    </StickyBox>
  );
};

export default StickyCard;
