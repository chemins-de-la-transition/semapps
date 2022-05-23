import React from 'react';

const SectorTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default SectorTitle;
