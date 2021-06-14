import React from 'react';
// import { useMediaQuery, makeStyles} from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';

// const useStyles = makeStyles((theme) =>({
//   background1: {
//     backgroundColor: theme.palette.secondary.contrastText,
//     color: theme.palette.secondary.main,
//   }
// }));

const SessionsList = () => {
  // const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox>
      <LargeContainer>
        Liste des parcours
      </LargeContainer>
    </FullWidthBox>
  );
};

export default SessionsList;
