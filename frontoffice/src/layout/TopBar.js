import React from 'react';
import { Box, useMediaQuery, makeStyles, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Fullwidthbox from './Fullwidthbox';
import Largecontainer from './Largecontainer';

const TopBarHeight = 48;
const useStyles = makeStyles((theme) =>({
  topBar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    position: 'relative',
  },
  topBarIncluded: {
    height: TopBarHeight,
  },
  topBarHelpIcon: {
    // TODO import font
    /* FabricMDL / 16 */
    fontFamily: '"Fabric MDL2 Assets",'+theme.typography.fontFamily,
    fontSize: 16,
    lineHeight: '100%',
    width: TopBarHeight,
    height: TopBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const TopBar = ({ theme }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  if (xs){
    return null;
  } else {
    return (
      <Fullwidthbox className={classes.topBar}>
        <Largecontainer >
          <Box display="flex" width={1} height={1} alignItems="center" className={classes.topBarIncluded}>
            <Typography variant="subtitle2">Le lieu pour voyager en apprenant</Typography>
            <Box flexGrow={1}></Box>
            <Link to='/Aide' className={classes.topBarHelpIcon} color="inherit" component={Button} aria-label="Aide">
              ?
            </Link>
            <Link
                to='/DevenirActeurDeLaTransition' 
                variant="outlined" 
                color="secondary" 
                className={classes.MuiButtonSecondary} 
                component={Button}
              > 
              <Typography variant="subtitle2">Devenir acteur de la Transition</Typography>
            </Link>
          </Box>
        </Largecontainer>
      </Fullwidthbox>
    );
  }
};

export default TopBar;
