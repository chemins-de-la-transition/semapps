import React from 'react';
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import Type1Icon from '../../icons/Type1Icon.png';
import Type2Icon from '../../icons/Type2Icon.png';
import Type3Icon from '../../icons/Type3Icon.png';
import Type4Icon from '../../icons/Type4Icon.png';
import { useTranslate } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    position: 'relative',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: 40,
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
  itemTitle: {
    marginBottom: 8
  },
  iconContainer: {
    position: 'relative',
    width: 150,
    height: 150,
    '& img': {
      width: '100%',
      height: 'auto'
    },
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '& [fill]': {
        fill: theme.palette.secondary.contrastText,
      },
      fontSize: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100
    },
  },
}));

const LocalGridItem = ({ title, text, image, icon }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={3}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Box className={classes.iconContainer}>
          <img src={image} alt="" aria-label="icône" />
          {icon}
        </Box>
        <Typography variant="h5" className={classes.itemTitle}>
          {title}
        </Typography>
        <Typography variant="body2" component="div" align="center">
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

const CoursesTypes = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Typography variant="h1" className={classes.title}>
        {translate('app.message.coursesTypes.title')}
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
        {translate('app.message.coursesTypes.subTitle')}
        </Typography>
        <Grid container spacing={3}>
          <LocalGridItem
            title={translate('app.message.coursesTypes.discovery')}
            text={translate('app.message.coursesTypes.discoverySubtextAbout')}
            icon={<img src={Type1Icon} alt="découverte" />}
          />
          <LocalGridItem
            title={translate('app.message.coursesTypes.learning')}
            text={translate('app.message.coursesTypes.learningSubtextAbout')}
            icon={<img src={Type2Icon} alt="apprentissage" />}
          />
          <LocalGridItem
            title={translate('app.message.coursesTypes.immersion')}
            text={translate('app.message.coursesTypes.immersionSubtextAbout')}
            icon={<img src={Type3Icon} alt="immersion" />}
          />
          <LocalGridItem
            title={translate('app.message.coursesTypes.mentoring')}
            text={translate('app.message.coursesTypes.mentoringSubtextAbout')}
            icon={<img src={Type4Icon} alt="compagnonnage" />}
          />
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default CoursesTypes;
