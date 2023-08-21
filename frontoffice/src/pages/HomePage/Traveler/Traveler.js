import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import Button from '../../../commons/Button';
import { useTranslate } from 'react-admin';
// import Path from './BackgroundImages/Path';
// import PathBottom from './BackgroundImages/PathBottom';
// import FirstMan from './BackgroundImages/FirstMan';
// import Woman from './BackgroundImages/Woman';
// import SecondMan from './BackgroundImages/SecondMan';
// import ThirdMan from './BackgroundImages/ThirdMan';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    position: 'relative',
    height: 649,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: 40,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
    },
  },
  title: {
    marginTop: 40,
  },
  subTitle: {
    marginBottom: 40,
  },
  absolute: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
  },
  path: {
    top: 100,
    zIndex: 1,
  },
  ellipse1: {
    position: 'absolute',
    top:505,
    left:107,
    zIndex: 2,
  },
  ellipse2: {
    position: 'absolute',
    top:522,
    left:698,
    zIndex: 2,
  },
  ellipse3: {
    position: 'absolute',
    top:446,
    left:1221,
    zIndex: 2,
  },
  pathBottom: {
    top: 152,
  },
  firstMan: {
    top: 262,
    left: 125,
    position: 'absolute',
  },
  woman: {
    top: 280,
    left: 560,
    position: 'absolute',
  },
  secondMan: {
    top: 188,
    left: 854,
    position: 'absolute',
  },
  thirdMan: {
    top: 202,
    left: 1130,
    position: 'absolute',
  },
  messageBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    position: 'relative'
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'left',
    paddingBottom: 40,
    paddingTop: 40,
    marginLeft: "12%",
    marginRight: "12%",
    [theme.breakpoints.down('md')]: {
      marginLeft: 40,
      marginRight: 40,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  title2: {
    fontSize: 40,
    lineHeight: 'inherit',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      width: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      width: '100%',
      marginBottom: 20,
    },
  },
  span: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.white.main,
    lineHeight: '2em'
  },
  button: {

  }
}));

// TODO : finish the illustration

const Traveler = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <>
    {/* <FullWidthBox className={classes.box}>
      <LargeContainer className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Le voyageur comme pollinisateur
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          De nouvelles pratiques
        </Typography>
      </LargeContainer>
      <Path className={classes.absolute + ' ' + classes.path} ellipse1={classes.ellipse1} ellipse2={classes.ellipse2} ellipse3={classes.ellipse3} />
      <PathBottom className={classes.absolute + ' ' + classes.pathBottom}/>
      <FirstMan className={classes.firstMan}/>
      <Woman className={classes.woman}/>
      <SecondMan className={classes.secondMan}/>
      <ThirdMan className={classes.thirdMan}/>
    </FullWidthBox> */}
    <FullWidthBox className={classes.messageBox}>
      <LargeContainer className={classes.messageContainer}>
        <Typography variant="h1" className={classes.title2}>
          <span className={classes.span}>{translate('app.message.traveler.joinCommunityText')}</span>
        </Typography>
        <Button to={{ pathname: "https://forum.gen-europe.org" }} target="_blank" variant="contained" color="primary" component={Link} typographyVariant="button1" className={classes.button}>
        {translate('app.message.traveler.joinCommunityButton')}
        </Button>
      </LargeContainer>
    </FullWidthBox>
    </>
  );
};

export default Traveler;
