import React from 'react';
import { Show, UserIcon, GridList, SideList } from '@semapps/archipelago-layout';
import { Grid, Typography } from '@material-ui/core';
import { UriArrayField } from '@semapps/semantic-data-provider';
import SkillTitle from './SkillTitle';

const SkillShow = props => (
  <Show title={<SkillTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField
            label="Proposé par"
            reference="Person"
            source="pair:offeredBy"
            filter={{ type: 'pair:Person' }}
            filterToQuery={searchText => ({ title: searchText })}
          >
            <GridList xs={6} linkType="show">
              <UserIcon />
            </GridList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default SkillShow;
