import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Department from '../../../commons/Department';
import PlaceIcon from '../../../svg/PlaceIcon';

const useStyles = makeStyles((theme) => ({
  placeSubHeader: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '1rem',
    },
    '& svg [fill]': {
      fill: theme.palette.secondary.main,
    },
  },
  text: {
    fontSize: '12px',
    lineHeight: '12px',
    marginLeft: '8px',
    fontWeight: 'normal',
    color: theme.palette.secondary.main,
  },
}));

const PlaceSubHeader = ({ record }) => {
  const classes = useStyles();
  return record['pair:hasPostalAddress'] ? (
    <Box className={classes.placeSubHeader}>
      <PlaceIcon />
      <Typography variant="body2" className={classes.text}>
        <Department postalCode={record['pair:hasPostalAddress']['pair:addressZipCode']} />
      </Typography>
    </Box>
  ) : null;
};

export default PlaceSubHeader;
