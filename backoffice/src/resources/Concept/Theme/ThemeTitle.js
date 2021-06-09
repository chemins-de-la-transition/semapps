import React from 'react';

const ThemeTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default ThemeTitle;
