import * as React from 'react';
import Events from '../../commons/lists/EventsList/EventsList.js';
import Welcome from './Welcome/Welcome';
import PlacesList from './PlacesList';
import Goals from './Goals/Goals';
import CoursesList from './CoursesList';
import CoursesTypes from './CoursesTypes';

const HomePage = () => (
  <>
    <Welcome />
    <PlacesList />
    <Goals />
    <CoursesList />
    <CoursesTypes />
    <Events />
  </>
);

export default HomePage;
