import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles, Typography } from '@material-ui/core';
import Chip from '../../commons/Chip';
import PlaceIcon from '../../svg/PlaceIcon';
import ThemeIcon from '../../svg/ThemeIcon';
import { linkToFilteredList } from "../../utils";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
  },
  address: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.palette.secondary.main
  }
}));

const PlaceCard = ({ record, variant }) => {
  const classes = useStyles();
  const city = record?.['pair:hasPostalAddress']?.['pair:addressLocality'] ;
  const zipCode = record?.['pair:hasPostalAddress']?.['pair:addressZipCode']?.slice(0, 2) ;

  console.log(city)

  return (
    <>
      <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title} />
      {record['pair:hasPostalAddress'] && (city!==undefined) && (zipCode!==undefined) ? (
      <Chip icon={<PlaceIcon />}>
        <Typography variant="body1" className={classes.address}>
          {city+' ('+zipCode+')'}
        </Typography>
      </Chip>
      ) :
      (record['cdlt:hasRegion'] && (
        <Chip icon={<PlaceIcon />}>
          <ReferenceField record={record} source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      ))}
      {record['pair:hasSector'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Sector" perPage={2} source="pair:hasSector">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} perPage={2} reference="Theme" source="pair:hasTopic">
            <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasTopic')} separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' && (
        <Typography variant="body2" color="secondary" className={classes.description}>
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment" variant="body2" color="secondary" />
        </Typography>
      )}
    </>
  );
};

PlaceCard.defaultProps = {
  variant: 'full',
};

export default PlaceCard;
