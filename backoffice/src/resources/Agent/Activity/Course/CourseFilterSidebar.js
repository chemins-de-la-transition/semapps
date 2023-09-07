import React from 'react';
import { useTranslate } from 'react-admin';
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

const ProjectFilterSidebar = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <ReferenceFilter reference="Status" source="pair:hasStatus" filter={{ a: 'cdlt:CourseStatus' }} label={translate('app.input.status')} />
        <ReferenceFilter reference="Type" source="pair:hasType" filter={{ a: 'cdlt:CourseType' }} label={translate('app.input.type')} />
        <ReferenceFilter reference="Sector" source="pair:hasSector" label={translate('app.input.sector')} />
      </CardContent>
    </Card>
  );
};

export default ProjectFilterSidebar;
