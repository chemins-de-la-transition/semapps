import React from 'react';
import { ImageField, TextField } from 'react-admin';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'flex-end',
    width: 150,
    color: theme.palette.secondary.main,
    margin: '8px 0',
    '& img': {
      marginBottom: -12,
      width: '100%'
    },
    '& .MuiTypography-root': {
      fontFamily: theme.typography.h6.fontFamily,
    } 
  }
}));

const SectorField = ({addLabel}) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <ImageField source="pair:depictedBy" title="pair:label" />
      { addLabel && 
        <TextField source="pair:label" />
      }
    </Box>
  );
};

SectorField.defaultProps = {
  addLabel: true,
};

export default SectorField;
