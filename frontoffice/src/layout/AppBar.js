import React from 'react';
import { Container, Box, Grid, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    padding: 10,
    height: 65,
    [theme.breakpoints.down('sm')]: {
      height: 50
    }
  },
  logo: {
    width: 48,
    height: 48,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
    }
  },
  logoText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.common.white,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    }
  },
  openButton: {
    padding: 5,
    float: 'right'
  },
  menuLink: {
    textDecoration: 'none'
  },
  menuText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.common.white
  }
}));

const AppBar = ({ userMenu, logout, menuItems, setSidebarOpen }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="lg" className={classes.header}>
        <Grid container>
          <Grid item sm={4} xs={10} >
            <Link to="/" className={classes.menuLink}>
              <img src={process.env.PUBLIC_URL + '/colibris-blanc.png'} alt="Colibris" className={classes.logo} />
              <span className={classes.logoText}>Colibris Pays Creillois</span>
            </Link>
          </Grid>
          <Grid item sm={8} xs={2} align="right">
            {xs ? (
              <IconButton
                color="inherit"
                onClick={() => setSidebarOpen(true)}
                className={classes.openButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
            <Grid container>
              {Object.keys(menuItems).map(link => (
                <Grid item sm={2} key={link}>
                  <Box display="flex" height={48} alignItems="center" justifyContent="center">
                    <Link to={link} className={classes.menuLink}>
                      <Typography className={classes.menuText}>
                        {menuItems[link].split('\n').map((item, key) => (
                          <React.Fragment key={key}>
                            {item}
                            <br />
                          </React.Fragment>
                        ))}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
