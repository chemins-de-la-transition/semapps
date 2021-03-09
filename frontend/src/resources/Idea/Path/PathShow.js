import React from 'react';
import { ChipField, Datagrid, DateField, ReferenceField, ShowButton, SingleFieldList, TextField } from 'react-admin';
import { Grid } from "@material-ui/core";
import { MainList, SideList, Hero, Show, MarkdownField, GridList, AvatarField } from '@semapps/archipelago-layout';
import { UriArrayField } from '@semapps/semantic-data-provider';
import { MapList } from '@semapps/geo-components';
import PathTitle from './PathTitle';

const PathShow = props => (
  <Show title={<PathTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
          <ReferenceField source="pair:hasType" reference="Type" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField source="pair:hasStatus" reference="Status" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <MarkdownField source="cdlt:forWhom" />
          <MarkdownField source="cdlt:prerequisites" />
          <MarkdownField source="cdlt:learningObjectives" />
          <MarkdownField source="cdlt:professionalPerspectives" />
          <UriArrayField reference="Session" source="cdlt:hasSession" sort={{ field: "pair:startDate", order: 'ASC' }}>
            <Datagrid rowClick="show">
              <TextField source="pair:label" />
              <DateField source="pair:startDate" />
              <DateField source="pair:endDate" />
              <ShowButton />
            </Datagrid>
          </UriArrayField>
          <UriArrayField reference="Place" source="pair:hasLocation" sort={{ field: "pair:startDate", order: 'ASC' }}>
            <MapList
              latitude={record => record && record['pair:hasPostalAddress'] && record['pair:hasPostalAddress']['pair:latitude']}
              longitude={record => record && record['pair:hasPostalAddress'] && record['pair:hasPostalAddress']['pair:longitude']}
              label={record => record && record['pair:label']}
              description={record => record && record['pair:comment']}
              scrollWheelZoom
            />
          </UriArrayField>
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <UriArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label={record => `${record['pair:firstName']} ${record['pair:lastName']}`} image="pair:image" labelColor="grey.300" />
            </GridList>
          </UriArrayField>
          <UriArrayField reference="Skill" source="pair:produces">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
          <UriArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </UriArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PathShow;
