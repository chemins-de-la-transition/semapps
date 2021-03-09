import React from 'react';
import { FilterLiveSearch } from 'react-admin';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import { ReferenceFilter } from '@semapps/archipelago-layout';

const Card = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '15em',
      marginLeft: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(MuiCard);

const ProjectFilterSidebar = () => (
  <Card>
    <CardContent>
      <FilterLiveSearch source="q" />
      <ReferenceFilter reference="Status" source="pair:hasStatus" filter={{ a: 'cdlt:SessionStatus' }} />
      <ReferenceFilter reference="Type" source="pair:hasType" filter={{ a: 'cdlt:SessionType' }} />
      <ReferenceFilter reference="Theme" source="pair:hasTopic" />
    </CardContent>
  </Card>
);

export default ProjectFilterSidebar;
