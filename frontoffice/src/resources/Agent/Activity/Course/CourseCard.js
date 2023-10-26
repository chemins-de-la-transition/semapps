import React from 'react';
import { TextField, DateField, useTranslate} from 'react-admin';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { makeStyles, Box } from '@material-ui/core';
import Chip from '../../../../commons/Chip';
import DurationField from "../../../../commons/fields/DurationField";
import CourseIcon from '../../../../svg/CourseIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';
import DurationIcon from '../../../../svg/DurationIcon';
import TopicIcon from '../../../../svg/TopicIcon';
import { linkToFilteredList } from "../../../../utils";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
  },
  visibilityIcon: {
    position: 'absolute',
    top: 16,
    right: 16
  }
}));

const CourseCard = ({ record, variant }) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <>
      <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title} />
      {record['pair:startDate'] && record['pair:endDate'] && (
      <Box display="flex">
        <Chip icon={<CalendarIcon />}>
          <DateField
            record={record}
            source="pair:startDate"
            options={{ year: 'numeric', month: 'long', day: 'numeric' }}
            showTime
          />
        </Chip>
        <Chip icon={<DurationIcon />}>
          <DurationField record={record} startDate="pair:startDate" endDate="pair:endDate" component="span" />
        </Chip>
      </Box>
      )}
      {record['cdlt:hasCourseType'] && (
        <Chip icon={<CourseIcon />}>
          <ReferenceArrayField record={record} source="cdlt:hasCourseType" reference="Type">
            <SeparatedListField separator=" / " link={linkToFilteredList( 'LEP', 'cdlt:hasCourseType')}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasSector'] && (
        <Chip icon={<TopicIcon />}>
          <ReferenceArrayField record={record} reference="Sector" perPage={2} source="pair:hasSector">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<TopicIcon />}>
          <ReferenceArrayField record={record} reference="Topic" perPage={2} source="pair:hasTopic">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' && (
        <div className={classes.description}>
          <strong>{translate('app.tab.description')}</strong>
          <TextField record={record} source="pair:comment" />
        </div>
      )}
      {record['cdlt:hasPublicationStatus'] !== process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' && (
        <VisibilityOffIcon className={classes.visibilityIcon} />
      )}
    </>
  );
};

CourseCard.defaultProps = {
  variant: 'full',
};

export default CourseCard;
