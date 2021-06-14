import * as React from "react";
import Events from '../../layout/Events.js';
import Welcome from './Welcome';
import PlacesList from './PlacesList';
import Goals from './Goals';
import ParcoursList from './ParcoursList';
import ParcoursTypes from './ParcoursTypes';

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
