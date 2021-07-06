import React from 'react';
import { useRecordContext } from 'react-admin';
import { Typography } from '@material-ui/core';

const DurationField = ({ startDate, endDate, ...rest }) => {
  const record = useRecordContext(rest);

  // TODO use dayjs to calculate difference
  // https://day.js.org/docs/en/display/difference
  const interval = new Date(record[endDate]) - new Date(record[startDate]);
  let duration = null;
  if (interval <= 0) {
    duration = null;
  } else if (interval < 60 * 1000) {
    // less than 1 hour
    duration = '1 minute';
  } else if (interval < 60 * 60 * 1000) {
    // less than 1 hour
    duration = Math.ceil(interval / (60 * 1000)) + ' minutes';
  } else if (interval === 60 * 60 * 1000) {
    // 1 hour
    duration = '1 heure';
  } else if (interval < 24 * 60 * 60 * 1000) {
    // less than 1 day
    duration = Math.ceil(interval / (60 * 60 * 1000)) + ' heures';
  } else if (interval < 30 * 24 * 60 * 60 * 1000) {
    // less than 1 month
    duration = Math.ceil(interval / (24 * 60 * 60 * 1000)) + ' jours';
  } else {
    duration = Math.ceil(interval / (30 * 24 * 60 * 60 * 1000)) + '  mois';
  }

  return duration ? <Typography {...rest}>{duration}</Typography> : null;
};

export default DurationField;
