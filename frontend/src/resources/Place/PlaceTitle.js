import React from 'react';

const PlaceTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default PlaceTitle;
