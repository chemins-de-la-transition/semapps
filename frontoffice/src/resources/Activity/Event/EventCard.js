import React from 'react';
import { DateField, TextField, FunctionField } from 'react-admin';
import Chip from '../../../commons/Chip';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles, Typography } from '@material-ui/core';
import ThemeIcon from '../../../svg/ThemeIcon';
import TypeIcon from '../../../svg/TypeIcon';
import CalendarIcon from '../../../svg/CalendarIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import CheckIcon from '../../../svg/CheckIcon' ;

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
  },
}));

const EventCard = ({ record, variant }) => {
  const classes = useStyles();

  return (
    <>
      <TextField variant="h2" record={record} component="div" source="pair:label" className={classes.title} />
      <div style={{display:"flex"}}>
        <Chip icon={<CalendarIcon />}>
          <DateField
            record={record}
            source="pair:startDate"
            options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
            showTime
          />
        </Chip>
        {record['pair:hostedIn'] ? (
          <Chip icon={<PlaceIcon />}>
            <ReferenceField record={record} source="pair:hostedIn" reference="Region" link={false}>
              <FunctionField label="Localisation" render={record => `${record['pair:hasPostalAddress']?.['pair:addressLocality']} (${record['pair:hasPostalAddress']?.['pair:addressZipCode']?.slice(0,2)}) - ${record['pair:label']}`} />
            </ReferenceField>
          </Chip>
        ) :
        (record['pair:hasLocation'] && (
          <Chip icon={<PlaceIcon />}>
            <ReferenceField source="pair:hasLocation" reference="Region" record={record} link={false}>
              <TextField source="pair:label" variant="body1" />
            </ReferenceField>
          </Chip>
        ))
        }
      </div>
      <div style={{display:'flex'}}>
      {record['pair:hasType'] && (
        <Chip icon={<TypeIcon />}>
          <ReferenceArrayField record={record} reference="Type" source="pair:hasType">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['cdlt:full'] && (
        <Chip icon={<CheckIcon />}>
          <Typography>Événement complet</Typography>
        </Chip>
      )}
      </div>
      {record['pair:hasSector'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Theme" perPage={2} source="pair:hasSector">
            <SeparatedListField link={false} separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' && (
        <div className={classes.description}>
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment" />
        </div>
      )}
    </>
  );
};

EventCard.defaultProps = {
  variant: 'full',
};

export default EventCard;
