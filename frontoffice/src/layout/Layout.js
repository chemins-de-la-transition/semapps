import React, { useState } from 'react';
import { Notification, useTranslate } from 'react-admin';
import { Box, /* useMediaQuery, */ ThemeProvider } from '@material-ui/core';
import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TopBar from './TopBar';

const Layout = ({ logout, theme, children, title }) => {
  const translate = useTranslate();
  const menuItems = [
    { link: '/', name: translate('app.nav.home') },
    { link: '/Path', name: translate('app.nav.path') },
    { link: '/Place', name: translate('app.nav.place') },
    { link: '/Event', name: translate('app.nav.event') },
    { link: '/Page/https%3A%2F%2Fdata.ecommunity.gen-europe.org%2Fpages%2Fecommunity-library/show', name: translate('app.nav.library') },
    { link: '/Page/https%3A%2F%2Fdata.ecommunity.gen-europe.org%2Fpages%2Fecommunity-research-platform-charter/show', name: translate('app.nav.codeOfConduct') },
    
    { link: '/OfferAndNeed', name: translate('app.nav.offerAndNeed') },
    //{ link: '/Course', name: translate('app.nav.course') },
  ];
  // const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* AnMa: removed temporarily for ecommunity. Needs to be removable via configuration in the future
      <TopBar />
      */}
      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} />
      <Box>{children}</Box>
      <Footer />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
