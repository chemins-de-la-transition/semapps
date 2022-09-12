import React from 'react';

const JobOpportunitiesTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default JobOpportunitiesTitle;
