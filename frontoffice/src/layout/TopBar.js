import React from 'react';
import { Button } from 'react-admin';
import { Container, Box, useMediaQuery, makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  topBar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    position: 'relative',
  },
  topBarText: {
    // TODO import font
    fontFamily: '"Integral CF",'+theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: '12px',
    height: 12,
    left: 40, // TODO use GRID
    top: 'calc(50% - 12px/2)',
    position: 'absolute',
    
    /* identical to box height */
    textTransform: 'uppercase',
  },
  topBarHelpIcon: {
    // TODO import font
    /* FabricMDL / 16 */
    fontFamily: '"Fabric MDL2 Assets",'+theme.typography.fontFamily,
    fontSize: 16,
    lineHeight: '100%',
    
    /* identical to box height, or 16px */
    textAlign: 'center',
  },
}));

const TopBar = ({ theme }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  if (xs){
    return null;
  } else {
    return (
      <Box width={1} className={classes.topBar}>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.topBarText}>Le lieu pour voyager en apprenant</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button>
                <Typography className={classes.topBarHelpIcon}>?</Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
};

export default TopBar;
