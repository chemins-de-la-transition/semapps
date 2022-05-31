import React from 'react';
import { TextField } from 'react-admin';
import Chip from '../../../../commons/Chip';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles } from '@material-ui/core';
import ThemeIcon from '../../../../svg/ThemeIcon';

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
}));

const OrganizationCard = ({ record, variant }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" record={record} component="div" source="pair:label" className={classes.title} />
      {record['pair:hasSector'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Sector" source="pair:hasSector">
            <SeparatedListField link={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Theme" source="pair:hasTopic">
            <SeparatedListField link={false} separator=" /">
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

OrganizationCard.defaultProps = {
  variant: 'full',
};

export default OrganizationCard;