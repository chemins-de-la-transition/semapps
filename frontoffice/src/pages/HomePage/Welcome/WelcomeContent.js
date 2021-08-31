import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import SearchContent from './SearchContent';

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
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%,rgba(0, 0, 0, 0) 100%),url('" +
      process.env.PUBLIC_URL +
      "/pexels-zen-chung-5529604_1280.jpg')",
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    height: 539,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
      height: '400px',
    },
  },
}));

const WelcomeContent = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.root}>
      <LargeContainer className={classes.container}>
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center">
          <Typography variant="h1" className={classes.text}>
            Apprendre en voyageant
          </Typography>
          <div className={classes.textBar} />
          <Typography variant="body1" className={classes.subtitleText} component="div">
            Pour les curieux qui souhaitent découvrir une région et apprendre en voyageant, nous vous proposons des
            itinéraires éco-touristiques autour des métiers de la transition, conçus pour être parcourus à pied ou à
            vélo. Partez à la rencontre des acteurs de lieux inspirationnels et découvrez leurs savoirs-faire.
          </Typography>
        </Box>
      </LargeContainer>
      <SearchContent />
    </FullWidthBox>
  );
};

export default WelcomeContent;
