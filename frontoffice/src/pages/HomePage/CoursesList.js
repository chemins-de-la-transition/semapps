import React from 'react';
import FeaturedList from './FeaturedList/FeaturedList';
import CourseSubHeader from './FeaturedList/CourseSubHeader';

const CoursesList = () => {
  return (
    <FeaturedList
      resource="Course"
      basePath="/Course"
      title="Mes parcours"
      subtitle="Thématiques & géographiques"
      headComment="Tu rêves de partir sur les routes pour découvrir des savoirs faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
      linkText="Voir tous les parcours"
      CardSubHeaderComponent={CourseSubHeader}
    />
  );
};

export default CoursesList;
