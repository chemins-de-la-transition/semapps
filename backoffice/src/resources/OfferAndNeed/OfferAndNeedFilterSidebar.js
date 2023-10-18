import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { ReferenceFilter } from '@semapps/list-components';

const useStyles = makeStyles((theme) => ({
  card: {
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      width: '15em',
      marginLeft: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cardContent: {
    paddingTop: 0,
  },
}));

const OfferAndNeedSidebar = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <ReferenceFilter reference="PublicationStatus" source="cdlt:hasPublicationStatus" />
        <ReferenceFilter reference="Type" source="pair:hasType" filter={{ a: 'cdlt:OfferAndNeedType' }} />
        <ReferenceFilter reference="Sector" source="pair:hasSector" />
      </CardContent>
    </Card>
  );
};

export default OfferAndNeedSidebar;
