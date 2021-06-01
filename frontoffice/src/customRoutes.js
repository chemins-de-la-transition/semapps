import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Aide from './pages/Aide';
import DevenirActeurDeLaTransition from './pages/DevenirActeurDeLaTransition';
import CdlTLoginPage from './pages/Login';

export default [
  <Route exact path="/" component={ HomePage }/>,
  <Route exact path="/Aide" component={ Aide }/>,
  <Route exact path="/DevenirActeurDeLaTransition" component={ DevenirActeurDeLaTransition }/>,
  <Route exact path="/Login" component={ CdlTLoginPage }/>,
];