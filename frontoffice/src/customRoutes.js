import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MyBookmarks from './pages/MyBookmarks';
import MyPlacesPage from './pages/MyPlacesPage';
import MyEventsPage from './pages/MyEventsPage';
import MyOrganizationsPage from './pages/MyOrganizationsPage';
import MyReservationsPage from './pages/MyReservationsPage';
import MyOffersAndNeedsPage from './pages/MyOffersAndNeedsPage';
import MyAlertsPage from './pages/MyAlertsPage';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/About" component={AboutPage} />,
  <Route exact path="/MyBookmarks" component={MyBookmarks} />,
  <Route exact path="/MyPlaces" component={MyPlacesPage} />,
  <Route exact path="/MyEvents" component={MyEventsPage} />,
  <Route exact path="/MyOrganizations" component={MyOrganizationsPage} />,
  <Route exact path="/MyReservations" component={MyReservationsPage} />,
  <Route exact path="/MyOffersAndNeeds" component={MyOffersAndNeedsPage} />,
  <Route exact path="/MyAlerts" component={MyAlertsPage} />,
];
