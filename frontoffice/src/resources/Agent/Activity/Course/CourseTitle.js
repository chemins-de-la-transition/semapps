import React from 'react';

const CourseTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default CourseTitle;
