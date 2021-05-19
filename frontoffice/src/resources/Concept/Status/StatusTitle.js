import React from 'react';

const StatusTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default StatusTitle;
