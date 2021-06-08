import * as React from "react";
import { Container } from '@material-ui/core';
import Events from '../layout/Events.js';
import Welcome from './homepage/Welcome';
import PlacesList from './homepage/PlacesList';
import Goals from './homepage/Goals';
import ParcoursList from './homepage/ParcoursList';
import ParcoursTypes from './homepage/ParcoursTypes';

const HomePage = () => (
  <>
    <Welcome />
    <PlacesList />
    <Goals />
    <ParcoursList />
    <ParcoursTypes />
    <Events />
  </>
);

export default HomePage;
