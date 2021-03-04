import React from 'react';

const SessionTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default SessionTitle;
