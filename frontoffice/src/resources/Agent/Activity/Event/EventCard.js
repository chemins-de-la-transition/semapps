import React, { useCallback } from 'react';
import { DateField, TextField, FunctionField, Link, linkToRecord } from 'react-admin';
import Chip from '../../../../commons/Chip';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles, Typography } from '@material-ui/core';
import TopicIcon from '../../../../svg/TopicIcon';
import TypeIcon from '../../../../svg/TypeIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import CheckIcon from '../../../../svg/CheckIcon' ;
import { linkToFilteredList } from "../../../../utils";

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
  eventDetails: {
    fontSize: 12,
    fontWeight: "bold",
  },
}));

const EventCard = ({ record, variant }) => {
  const classes = useStyles();
  const renderLocation = useCallback(record => {
    if (record['pair:hasPostalAddress']) {
      if (record['pair:hasPostalAddress']['pair:addressLocality']) {
        // Locality
        return `${record['pair:hasPostalAddress']['pair:addressLocality']} (${record['pair:hasPostalAddress']['pair:addressZipCode']?.slice(0,2)}) - ${record['pair:label']}`;
      } else {
        // Department
        return `${record['pair:hasPostalAddress']['pair:label']?.split(',')[0]} (${record['pair:hasPostalAddress']['pair:addressZipCode']}) - ${record['pair:label']}`;
      }
    } else {
      // No location, display label
      return record['pair:label'];
    }
  }, []);
  return (
    <>
      <Link
        to={linkToRecord("/Event", record?.id, 'show')}
      >
        <TextField variant="h2" record={record} component="div" source="pair:label" className={classes.title} />
      </Link>
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
            <ReferenceField record={record} source="pair:hostedIn" reference="Place" link={false}>
              <FunctionField render={renderLocation}/>
            </ReferenceField>
          </Chip>
        ) :
          record['pair:hasLocation']?.['pair:label'] ?
          <Chip icon={<PlaceIcon />}>
            <Typography variant="body2" className={classes.eventDetails} component="div">
              {record['pair:hasLocation']?.['pair:label']}
          </Typography>
          </Chip>
          :   
        (record['pair:hasLocation'] && (
          <Chip icon={<PlaceIcon />}>
            <ReferenceField record={record} source="pair:hasLocation" reference="Place" link={false}>
              <FunctionField label="Localisation" render={renderLocation}/>
            </ReferenceField>
          </Chip>
        ))
        }
      </div>
      <div style={{display:'flex'}}>
      {record['pair:hasType'] && (
        <Chip icon={<TypeIcon />}>
          <ReferenceArrayField record={record} reference="Type" source="pair:hasType">
            <SeparatedListField link={linkToFilteredList( 'Event', 'pair:hasType')} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['cdlt:full'] && (
        <Chip icon={<CheckIcon />}>
          <Typography variant="body2" className={classes.eventDetails}>Événement complet</Typography>
        </Chip>
      )}
      </div>
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
          <ReferenceArrayField record={record} reference="Topic" perPage={2} source="pair:hasTopic">
            <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasSector')} separator=" / ">
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
