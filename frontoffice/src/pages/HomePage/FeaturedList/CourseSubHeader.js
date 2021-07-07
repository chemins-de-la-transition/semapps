import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { ReferenceField, TextField } from 'react-admin';
import DurationIcon from '../../../svg/DurationIcon';
import CourseIcon from '../../../svg/CourseIcon';

const useStyles = makeStyles((theme) => ({
  courseSubHeader: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '1rem',
    },
    '& svg [fill]': {
      fill: theme.palette.secondary.main,
    },
  },
  text: {
    fontSize: '12px',
    lineHeight: '12px',
    marginLeft: '8px',
    fontWeight: 'normal',
    color: theme.palette.secondary.main,
  },
}));

const Duration = ({ record }) => {
  const classes = useStyles();
  let startDate = new Date(record['pair:startDate']);
  let endDate = new Date(record['pair:endDate']);
  const interval = endDate - startDate;
  let duration = null;
  // TODO find librairy to extract duration
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

  return duration ? (
    <Typography variant="body2" className={classes.text}>
      {duration}
    </Typography>
  ) : null;
};

const CourseSubHeader = ({ record, ...rest }) => {
  const classes = useStyles();
  return (
    <Box className={classes.courseSubHeader}>
      {record['pair:startDate'] && record['pair:endDate'] ? (
        <>
          <DurationIcon />
          <Duration record={record} {...rest} />
        </>
      ) : null}
      {record['pair:hasCourseType'] ? (
        <>
          <CourseIcon />
          <ReferenceField source="pair:hasCourseType" reference="CourseType" record={record} {...rest}>
            <TextField source="pair:label" className={classes.text} />
          </ReferenceField>
        </>
      ) : null}
    </Box>
  );
};

export default CourseSubHeader;
