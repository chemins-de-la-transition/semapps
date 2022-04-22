import React from 'react';
import { makeStyles, Typography} from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import Illustration from './Illustration/Illustration';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
      height: 1000
    },
    [theme.breakpoints.down('xs')]: {
      height: 1300
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: 100,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 400
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
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Des thématiques
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          variées à explorer
        </Typography>
        <Illustration/>
        
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Categories;
