import * as React from "react";
import { /*useMediaQuery, */makeStyles } from '@material-ui/core';
import Largecontainer from './Largecontainer';
import Fullwidthbox from './Fullwidthbox';

const useStyles = makeStyles((theme) => ({
  backgound: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '400px',
  },
}));

const Event = () => {
  const classes = useStyles();
  return (
  <Fullwidthbox className={classes.backgound}>
    <Largecontainer>
        Evènements
    </Largecontainer>
  </Fullwidthbox>
  );
};

export default Event;