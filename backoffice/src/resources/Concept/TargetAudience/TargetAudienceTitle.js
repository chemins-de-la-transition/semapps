import React from 'react';

const TargetAudienceTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default TargetAudienceTitle;
