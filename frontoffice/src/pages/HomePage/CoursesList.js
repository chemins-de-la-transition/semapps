import React from 'react';
import FeaturedList from './FeaturedList/FeaturedList';
import CourseSubHeader from './FeaturedList/CourseSubHeader';

const CoursesList = () => {
  return (
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Nes parcours"
      subtitle="Thématiques & géographiques"
      headComment="Tu rêves de partir sur les routes pour découvrir des savoirs faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
      linkText="Voir tous les parcours"
      CardSubHeaderComponent={CourseSubHeader} 
    >
    </FeaturedList>
  );
};

export default CoursesList;