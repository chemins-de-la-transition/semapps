import React from 'react';
import {  useMediaQuery, makeStyles} from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const useStyles = makeStyles((theme) =>({
  background1: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const Goals = ({ theme}) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox>
      <Largecontainer>
        Objectifs
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default Goals;
