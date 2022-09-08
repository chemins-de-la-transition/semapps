import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { ReferenceField, TextField, DateField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import DurationIcon from '../../../../svg/DurationIcon';
import CourseIcon from '../../../../svg/CourseIcon';
import DurationField from "../../../../commons/fields/DurationField";
import Chip from "../../../../commons/Chip";
import PlaceIcon from "../../../../svg/PlaceIcon";
import CalendarIcon from "../../../../svg/CalendarIcon";

const useStyles = makeStyles((theme) => ({
  courseSubHeader: {
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
  eventDuration: {
    display: 'flex',
  },
}));

const CourseSubHeader = ({ record }) => {
  const classes = useStyles();
  return (
    <Box className={classes.courseSubHeader}>
      {record['cdlt:hasRegion'] && !Array.isArray(record['cdlt:hasRegion']) ? (
        <Chip icon={<PlaceIcon />}>
          <ReferenceField record={record} source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      )
      :
      Array.isArray(record['cdlt:hasRegion']) && (
        <Chip icon={<PlaceIcon />}>
          <ReferenceArrayField record={record} source="cdlt:hasRegion" reference="Region">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )
      }
      <div className={classes.eventDuration}>
      {record['pair:startDate'] && record['pair:endDate'] && (
        <Chip icon={<DurationIcon />}>
          <DurationField record={record} startDate="pair:startDate" endDate="pair:endDate" component="span" />
        </Chip>
      )}
      {record['pair:startDate'] && record['pair:endDate'] && (
        <Chip icon={<CalendarIcon />}>
          <Typography variant="body2" component="div">
            <DateField record={record} source="pair:startDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}/>
            {" au "}
            <DateField record={record} source="pair:endDate" options={{ year: 'numeric', month: 'numeric', day: 'numeric' }} />
          </Typography>
        </Chip>
      )}
      </div>
      {record['cdlt:hasCourseType'] && (
        <Chip icon={<CourseIcon />}>
          <ReferenceField source="cdlt:hasCourseType" reference="Type" record={record}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      )}
    </Box>
  );
};

export default CourseSubHeader;
