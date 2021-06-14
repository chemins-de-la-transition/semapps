import * as React from "react";
import Events from '../../layout/Events.js';
import Welcome from './Welcome';
import PlacesList from './PlacesList';
import Goals from './Goals';
import SessionsList from './SessionsList';
import SessionsTypes from './SessionsTypes';

const HomePage = () => (
  <>
    <Welcome />
    <PlacesList />
    <Goals />
    <SessionsList />
    <SessionsTypes />
    <Events />
  </>
);

export default HomePage;
