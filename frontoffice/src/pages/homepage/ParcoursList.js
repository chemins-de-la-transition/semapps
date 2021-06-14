import React from 'react';
// import { useMediaQuery, makeStyles} from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
import Largecontainer from '../../layout/Largecontainer';

// const useStyles = makeStyles((theme) =>({
//   background1: {
//     backgroundColor: theme.palette.secondary.contrastText,
//     color: theme.palette.secondary.main,
//   }
// }));

const ParcoursList = () => {
  // const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox>
      <Largecontainer>
        Liste des parcours
      </Largecontainer>
    </FullWidthBox>
  );
};

export default ParcoursList;
