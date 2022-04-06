import React from 'react';
import NextEvents from '../../commons/lists/EventsList/NextEvents.js';
import Welcome from './Welcome/Welcome';
import FeaturedList from '../../commons/lists/FeaturedList/FeaturedList';
import PlaceSubHeader from '../../resources/Place/PlaceSubHeader';
import Goals from './Goals/Goals';
import CoursesTypes from './CoursesTypes';
import CourseSubHeader from "../../resources/Activity/Course/CourseSubHeader";
import Partners from './Partners';

const HomePage = () => (
  <>
    <Welcome />
    <FeaturedList
      resource="Place"
      basePath="/Place"
      title="Les lieux"
      subtitle="A visiter"
      headComment="Partez à la découverte de lieux inspirants et allez à la rencontre de personnes qui ont choisi d’être actrices de la transition."
      linkText="Voir tous les lieux"
      CardSubHeaderComponent={PlaceSubHeader}
    />
    <Goals />
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Les parcours"
      subtitle="Thématiques & géographiques"
      headComment="Tu rêves de partir sur les routes pour découvrir des savoir-faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
      linkText="Voir tous les parcours"
      CardSubHeaderComponent={CourseSubHeader}
    />
    <CoursesTypes />
    <NextEvents />
    <Partners />
  </>
);

export default HomePage;
