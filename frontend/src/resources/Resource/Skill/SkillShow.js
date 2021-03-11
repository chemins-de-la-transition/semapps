import React from 'react';
import { ChipField, SingleFieldList } from "react-admin";
import { Show, AvatarField, GridList, SideList } from '@semapps/archipelago-layout';
import { Grid, Typography } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import SkillTitle from './SkillTitle';

const SkillShow = props => (
  <Show title={<SkillTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Person" source="pair:producedBy">
            <SingleFieldList link="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="pair:offeredBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default SkillShow;
