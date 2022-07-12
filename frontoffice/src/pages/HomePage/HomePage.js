import React from 'react';
import Welcome from './Welcome/Welcome';
import FeaturedList from '../../commons/lists/FeaturedList/FeaturedList';
import PlaceSubHeader from '../../resources/Place/PlaceSubHeader';
import CoursesTypes from './CoursesTypes';
import CourseSubHeader from "../../resources/Agent/Activity/Course/CourseSubHeader";
import PathSubHeader from '../../resources/Idea/Path/PathSubHeader';
import Partners from './Partners';
import PictoLieu from '../../icons/PictoLieu.png' ;
import PictoParcours from '../../icons/PictoParcours.png' ;
import PictoAgenda from '../../icons/PictoAgenda.png' ;
import Traveler from './Traveler/Traveler';

const HomePage = () => (
  <>
    <Welcome />
    <FeaturedList
      resource="Path"
      basePath="/Path"
      title="Les chemins"
      subtitle="A découvrir"
      logo={PictoParcours}
      linkText="Voir tous les chemins"
      CardSubHeaderComponent={PathSubHeader}
    />
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
    <Traveler />
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
