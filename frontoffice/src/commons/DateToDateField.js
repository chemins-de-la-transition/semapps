import React from 'react';
import { DateField } from 'react-admin';

const DateToDateField = ({ startDate, endDate }) => (
  <span>
    Du&nbsp;
    <DateField
      source={startDate}
      options={{ month: 'long', day: 'numeric' }}
    />
    &nbsp;au&nbsp;
    <DateField
      source={endDate}
      options={{ year: 'numeric', month: 'long', day: 'numeric' }}
    />
  </span>
);

export default DateToDateField;
