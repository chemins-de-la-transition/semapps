import React from 'react';
import { makeStyles, Typography} from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import Illustration from './Illustration/Illustration';
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
    paddingBottom: 200,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0
    },
  },
  title: {
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
    },
  },
  subTitle: {
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
    },
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

const Categories = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Typography variant="h1" className={classes.title}>
        {translate('app.message.categories.title')}
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
        {translate('app.message.categories.subTitle')}
        </Typography>
        <Illustration/>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Categories;
