import React from 'react';
import FeaturedList from './FeaturedList/FeaturedList';
import PlaceSubHeader from './FeaturedList/PlaceSubHeader';

const PlacesList = () => {
  return (
    <FeaturedList
      resource="Place"
      basePath="/Place"
      title="Les lieux"
      subtitle="A visiter"
      headComment="Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition."
      linkText="Voir tous les lieux"
      CardSubHeaderComponent={PlaceSubHeader}
    />
  );
};

export default PlacesList;
