import React from 'react';

const PathTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default PathTitle;
