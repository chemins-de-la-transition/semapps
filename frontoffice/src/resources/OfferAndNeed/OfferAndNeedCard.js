import React from 'react';
import { Link, linkToRecord, TextField } from 'react-admin';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { makeStyles, Typography } from '@material-ui/core';
import Chip from '../../commons/Chip';
import OfferAndNeedIcon from '../../svg/OfferAndNeedIcon';
import TopicIcon from '../../svg/TopicIcon';
import { linkToFilteredList } from "../../utils";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
  },
  visibilityIcon: {
    position: 'absolute',
    top: 16,
    right: 16
  }
}));

const OfferAndNeedCard = ({ record, variant }) => {
  const classes = useStyles();
  const city = record?.['pair:hasPostalAddress']?.['pair:addressLocality'];
  const zipCode = record?.['pair:hasPostalAddress']?.['pair:addressZipCode']?.slice(0, 2) ;

  return (
    <>
      <Link
        to={linkToRecord("/OfferAndNeed", record?.id, 'show')}
      >
        <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title}/>
      </Link>
      {record['pair:hasPostalAddress'] && (city!==undefined) && (zipCode!==undefined) ? (
      <Chip icon={<OfferAndNeedIcon />}>
        <Typography variant="body1" className={classes.address}>
          {city+' ('+zipCode+')'}
        </Typography>
      </Chip>
      ) :
      record['pair:hasPostalAddress'] && (city===undefined) && (zipCode!==undefined) ? (
        <Chip icon={<OfferAndNeedIcon />}>
          <Typography variant="body1" className={classes.address}>
            {record?.['pair:hasPostalAddress']?.['pair:label'].split(',')[0]+' ('+zipCode+')'}
          </Typography>
        </Chip>
      ) :
      (record['cdlt:hasRegion'] && (
        <Chip icon={<OfferAndNeedIcon />}>
          <ReferenceField record={record} source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      ))}
      {record['pair:hasSector'] && (
        <Chip icon={<TopicIcon />}>
          <ReferenceArrayField record={record} reference="Sector" perPage={2} source="pair:hasSector">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<TopicIcon />}>
          <ReferenceArrayField record={record} perPage={2} reference="Topic" source="pair:hasTopic">
            <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasTopic')} separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['cdlt:hasPublicationStatus'] !== process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' && (
        <VisibilityOffIcon className={classes.visibilityIcon} />
      )}
    </>
  );
};

OfferAndNeedCard.defaultProps = {
  variant: 'full',
};

export default OfferAndNeedCard;
