import React from 'react';
import { TextField, DateField } from 'react-admin';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { makeStyles, Typography } from '@material-ui/core';
import CalendarIcon from '../../svg/CalendarIcon';
import Chip from '../../commons/Chip';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 26,
  },
}));

const RegistrationCard = ({ record }) => {
  const classes = useStyles();
  const isEvent = record['cdlt:registrationFor']?.indexOf('/events/')!==-1;
  const isCourse = record['cdlt:registrationFor']?.indexOf('/courses/')!==-1;

  return (
    <>
    {record['cdlt:registrationFor'] &&
    (
    isEvent ?
    <ReferenceField record={record} source="cdlt:registrationFor" reference="Event" link="show">
      <TextField source="pair:label" variant="h2" className={classes.title}/>
    </ReferenceField>
    : 
    isCourse ?
    <ReferenceField record={record} source="cdlt:registrationFor" reference="Course" link="show" >
      <TextField source="pair:label" />
    </ReferenceField>
    : 
    <ReferenceField record={record} source="cdlt:registrationFor" reference="Place" link="show" >
      <TextField source="pair:label" />
    </ReferenceField>
    )
    }
    {record['pair:startDate'] && record['pair:endDate'] && (
        <Chip icon={<CalendarIcon />}>
          <Typography variant="body2" component="div">
            { "Date de la réservation : du "}
            <DateField record={record} source="pair:startDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}/>
            {" au "}
            <DateField record={record} source="pair:endDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }} />
          </Typography>
        </Chip>
    )}
    {record['dc:created'] && (
        <Chip icon={<CalendarIcon />}>
          <Typography variant="body2" component="div">
            {" Réservé le : "}
            <DateField record={record} source="dc:created" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }} />
          </Typography>
        </Chip>
    )}
    </>
  );
};

export default RegistrationCard;
