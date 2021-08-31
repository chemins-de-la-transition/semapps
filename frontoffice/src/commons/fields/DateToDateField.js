import React from 'react';
import isSameDay from 'date-fns/isSameDay';
import { DateField, useRecordContext } from 'react-admin';
import { Typography } from '@material-ui/core';

const DateToDateField = ({ source, startDate, endDate, variant, color }) => {
  const record = useRecordContext();
  if (isSameDay(new Date(record[startDate]), new Date(record[endDate]))) {
    return <DateField source={startDate} options={{ year: 'numeric', month: 'long', day: 'numeric' }} variant={variant} color={color} />;
  } else {
    return (
      <Typography component="span" variant={variant} color={color}>
        Du&nbsp;
        <DateField source={startDate} options={{ month: 'long', day: 'numeric' }} variant={variant} color={color} />
        &nbsp;au&nbsp;
        <DateField source={endDate} options={{ year: 'numeric', month: 'long', day: 'numeric' }} variant={variant} color={color} />
      </Typography>
    );
  }
};

export default DateToDateField;
