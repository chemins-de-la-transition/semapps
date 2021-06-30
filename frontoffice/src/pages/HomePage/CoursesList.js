import React from 'react';
import FeaturedList from './FeaturedList/FeaturedList';

const CoursesList = () => {
  return (
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Nes parcours"
      subtitle="Thématiques & géographiques"
      headComment="Tu rêves de partir sur les routes pour découvrir des savoirs faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
      linkText="Voir tous les parcours"
    >
    </FeaturedList>
  );
};

export default CoursesList;