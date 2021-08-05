import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { ReferenceField, TextField } from 'react-admin';
import DurationIcon from '../../../svg/DurationIcon';
import CourseIcon from '../../../svg/CourseIcon';
import DurationField from "../../../commons/fields/DurationField";
import Chip from "../../../commons/Chip";
import PlaceIcon from "../../../svg/PlaceIcon";

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

const CourseSubHeader = ({ record }) => {
  const classes = useStyles();
  return (
    <Box className={classes.courseSubHeader}>
      {record['pair:hasLocation'] && (
        <Chip icon={<PlaceIcon />}>
          <ReferenceField record={record} source="pair:hasLocation" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      )}
      {record['pair:startDate'] && record['pair:endDate'] && (
        <Chip icon={<DurationIcon />}>
          <DurationField record={record} startDate="pair:startDate" endDate="pair:endDate" component="span" />
        </Chip>
      )}
      {record['pair:hasCourseType'] && (
        <Chip icon={<CourseIcon />}>
          <ReferenceField source="pair:hasCourseType" reference="CourseType" record={record}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      )}
    </Box>
  );
};

export default CourseSubHeader;
