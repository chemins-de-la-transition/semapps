import React from 'react';
import { useRecordContext, useTranslate} from 'react-admin';
import { Typography } from '@material-ui/core';

const DurationField = ({ startDate, endDate, variant, ...rest }) => {
  const record = useRecordContext(rest);
  const translate = useTranslate();

  // TODO use dayjs to calculate difference
  // https://day.js.org/docs/en/display/difference
  const interval = new Date(record[endDate]) - new Date(record[startDate]);
  let duration = null;
  if (interval <= 0) {
    duration = null;
  } else if (interval < 60 * 1000) {
    // less than 1 hour
    duration = '1 '+translate('app.card.duration.minute');
  } else if (interval < 60 * 60 * 1000) {
    // less than 1 hour
    duration = Math.ceil(interval / (60 * 1000)) + ' '+translate('app.card.duration.minutes');
  } else if (interval === 60 * 60 * 1000) {
    // 1 hour
    duration = '1 heure';
  } else if (interval < 24 * 60 * 60 * 1000) {
    // less than 1 day
    duration = Math.ceil(interval / (60 * 60 * 1000)) + ' '+translate('app.card.duration.hours');
  } else if (interval < 30 * 24 * 60 * 60 * 1000) {
    // less than 1 month
    duration = Math.ceil(interval / (24 * 60 * 60 * 1000)) + ' '+translate('app.card.duration.days');
  } else {
    duration = Math.ceil(interval / (30 * 24 * 60 * 60 * 1000)) + '1 ' + translate('app.card.duration.months') ;
  }

  return duration ? <Typography component="span" variant={variant}>{duration}</Typography> : null;
};

export default DurationField;
