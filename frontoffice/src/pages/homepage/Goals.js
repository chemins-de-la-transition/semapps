import React from 'react';
import { Container, useMediaQuery, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  background1: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const Goals = ({ theme, ...other }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Container maxWidth="lg" {...other}>
      Objectifs
    </Container>
  );
};

export default Goals;
