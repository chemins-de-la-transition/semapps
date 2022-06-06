import React from 'react';
import { ChipField, Datagrid, DateField, ShowButton, SingleFieldList, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { MainList, SideList, Hero, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { MapList } from '@semapps/geo-components';
import PathTitle from './PathTitle';
import RegistrationButton from '../../../commons/RegistrationButton';

const PathShow = (props) => (
  <ShowWithPermissions title={<PathTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
          {/*
          <ReferenceArrayField source="pair:hasType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceField source="pair:hasStatus" reference="Status" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          */}
        </Hero>
        <RegistrationButton 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink" 
        />
        <MainList>
          <MarkdownField source="pair:description" />
          {/*
          <MarkdownField source="cdlt:forWhom" />
          <MarkdownField source="cdlt:prerequisites" />
          <MarkdownField source="cdlt:learningObjectives" />
          <MarkdownField source="cdlt:professionalPerspectives" />
          */}
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
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="cdlt:supportedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
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
  </ShowWithPermissions>
);

export default PathShow;
