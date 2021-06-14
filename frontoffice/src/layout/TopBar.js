import React from 'react';
import { Box, useMediaQuery, makeStyles, Typography, Button  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FullWidthBox from './FullWidthBox';
import LargeContainer from './LargeContainer';

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

const TopBar = () => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  if (xs){
    return null;
  } else {
    return (
      <FullWidthBox className={classes.topBar}>
        <LargeContainer >
          <Box display="flex" width={1} height={1} alignItems="center" className={classes.topBarIncluded}>
            <Typography variant="subtitle2">Le lieu pour voyager en apprenant</Typography>
            <Box flexGrow={1}></Box>
            <Button to='/Aide'
              className={classes.topBarHelpIcon}
              color="inherit"
              component={Link}
              aria-label="Aide">
              ?
            </Button>
            <Button
                to='/DevenirActeurDeLaTransition' 
                variant="outlined" 
                color="secondary" 
                component={Link} 
              > 
              <Typography variant="subtitle2">Devenir acteur de la Transition</Typography>
            </Button>
          </Box>
        </LargeContainer>
      </FullWidthBox>
    );
  }
};

export default TopBar;
