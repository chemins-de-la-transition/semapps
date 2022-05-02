import React from 'react';

const IntentionTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default IntentionTitle;
