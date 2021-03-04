import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Grid } from "@material-ui/core";
import { MainList, SideList, Hero, Show, GridList, AvatarField } from '@semapps/archipelago-layout';
import { UriArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import HomeIcon from "@material-ui/icons/Home";

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:image">
          <TextField source="pair:firstName" />
          <TextField source="pair:lastName" />
          <TextField source="pair:comment" />
        </Hero>
        <MainList>
          <MapField
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField reference="Organization" source="pair:affiliatedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300">
                <HomeIcon />
              </AvatarField>
            </GridList>
          </UriArrayField>
          <UriArrayField reference="Event" source="cdlt:mentorOn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField reference="Skill" source="pair:offers">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PersonShow;
