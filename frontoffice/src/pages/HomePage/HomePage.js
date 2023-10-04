import React from 'react';
import Welcome from './Welcome/Welcome';
import FeaturedList from '../../commons/lists/FeaturedList/FeaturedList';
import PlaceSubHeader from '../../resources/Place/PlaceSubHeader';
import CoursesTypes from './CoursesTypes';
import CourseSubHeader from "../../resources/Agent/Activity/Course/CourseSubHeader";
import PathSubHeader from '../../resources/Idea/Path/PathSubHeader';
import Partners from './Partners';
import Traveler from './Traveler/Traveler';
import PictoLieu from '../../icons/PictoLieu.png' ;
import PictoParcours from '../../icons/PictoParcours.png' ;
import PictoAgenda from '../../icons/PictoAgenda.png' ;
import { useTranslate } from 'react-admin';

const HomePage = () => {
  
  const translate = useTranslate();
  return (
  <>
    <Welcome />
    <FeaturedList
      resource="Place"
      basePath="/Place"
      title={translate('app.message.home.places')}
      subtitle={translate('app.message.home.toVisit')}
      comment={translate('app.message.home.discoverPlaces')}
      logo={PictoLieu}
      linkText={translate('app.message.home.seeAllPlaces')}
      CardSubHeaderComponent={PlaceSubHeader}
    />
    <Traveler />
    <FeaturedList
      resource="Event"
      basePath="/Event"
      title={translate('app.message.home.agenda')}
      subtitle={translate('app.message.home.events')}
      comment={translate('app.message.home.discoverEvents')}
      logo={PictoAgenda}
      linkText={translate('app.message.home.seeAllEvents')}
      CardSubHeaderComponent={CourseSubHeader}
      isAgenda={true}
    />
    <CoursesTypes />
    <FeaturedList
      resource="Path"
      basePath="/Path"
      title={translate('app.message.home.paths')}
      subtitle={translate('app.message.home.toDiscover')}
      comment={translate('app.message.home.dicoverPaths')}
      logo={PictoParcours}
      linkText={translate('app.message.home.seeAllPaths')}
      CardSubHeaderComponent={PathSubHeader}
    />
    {/*
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title={translate('app.message.home.courses')}
      subtitle={translate('app.message.home.themesAndLocation')}
      comment={translate('app.message.home.discoverCourses')}
      logo={PictoParcours}
      linkText={translate('app.message.home.seeAllCourses')}
      CardSubHeaderComponent={CourseSubHeader}
    />
    */}
    <Partners />
  </>
  )
};

export default HomePage;
