import React from 'react';
import { TextField, Link, linkToRecord } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles, Typography } from '@material-ui/core';
import Chip from '../../../commons/Chip';
import ThemeIcon from '../../../svg/ThemeIcon';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    marginBottom: 8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
  },
}));

const PathCard = ({ record, basePath }) => {
  const classes = useStyles();
  return (
    <>
      <Link to={linkToRecord(basePath, record.id, 'show')}>
        <TextField variant="h2" component="div" record={record} source="pair:label" className={classes.title} />
      </Link>
      <Typography variant="body2" color="secondary" className={classes.description}>
        <strong>Description: </strong>
        <TextField record={record} source="pair:comment" variant="body2" color="secondary" />
      </Typography>
      {record['pair:hasSector'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Sector" perPage={2} source="pair:hasSector">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Theme" perPage={2} source="pair:hasTopic">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
    </>
  );
};

export default PathCard;
