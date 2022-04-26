import React from 'react';
import Welcome from './Welcome/Welcome';
import FeaturedList from '../../commons/lists/FeaturedList/FeaturedList';
import PlaceSubHeader from '../../resources/Place/PlaceSubHeader';
import CoursesTypes from './CoursesTypes';
import CourseSubHeader from "../../resources/Activity/Course/CourseSubHeader";
import Traveler from './Traveler/Traveler';
import Partners from './Partners';
import PictoLieu from '../../icons/PictoLieu.png' ;
import PictoParcours from '../../icons/PictoParcours.png' ;
import PictoAgenda from '../../icons/PictoAgenda.png' ;

const HomePage = () => (
  <>
    <Welcome />
    {/* TODO : Add when we have the page "Chemins" */}
    {/* <FeaturedList
      resource="Place"
      basePath="/Place"
      title="Les chemins"
      subtitle="A découvrir"
      logo={PictoParcours}
      linkText="Voir tous les chemins"
      CardSubHeaderComponent={PlaceSubHeader}
    /> */}
    <FeaturedList
      resource="Place"
      basePath="/Place"
      title="Les lieux"
      subtitle="A visiter"
      logo={PictoLieu}
      linkText="Voir tous les lieux"
      CardSubHeaderComponent={PlaceSubHeader}
    />
    <CoursesTypes />
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Nos voyages"
      subtitle="Thématiques & géographiques"
      logo={PictoParcours}
      linkText="Voir tous les voyages"
      CardSubHeaderComponent={CourseSubHeader}
    />
    {/* TODO : Add when the illustration is ready and responsive */}
    {/* <Traveler /> */}
    <FeaturedList
      resource="Event"
      basePath="/Event"
      title="L'agenda"
      subtitle="Des événements"
      logo={PictoAgenda}
      linkText="Voir tous les événements"
      CardSubHeaderComponent={CourseSubHeader}
      isAgenda={true}
    />
    <Partners />
  </>
);

export default HomePage;
