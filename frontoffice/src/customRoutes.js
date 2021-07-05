import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Legals from './pages/Legals';

export default [
  <Route exact path="/" component={HomePage} />,
  <Route exact path="/About" component={About} />,
  <Route exact path="/Contact" component={Contact} />,
  <Route exact path="/Legals" component={Legals} />,
];
