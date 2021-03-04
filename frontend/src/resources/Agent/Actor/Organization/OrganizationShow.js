import React from 'react';
import { TextField, UrlField, ChipField, SingleFieldList } from 'react-admin';
import { MainList, SideList, Hero, AvatarField, GridList, Show, MarkdownField } from '@semapps/archipelago-layout';
import { MapField } from '@semapps/geo-components';
import { UriArrayField } from '@semapps/semantic-data-provider';
import { Grid } from '@material-ui/core';
import OrganizationTitle from './OrganizationTitle';
import HomeIcon from "@material-ui/icons/Home";

const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:image">
          <TextField source="pair:comment" />
          <UrlField source="pair:homePage" />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <MapField
            source="pair:hasLocation"
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField reference="Person" source="pair:affiliates">
            <GridList xs={6} linkType="show">
              <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="grey.300" />
            </GridList>
          </UriArrayField>
          <UriArrayField reference="Organization" source="pair:partnerOf">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300">
                <HomeIcon />
              </AvatarField>
            </GridList>
          </UriArrayField>
          <UriArrayField reference="Project" source="pair:involvedIn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField label="Evénements" reference="Event" filter={{ '@type': 'pair:Event' }} source="pair:involvedIn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField reference="Document" source="pair:documentedBy">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default OrganizationShow;
