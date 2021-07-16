import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MyPlacesPage from './pages/MyPlacesPage';
import MyEventsPage from './pages/MyEventsPage';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/MyPlaces" component={MyPlacesPage} />,
  <Route exact path="/MyEvents" component={MyEventsPage} />,
];
