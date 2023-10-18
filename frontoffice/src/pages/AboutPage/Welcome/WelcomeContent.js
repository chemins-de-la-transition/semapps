import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import { useTranslate } from 'react-admin';

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
      marginLeft: 20,
      marginRight: 20,
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
  const translate = useTranslate();
  return (
    <FullWidthBox className={classes.root}>
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center" className={classes.container}>
          <Typography variant="h1" className={classes.text}>
            {translate('app.message.welcomeContent.title')}
          </Typography>
          <Typography variant="h1" className={classes.text}>
          {translate('app.message.welcomeContent.subTitle')}
          </Typography>
          <div className={classes.textBar} />
          <Typography variant="body1" className={classes.subtitleText} component="div">
          {translate('app.message.welcomeContent.text')}
          </Typography>
        </Box>
    </FullWidthBox>
  );
};

export default WelcomeContent;
