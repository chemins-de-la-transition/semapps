import React from 'react';
import { useMediaQuery, makeStyles} from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const useStyles = makeStyles((theme) =>({
  background1: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const PlacesList = ({ theme}) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox>
      <Largecontainer>
        Liste des lieux
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default PlacesList;
