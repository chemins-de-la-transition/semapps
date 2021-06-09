import React from 'react';
import { /*useMediaQuery, */makeStyles } from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const useStyles = makeStyles((theme) => ({
  backgound: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: '800px',
  },
  goals: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Goals = ({ theme }) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox className={classes.backgound}>
      <Largecontainer className={classes.goals}>
        Objectifs
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default Goals;
