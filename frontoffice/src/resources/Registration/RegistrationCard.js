import React from 'react';
import { TextField, DateField, useTranslate} from 'react-admin';
import { ReferenceField } from '@semapps/field-components';
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
  const translate = useTranslate();

  return (
    <>
    {record['cdlt:registrationFor'] &&
    (
    <ReferenceField record={record} source="cdlt:registrationFor" reference="LEP" link="show" >
      <TextField source="pair:label" variant="h2" className={classes.title}/>
    </ReferenceField>
    )
    }
    {record['pair:startDate'] && record['pair:endDate'] && (
        <Chip icon={<CalendarIcon />}>
          <Typography variant="body2" component="div">
            {translate('app.card.registration.bookingPeriod')}
            <DateField record={record} source="pair:startDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}/>
            {translate('app.card.registration.to')}
            <DateField record={record} source="pair:endDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }} />
          </Typography>
        </Chip>
    )}
    {record['dc:created'] && (
        <Chip icon={<CalendarIcon />}>
          <Typography variant="body2" component="div">
          {translate('app.card.registration.to')}
            <DateField record={record} source="dc:created" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }} />
          </Typography>
        </Chip>
    )}
    </>
  );
};

export default RegistrationCard;
