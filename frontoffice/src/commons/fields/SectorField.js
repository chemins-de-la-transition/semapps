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
    margin: 8,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    '& img': {
      margin: 0,
      marginBottom: -12,
      width: '100%'
    },
    '& span': {
      minHeight:32,
      fontFamily: theme.typography.h6.fontFamily,
      textAlign: 'center'
    } 
  }
}));

const SectorField = ({addLabel}) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <ImageField source="pair:depictedBy" title="pair:label" />
      { addLabel && 
        <TextField source="pair:label" color="secondary" />
      }
    </Box>
  );
};

SectorField.defaultProps = {
  addLabel: true,
};

export default SectorField;
