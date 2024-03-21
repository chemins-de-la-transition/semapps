import React from 'react';
import { /*useMediaQuery, */ makeStyles, Grid, Typography, Hidden} from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import TwoHandsIcon from '../../../svg/TwoHandsIcon';
import WalkerIcon from '../../../svg/WalkerIcon';
import StarIcon from '../../../svg/StarIcon';
import ListGoalsItem from './ListGoalsItem';
import Top1Shape from './BackgroundShapes/Top1Shape';
import Top2Shape from './BackgroundShapes/Top2Shape';
import Bottom1Shape from './BackgroundShapes/Bottom1Shape';
import Bottom2Shape from './BackgroundShapes/Bottom2Shape';
import LeftShape from './BackgroundShapes/LeftShape';
import SnakeShape from './BackgroundShapes/SnakeShape';
import GoalsImage1 from '../../../icons/GoalsImage1.png';
import { useTranslate } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '70px',
  },
  frontBox: {
    zIndex: '0',
  },
  rightTop1: {
    top: -90,
    right: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_8.main,
    },
  },
  rightTop2: {
    top: 0,
    right: 45,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_5.main,
    },
  },
  leftShape: {
    top: '30%',
    left: '-5px',
    position: 'absolute',
    '& path[stroke]': {
      stroke: theme.palette.theme_5.main,
    },
  },
  snakeShape: {
    top: '30%',
    left: '19%',
    position: 'absolute',
    '& path[stroke]': {
      stroke: theme.palette.primary.main,
    },
  },
  leftBottom1: {
    bottom: -187,
    left: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.primary.main,
    },
  },
  leftBottom2: {
    bottom: -55,
    left: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_2.main,
    },
  },
  firstImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  firstImageContainer: {
    marginTop: '165px',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
      width: '100%'
    },
  },
  secondText: {
    marginTop: '200px',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
    },
  },
  secondImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  secondImageContainer: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      width: '100%'
    },
  },
  thirdText: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
    },
  },
  thirdImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  thirdImageContainer: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      width: '100%',
      order: -1
    }
  },
  fourthText: {
    alignSelf: 'flex-end'
  },
  mb24: {
    marginBottom: '24px',
  },
  mtb40: {
    marginBottom: '40px',
  },
  mt65: {
    marginTop: '65px',
  },
  iconWhite: {
    fontSize: '3rem',
    '& path[fill]': {
      fill: theme.palette.secondary.contrastText,
    },
    '& path[stroke]': {
      stroke: theme.palette.secondary.contrastText,
    },
  },
  ulStyle: {
    paddingLeft: '22px',
    listStyle: 'none',
  },
  noPadding: {
    padding: '0',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  }
}));

const Goals = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <FullWidthBox className={classes.mainBox}>
      {/* shapes in the background */}
      <Top1Shape className={classes.rightTop1} />
      <Top2Shape className={classes.rightTop2} />
      <LeftShape className={classes.leftShape} />
      <SnakeShape className={classes.snakeShape} />
      <Bottom1Shape className={classes.leftBottom1} />
      <Bottom2Shape className={classes.leftBottom2} />
      <LargeContainer className={classes.frontBox}>
        <Grid container spacing={3}>
          <Grid item sm={8} md={4} className={classes.mt65}>
            <Typography variant="h2">{translate('app.message.goals.title')}</Typography>
            <Typography variant="h3" component="div" className={classes.mtb40}>
            {translate('app.message.goals.subTitle')}
            </Typography>
            <Typography variant="body2">
            {translate('app.message.goals.subText')}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4} md={1} className={classes.noPadding} />
          </Hidden>
          <Grid item sm={4} className={classes.firstImageContainer}>
            <img
              src={GoalsImage1}
              className={classes.firstImage}
              alt="illustration objectif 1"
            />
          </Grid>
          <Grid item sm={6} md={3} className={classes.secondText}>
            <TwoHandsIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
            {translate('app.message.goals.goal1')}
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={translate('app.message.goals.text1goal1')} />
              <ListGoalsItem text={translate('app.message.goals.text2goal1')} />
              <ListGoalsItem text={translate('app.message.goals.text3goal1')} />
              {/*<ListGoalsItem text={translate('app.message.goals.text4goal1')} />*/}
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4} className={classes.secondImageContainer}>
            <img
              src={process.env.PUBLIC_URL + '/images/goal2.jpg'}
              className={classes.secondImage}
              alt="objectif 2"
            />
          </Grid>
          <Grid item sm={6} md={4} lg={3} className={classes.thirdText}>
            <WalkerIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
            {translate('app.message.goals.goal2')}
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={translate('app.message.goals.text1goal2')} />
              <ListGoalsItem text={translate('app.message.goals.text2goal2')} />
              <ListGoalsItem text={translate('app.message.goals.text3goal2')} />
              <ListGoalsItem text={translate('app.message.goals.text4goal2')} />
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Hidden xsDown>
            <Grid item sm={1} md={5} className={classes.alignSelfFlexEnd + ' ' + classes.noPadding} />
          </Hidden>
          <Grid item sm={6} md={3} className={classes.fourthText}>
            <StarIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
            {translate('app.message.goals.goal3')}
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={translate('app.message.goals.text1goal3')} />
              <ListGoalsItem text={translate('app.message.goals.text2goal3')} />
              <ListGoalsItem text={translate('app.message.goals.text3goal3')} />
              <ListGoalsItem text={translate('app.message.goals.text4goal3')} />
              <ListGoalsItem text={translate('app.message.goals.text5goal3')} />
            </ul>
          </Grid>
          <Grid item sm={4} className={classes.thirdImageContainer}>
            <img
              src={process.env.PUBLIC_URL + '/images/goal3.jpg'}
              className={classes.thirdImage}
              alt="objectif 3"
            />
          </Grid>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Goals;
