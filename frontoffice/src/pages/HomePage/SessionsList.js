import React from 'react';
import FeaturedList from './FeaturedList/FeaturedList';

const SessionsList = () => {
  return (
    <FeaturedList
      resource="Session"
      basePath="/Session"
      title="Nos voyages"
      subtitle="à parcourir"
      headComment="Tu rêves de partir sur les routes pour découvrir des savoirs faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
      linkText="Voir tous les voyages"
    >
    </FeaturedList>
  );
};

export default SessionsList;