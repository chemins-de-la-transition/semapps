import React from 'react';
import isSameDay from 'date-fns/isSameDay';
import { DateField, useRecordContext } from 'react-admin';
import { Typography } from '@material-ui/core';

const DateToDateField = ({ source, startDate, endDate, variant, ...rest }) => {
  const record = useRecordContext();
  if (isSameDay(new Date(record[startDate]), new Date(record[endDate]))) {
    return <DateField source={startDate} options={{ year: 'numeric', month: 'long', day: 'numeric' }} {...rest} />;
  } else {
    return (
      <Typography component="span" variant={variant}>
        Du&nbsp;
        <DateField source={startDate} options={{ month: 'long', day: 'numeric' }} variant={variant} />
        &nbsp;au&nbsp;
        <DateField source={endDate} options={{ year: 'numeric', month: 'long', day: 'numeric' }} variant={variant} />
      </Typography>
    );
  }
};

export default DateToDateField;
