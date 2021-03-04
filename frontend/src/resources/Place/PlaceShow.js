import React from 'react';
import {
  TextField,
  UrlField,
  ChipField,
  SingleFieldList,
} from 'react-admin';
import { Grid } from "@material-ui/core";
import { Hero, Show, MarkdownField, MainList, SideList } from '@semapps/archipelago-layout';
import { MapField } from '@semapps/geo-components';
import { UriArrayField } from '@semapps/semantic-data-provider';
import PlaceTitle from './PlaceTitle';

const PlaceShow = props => (
  <Show title={<PlaceTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="image">
          <TextField source="pair:comment" />
          <UrlField source="pair:homePage" />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" addLabel />
          <MapField
            source="pair:hasPostalAddress"
            address={record => record['pair:hasPostalAddress'] && record['pair:hasPostalAddress']['pair:label']}
            latitude={record => record['pair:hasPostalAddress'] && record['pair:hasPostalAddress']['pair:latitude']}
            longitude={record => record['pair:hasPostalAddress'] && record['pair:hasPostalAddress']['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PlaceShow;