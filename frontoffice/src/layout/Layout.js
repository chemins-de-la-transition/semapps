import React, { useState } from 'react';
import { Notification, Link, Button } from 'react-admin';
import { Container, Box, useMediaQuery, ThemeProvider, Typography, Grid } from '@material-ui/core';
import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TopBar from './TopBar';

const Layout = ({ logout, theme, children, title }) => {
  const menuItems = {
    '/':{title},
    '/NosParcours': 'Nos Parcours',
    '/Lieux': 'Lieux',
    '/Evenements': 'Evènements',
    '/Ressources': 'Ressources',
  };
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <TopBar />
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} />

        {/*<Typography variant="h4" color="primary" className={classes.title} id="react-admin-title" component="h1" />*/}
      <Box mb={{ xs: 0, sm: 2 }}>{children}</Box>
      <Footer />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
