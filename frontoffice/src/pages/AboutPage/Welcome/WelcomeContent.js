import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: theme.palette.white.main,
    textAlign: 'center',
    fontSize: 48,
  },
  subtitleText: {
    color: theme.palette.white.main,
    textAlign: 'center',
    maxWidth: 898,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  textBar: {
    width: '51px',
    height: '2px',
    backgroundColor: theme.palette.white.main,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
    },
  },
  container: {
    zIndex: 0,
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    height: 680,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
    },
  },
}));

const WelcomeContent = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.root}>
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center" className={classes.container}>
          <Typography variant="h1" className={classes.text}>
            Voyager, Découvrir, Apprendre,
          </Typography>
          <Typography variant="h1" className={classes.text}>
            Partager, Essaimer...
          </Typography>
          <div className={classes.textBar} />
          <Typography variant="body1" className={classes.subtitleText} component="div">
            Voyager c'est avant tout faire une pause dans nos vies, une parenthèse qui nous permet de voir ce qu'il se 
            passe ailleurs, de partir à l'aventure pour découvrir de nouvelles pratiques. Les Chemins de la Transition 
            propose de voyager de lieux en lieux en sortant des sentiers battus pour aller à la rencontre des acteurs 
            de la transition (énergétique, sociale, solidaire...). Et&nbsp;pourquoi pas à votre tour, partager vos connaissances.
          </Typography>
        </Box>
    </FullWidthBox>
  );
};

export default WelcomeContent;
