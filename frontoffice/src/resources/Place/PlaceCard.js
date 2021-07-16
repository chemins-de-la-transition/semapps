import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles, Typography } from '@material-ui/core';
import Chip from '../../commons/Chip';
import PlaceIcon from '../../svg/PlaceIcon';
import ThemeIcon from '../../svg/ThemeIcon';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
  },
}));

const PlaceCard = ({ record, variant }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" record={record} source="pair:label" className={classes.title} />
      {record['pair:hasLocation'] && (
        <Chip icon={<PlaceIcon />}>
          <ReferenceField record={record} source="pair:hasLocation" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Theme" source="pair:hasTopic">
            <SeparatedListField linkType={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' && (
        <Typography variant="body2" color="secondary" className={classes.description}>
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment" variant="body2" color="secondary" />
        </Typography>
      )}
    </>
  );
};

PlaceCard.defaultProps = {
  variant: 'full',
};

export default PlaceCard;
