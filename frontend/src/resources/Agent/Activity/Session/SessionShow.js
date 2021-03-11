import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField, DateField, Datagrid, ShowButton } from 'react-admin';
import { Grid } from '@material-ui/core';
import { Hero, Show, MarkdownField, GridList, MainList, SideList, AvatarField } from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import SessionTitle from './SessionTitle';
import HomeIcon from '@material-ui/icons/Home';

const SessionShow = props => (
  <Show title={<SessionTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
          <UrlField source="pair:aboutPage" />
          <DateField source="pair:startDate" />
          <DateField source="pair:endDate" />
          <ReferenceField source="cdlt:sessionOf" reference="Path" link="show">
            <TextField source="pair:label" />
          </ReferenceField>
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
          <MarkdownField source="cdlt:economicalConditions" />
          <MarkdownField source="cdlt:practicalConditions" />
          <ReferenceArrayField label="Déroulé" reference="Event" source="pair:hasPart" sort={{ field: "pair:startDate", order: 'ASC' }}>
            <Datagrid rowClick="show">
              <TextField source="pair:label" />
              <DateField source="pair:startDate" />
              <DateField source="pair:endDate" />
              <ShowButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField label="Itinéraire" reference="Event" source="pair:hasPart" sort={{ field: "pair:startDate", order: 'ASC' }}>
            <MapList
              latitude={record => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={record => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
              label={record => record?.['pair:label']}
              description={record => record?.['pair:comment']}
              connectMarkers
              boundToMarkers
              scrollWheelZoom
            />
          </ReferenceArrayField>
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Actor" source="pair:organizedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300">
                <HomeIcon />
              </AvatarField>
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:hasMentor">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:hasLearner">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <SingleFieldList link="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList link="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default SessionShow;
