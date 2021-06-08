import React from 'react';
import { Container, useMediaQuery, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  background1: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const ParcoursList = ({ theme, ...other }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Container maxWidth="lg" {...other}>
      Liste des parcours
    </Container>
  );
};

export default ParcoursList;
