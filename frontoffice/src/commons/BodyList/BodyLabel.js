import React from 'react';
import { Typography } from '@material-ui/core';

const BodyLabel = ({ children }) => {
  return (
    <Typography variant="h2">{children}</Typography>
  );
};

export default BodyLabel;
