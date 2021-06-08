import React from 'react';
import { useMediaQuery, makeStyles} from '@material-ui/core';
import Box from '../../layout/Box';
import Container from '../../layout/Container';

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
    <Box>
      <Container maxWidth="lg" {...other}>
        Liste des parcours
      </Container>
    </Box>
  );
};

export default ParcoursList;
