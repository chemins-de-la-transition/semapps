import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const FullWidthBox = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Box width={1} classes={{ root: classes.box }} {...rest}>
      {children}
    </Box>
  );
};

export default FullWidthBox;
