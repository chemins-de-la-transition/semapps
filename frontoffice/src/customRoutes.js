import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MyBookmarks from './pages/MyBookmarks';
import MyPlacesPage from './pages/MyPlacesPage';
import MyEventsPage from './pages/MyEventsPage';
import MyCoursesPage from './pages/MyCoursesPage';
import MyOrganizationsPage from './pages/MyOrganizationsPage';
import MyReservationsPage from './pages/MyReservationsPage';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/About" component={AboutPage} />,
  <Route exact path="/MyBookmarks" component={MyBookmarks} />,
  <Route exact path="/MyPlaces" component={MyPlacesPage} />,
  <Route exact path="/MyEvents" component={MyEventsPage} />,
  <Route exact path="/MyCourses" component={MyCoursesPage} />,
  <Route exact path="/MyOrganizations" component={MyOrganizationsPage} />,
  <Route exact path="/MyReservations" component={MyReservationsPage} />,
];
