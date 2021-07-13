import React from 'react';
import LargeContainer from '../commons/LargeContainer';
import FullWidthBox from '../commons/FullWidthBox';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    '& .MuiTypography-root': {
      marginBottom: '20px',
      lineHeight: '20px',
    },
  },
  whiteBackground: {
    backgroundColor: theme.palette.white.main,
  },
}));

const Legals = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.whiteBackground}>
      <LargeContainer className={classes.text}>
        <Typography variant="h2">Mentions légales</Typography>
        <Typography variant="h3">Propriétaire</Typography>
        <Typography variant="body1" component="div">
          Dénomination : association les Chemins de la Transition
          <br />
          Adresse : 9 rue de la Marquise de Sévigné, 31200 Toulouse
          <br />
          Courriel : <a href="mailto:bonjour@lescheminsdelatransition.org">bonjour@lescheminsdelatransition.org</a>
          <br />
          SIRET : 851 073 221 00018
          <br />
          Identification RNA : W313031847
          <br />
          Responsable de la publication : Guillaume Rouyer, Président de l'association
          <br />
        </Typography>
        <Typography variant="h3">Droits d’auteurs</Typography>
        <Typography variant="body1" component="div">
          <i>En cours de définition</i>
        </Typography>
        <Typography variant="h3">Hébergeur du site</Typography>
        <Typography variant="body1" component="div">
          <i>En cours de rédaction</i>
          <br />
          Le site est hébergé par ....
          <br />
          Le nom de domaine du site <b>lescheminsdelatransition.org</b> est la propriété de l'association les Chemins de
          la Transition.
          <br />
          Contact technique : ...
        </Typography>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Legals;
