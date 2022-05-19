import React from 'react';
import { Box } from '@material-ui/core';

const PersonTitle = ({ record }) => {
  return (
    <Box pr={1}>
      <span>{record?.['pair:label']}</span>
    </Box>
  );
};

export default PersonTitle;
