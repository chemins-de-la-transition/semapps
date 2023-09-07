import React from 'react';

const TemplateTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default TemplateTitle;
