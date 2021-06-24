import React from 'react';
import BaseList from './BaseList';

const PlacesList = () => {
  return (
    <BaseList
      resource="Place"
      basePath="/Place"
      title="Les lieux"
      subtitle="A visiter"
      headComment="Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition."
      linkText="Voir tous les lieux"
    >
    </BaseList>
  );
};

export default PlacesList;