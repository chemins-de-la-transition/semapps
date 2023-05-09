import React from 'react';

const PublicationStatusTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default PublicationStatusTitle;
