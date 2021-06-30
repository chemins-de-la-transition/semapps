import * as React from "react";
import Events from '../Events.js';
import Welcome from './Welcome';
import PlacesList from './PlacesList';
import Goals from './Goals/Goals';
import CoursesList from './CoursesList';
import SessionsTypes from './SessionsTypes';

const HomePage = () => (
  <>
    <Welcome />
    <PlacesList />
    <Goals />
    <CoursesList />
    <SessionsTypes />
    <Events />
  </>
);

export default HomePage;
