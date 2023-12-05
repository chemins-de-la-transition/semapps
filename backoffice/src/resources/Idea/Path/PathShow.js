import React from 'react';
import { ChipField, Datagrid, DateField, ShowButton, SingleFieldList, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { ReferenceArrayField, AvatarWithLabelField, ReferenceField, SeparatedListField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import { MarkdownField } from '@semapps/markdown-components';
import { MapList } from '@semapps/geo-components';
import PathTitle from './PathTitle';
import Show from "../../../layout/show/Show";
import { MainList, SideList, Hero } from "../../../common/list";

const PathShow = (props) => (
  <Show title={<PathTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:comment" />
          <ReferenceArrayField source="cdlt:hasCourseType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceField source="cdlt:hasPublicationStatus" reference="PublicationStatus" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <ReferenceArrayField
            reference="Course"
            source="cdlt:hasCourse"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <Datagrid rowClick="show">
              <TextField source="pair:label" />
              <DateField source="pair:startDate" />
              <DateField source="pair:endDate" />
              <ShowButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField
            reference="Event"
            source="cdlt:hasEvent"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <Datagrid rowClick="show">
              <TextField source="pair:label" />
              <DateField source="pair:startDate" />
              <DateField source="pair:endDate" />
              <ShowButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField
            reference="Place"
            source="cdlt:hasPlace"
          >
            <MapList
              latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
              label={(record) => record?.['pair:label']}
              description={(record) => record?.['pair:comment']}
              scrollWheelZoom
              boundToMarkers
            />
          </ReferenceArrayField>
          <MarkdownField source="cdlt:learningObjectives" />
          <ReferenceArrayField reference="JobOpportunities" source="cdlt:hasJobOpportunities">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="cdlt:supportedBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Sector" source="pair:hasSector">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Topic" source="pair:hasTopic">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Finality" source="pair:hasFinality">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PathShow;
