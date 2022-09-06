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

const HomePage = () => (
  <>
    <Welcome />
    <FeaturedList
      resource="Place"
      basePath="/Place"
      title="Les lieux"
      subtitle="A visiter"
      comment="Découvrez des lieux impliqués dans les transitions, les activités qui s’y pratiquent, partez à la rencontre des acteurs et actrices qui font le monde de demain !"
      logo={PictoLieu}
      linkText="Voir tous les lieux"
      CardSubHeaderComponent={PlaceSubHeader}
    />
    <FeaturedList
      resource="Event"
      basePath="/Event"
      title="L'agenda"
      subtitle="Des événements"
      comment="Découvrez les événements autour de la transmission de savoirs, ouvrez votre champ des possibles, apprenez, formez-vous aux enjeux et métiers de la transition !"
      logo={PictoAgenda}
      linkText="Voir tous les événements"
      CardSubHeaderComponent={CourseSubHeader}
      isAgenda={true}
    />
    <CoursesTypes />
    <FeaturedList
      resource="Path"
      basePath="/Path"
      title="Les chemins"
      subtitle="A découvrir"
      comment="Quelques inspirations que nous vous proposons, découvrez une thématique précise, constituez-vous votre programme à la carte !"
      logo={PictoParcours}
      linkText="Voir tous les chemins"
      CardSubHeaderComponent={PathSubHeader}
    />
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Nos voyages"
      subtitle="Thématiques & géographiques"
      comment="Découvrez des voyages préconçus, à la rencontre de plusieurs initiatives de transition, sur une thématique et/ou un secteur géographique donné !"
      logo={PictoParcours}
      linkText="Voir tous les voyages"
      CardSubHeaderComponent={CourseSubHeader}
    />
    <Partners />
  </>
);

export default HomePage;
