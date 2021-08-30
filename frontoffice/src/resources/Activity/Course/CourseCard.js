import React from 'react';
import { TextField } from 'react-admin';
import Chip from '../../../commons/Chip';
import CourseIcon from '../../../svg/CourseIcon';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
  },
}));

const CourseCard = ({ record, variant }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" record={record} source="pair:label" className={classes.title} />
      {record['cdlt:hasCourseType'] && (
        <Chip icon={<CourseIcon />}>
          <ReferenceArrayField record={record} source="cdlt:hasCourseType" reference="Type">
            <SeparatedListField separator=" / " link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' && (
        <div className={classes.description}>
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment" />
        </div>
      )}
    </>
  );
};

CourseCard.defaultProps = {
  variant: 'full',
};

export default CourseCard;
