import React from 'react';
import { useTranslate } from "react-admin";
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
// import SearchContent from './SearchContent';
import { Link } from 'react-router-dom';
import Button from '../../../commons/Button';

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
    width: '90%',
    zIndex: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%,rgba(0, 0, 0, 0) 100%),url('" +
      process.env.PUBLIC_URL +
      "/pexels-zen-chung-5529604_1280.jpg')",
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 539,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
      height: '400px',
      width: '100%',
      backgroundPosition: 'center',
    },
  },
  button: {
    margin: '30px',
  },
}));

const WelcomeContent = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <FullWidthBox className={classes.root}>
      <LargeContainer className={classes.container}>
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center">
          <Typography variant="h1" className={classes.text}>
            {translate("app.page.home")}
          </Typography>
          <div className={classes.textBar} />
          <Typography variant="body1" className={classes.subtitleText} component="div">
            {translate("app.message.welcome")}
          </Typography>
        </Box>
      </LargeContainer>
      
        <Box display="flex" justifyContent="center" justifySelf="center" >
          <Button to={{ pathname: "/About" }} variant="contained" color="secondary" component={Link} typographyVariant="button1" className={classes.button}>
          Read more about Ecommunity
          </Button>
          
          <Button to={{ pathname: "https://forum.gen-europe.org/c/research-investigation/15" }} target="_blank" variant="contained" color="secondary" component={Link} typographyVariant="button1" className={classes.button}>
          Visit our Forum
          </Button>
        </Box>
      
    {/*
          <SearchContent />
*/}
    </FullWidthBox>
  );
};

export default WelcomeContent;
