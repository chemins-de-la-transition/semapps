import React from 'react';

const PlaceTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default PlaceTitle;
