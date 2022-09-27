import React from 'react';

const TopicTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default TopicTitle;
