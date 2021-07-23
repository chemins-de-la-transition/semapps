import React from 'react';
import { useMediaQuery, makeStyles, Box } from '@material-ui/core';
import WelcomeContent from './WelcomeContent';

const welcomeHeight = 680;
const useStyles = makeStyles((theme) => ({
  background: {
    height: welcomeHeight,
    [theme.breakpoints.down('md')]: {
      height: welcomeHeight + 50,
    },
    [theme.breakpoints.down('sm')]: {
      height: welcomeHeight + 170,
    },
  },
  background1: {
    backgroundColor: theme.palette.white.main,
    zIndex: '-1',
    position: 'absolute',
    height: welcomeHeight / 2,
  },
  background2: {
    backgroundColor: theme.palette.primary.main,
    zIndex: '-1',
    position: 'absolute',
    height: welcomeHeight / 2,
    [theme.breakpoints.down('md')]: {
      height: welcomeHeight / 2 + 50,
    },
    [theme.breakpoints.down('sm')]: {
      height: welcomeHeight / 2 + 170,
    },
    [theme.breakpoints.down('xs')]: {
      position: 'initial',
      height: '280px',
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <>
      {xs ? (
        <Box width={1} position="relative">
          <WelcomeContent classesNames={classes} />
          {/* <Box width={1} className={classes.background2} /> */}
        </Box>
      ) : (
        <Box width={1} className={classes.background} position="relative">
          <Box width={1} className={classes.background1} top={0} />
          <Box width={1} className={classes.background2} top={welcomeHeight / 2} />
          <WelcomeContent />
        </Box>
      )}
    </>
  );
};

export default Welcome;
