import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField, DateField } from 'react-admin';
import { Grid } from "@material-ui/core";
import { Hero, Show, MainList, SideList } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import EventTitle from './EventTitle';

const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
          <DateField source="pair:startDate" showTime />
          <DateField source="pair:endDate" showTime />
          <UrlField source="pair:aboutPage" />
          <TextField source="pair:hostedIn[pair:label]" />
          <ReferenceField source="pair:hostedIn" reference="Place" link="show">
            <TextField source="pair:label" />
          </ReferenceField>
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <MapField
            source="pair:hostedIn"
            address={record => record?.['pair:hostedIn']?.['pair:label'] + ', ' + record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={record => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={record => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Session" source="pair:partOf">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default EventShow;
