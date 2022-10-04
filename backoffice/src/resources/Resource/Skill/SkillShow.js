import React from 'react';
import { ChipField, SingleFieldList } from 'react-admin';
import { GridList } from '@semapps/list-components';
import { Grid, Typography } from '@material-ui/core';
import { ReferenceArrayField, AvatarWithLabelField } from '@semapps/field-components';
import SkillTitle from './SkillTitle';
import Show from "../../../layout/show/Show";
import SideList from "../../../common/list/SideList/SideList";

const SkillShow = (props) => (
  <Show title={<SkillTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Course" source="pair:producedBy">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="pair:offeredBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default SkillShow;
