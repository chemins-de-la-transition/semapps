import React, { useState } from 'react';
import { Notification, Link } from 'react-admin';
import { Container, Box, useMediaQuery, ThemeProvider, makeStyles, Typography, Grid } from '@material-ui/core';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  topBar: {
    backgroundColor: theme.palette.grey['700'],
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  title: {
    position: 'absolute',
    top: 180,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      top: 70,
      left: 15,
      right: 50,
      fontSize: 22,
      zIndex: 10
    }
  },
  footerLink: {
    color: theme.palette.grey["500"],
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const menuItems = {
  '/': 'Accueil',
  '/QuiSommesNous': 'Qui sommes-nous ?',
  '/Project': 'Frise\ndes actions',
  '/Organization': 'Carte\ndes acteurs',
  '/Event': 'Agenda\npartagé',
  '/Document': 'Médiathèque Ressources'
};

const Layout = ({ logout, theme, children, title }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {!xs && (
        <Box width={1} className={classes.topBar}>
          <Container>
            <Grid container>
              <Grid item xs={6}>
                <Typography>Le lieu pour voyager en apprenant</Typography>
              </Grid>
              <Grid item xs={6}>

              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} />

        {/*<Typography variant="h4" color="primary" className={classes.title} id="react-admin-title" component="h1" />*/}
      <Box mb={{ xs: 0, sm: 2 }}>{children}</Box>
      <Box mb={{ xs: 0, sm: 3 }}>
        <Container maxWidth="lg" disableGutters={xs}>
          <Typography variant="subtitle2" color="textSecondary" align="right">
            <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
            &nbsp;|&nbsp;
            <Link to="/Contact" className={classes.footerLink}>Nous contacter</Link>
          </Typography>
        </Container>
      </Box>
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
