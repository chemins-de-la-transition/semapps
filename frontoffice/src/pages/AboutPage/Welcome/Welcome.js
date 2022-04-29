import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import WelcomeContent from './WelcomeContent';
import TopRight1Shape from './BackgroundShapes/TopRight1Shape';
import TopRight2Shape from './BackgroundShapes/TopRight2Shape';
import TopLeft1Shape from './BackgroundShapes/TopLeft1Shape';
import TopLeft2Shape from './BackgroundShapes/TopLeft2Shape';
import Bottom1Shape from './BackgroundShapes/Bottom1Shape';
import Bottom2Shape from './BackgroundShapes/Bottom2Shape';
import SnakeShape1 from './BackgroundShapes/SnakeShape1';
import SnakeShape2 from './BackgroundShapes/SnakeShape2';
import SnakeShape3 from './BackgroundShapes/SnakeShape3';
import LeftShape from './BackgroundShapes/LeftShape';
import TopLine1 from './BackgroundShapes/TopLine1';
import TopLine2 from './BackgroundShapes/TopLine2';


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
    backgroundColor: theme.palette.secondary.main,
  },
  rightTop1: {
    top: 0,
    right: 0,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.theme_5.main,
    },
    [theme.breakpoints.down('xs')]: {
      width:0,
    },
  },
  rightTop2: {
    top: 0,
    right: 0,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.theme_8.main,
    },
    [theme.breakpoints.down('xs')]: {
      width:0,
    },
  },
  leftTop1: {
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.theme_2.main,
    },
  },
  leftTop2: {
    left: 200,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.primary.main,
    },
  },
  leftShape: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[stroke]': {
      stroke: "#9DBCC5",
    },
  },
  snake1Shape: {
    top: 0,
    left: 870,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
  },
  snake2Shape: {
    top: 0,
    left: 880,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
  },
  snake3Shape: {
    top: 0,
    left: 890,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
  },
  bottom1: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.theme_5.main,
    },
  },
  bottom2: {
    bottom: 0,
    left: 1207,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
    '& path[fill]': {
      fill: theme.palette.primary.main,
    },
  },
  topLine1: {
    top: 0,
    left: 430,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
  },
  topLine2: {
    top: 0,
    left: 400,
    position: 'absolute',
    maxWidth: "-webkit-fill-available",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <Box width={1} className={classes.background} position="relative">
        <TopLine1 className={classes.topLine1} />
        <TopLine2 className={classes.topLine2} />
        <TopRight2Shape className={classes.rightTop2} />
        <TopRight1Shape className={classes.rightTop1} />
        <TopLeft1Shape className={classes.leftTop1} />
        <TopLeft2Shape className={classes.leftTop2} />
        <SnakeShape1 className={classes.snake1Shape} />
        <SnakeShape2 className={classes.snake2Shape} />
        <SnakeShape3 className={classes.snake3Shape} />
        <LeftShape className={classes.leftShape} />
        <Bottom1Shape className={classes.bottom1} />
        <Bottom2Shape className={classes.bottom2} />
        <WelcomeContent />
      </Box>
    </>
  );
};

export default Welcome;
