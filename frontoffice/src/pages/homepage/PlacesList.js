import React from 'react';
import { /*useMediaQuery,*/ makeStyles, Typography} from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const useStyles = makeStyles((theme) =>({
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const PlacesList = ({ theme}) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox className={classes.background}>
      <Largecontainer>
        <Typography variant="h2" style={{marginTop: '60px'}}>
          Les lieux
        </Typography>
        <Typography variant="h3" component="div">
          A visiter
        </Typography>
        <Typography variant="body2" component="div">
          Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition. 
        </Typography>
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default PlacesList;
