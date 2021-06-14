import * as React from "react";
import { /*useMediaQuery, */makeStyles } from '@material-ui/core';
import LargeContainer from './LargeContainer';
import FullWidthBox from './FullWidthBox';

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
  <FullWidthBox className={classes.backgound}>
    <LargeContainer>
        Evènements
    </LargeContainer>
  </FullWidthBox>
  );
};

export default Event;