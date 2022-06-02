import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PlaceIcon from '../../svg/PlaceIcon';
import Chip from "../../commons/Chip";

const useStyles = makeStyles((theme) => ({
  place: {
    fontSize: 12,
    fontWeight: 'bold',
  },
}));

const PlaceSubHeader = ({ record }) => {
  const classes = useStyles();
  const city = record?.['pair:hasPostalAddress']?.['pair:addressLocality'] ;
  const zipCode = record?.['pair:hasPostalAddress']?.['pair:addressZipCode']?.slice(0, 2) ;

  return (
  <>
  {record['pair:hasPostalAddress'] && city && zipCode && (
    <Chip icon={<PlaceIcon />}>
      <Typography variant="body2" component="div" className={classes.place}>
        {city+' ('+zipCode+')'}
      </Typography>
    </Chip>
  )}
  </>
  );
};

export default PlaceSubHeader;
