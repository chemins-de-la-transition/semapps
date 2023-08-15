import React from 'react';

const AlertTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default AlertTitle;
