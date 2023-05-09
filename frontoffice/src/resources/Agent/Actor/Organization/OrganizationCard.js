import React from 'react';
import { TextField } from 'react-admin';
import Chip from '../../../../commons/Chip';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { makeStyles } from '@material-ui/core';
import TopicIcon from '../../../../svg/TopicIcon';
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

const OrganizationCard = ({ record, variant }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" record={record} component="div" source="pair:label" className={classes.title} />
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
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment" />
        </div>
      )}
      {record['cdlt:hasPublicationStatus'] !== process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' && (
        <VisibilityOffIcon className={classes.visibilityIcon} />
      )}
    </>
  );
};

OrganizationCard.defaultProps = {
  variant: 'full',
};

export default OrganizationCard;
