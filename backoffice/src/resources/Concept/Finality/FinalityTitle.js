import React from 'react';

const FinalityTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default FinalityTitle;
