import React from "react";
import {
  ChipField,
  SingleFieldList,
  TextField,
  UrlField,
  DateField,
  Datagrid,
  ShowButton,
  EmailField,
} from 'react-admin';
import { Grid } from '@material-ui/core';
import { Hero, GridList, MainList, SideList, AvatarField, SeparatedListField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MapList } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import JotformButton from './JotformButton';
import CourseTitle from './CourseTitle';
import HomeIcon from '@material-ui/icons/Home';

const CourseShow = (props) => (
  <ShowWithPermissions title={<CourseTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:isDepictedBy">
          <TextField source="pair:comment" />
          <DateField source="pair:startDate" />
          <DateField source="pair:endDate" />
          <TextField source="cdlt:priceRange" />
          {/*<ReferenceField source="cdlt:courseOn" reference="Path" link="show">*/}
          {/*  <TextField source="pair:label" />*/}
          {/*</ReferenceField>*/}
          <ReferenceArrayField source="pair:hasCourseType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField source="pair:hasLocation" reference="Region">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <EmailField source="pair:e-mail" />
          <TextField source="pair:phone" />
          <UrlField source="pair:homePage" />
          <ReferenceField source="pair:hasStatus" reference="Status" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <JotformButton />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
          <MarkdownField source="cdlt:prerequisites" />
          <MarkdownField source="cdlt:practicalConditions" />
          <MarkdownField source="cdlt:learningObjectives" />
          <MarkdownField source="cdlt:economicalConditions" />
          <ReferenceArrayField
            label="Déroulé"
            reference="Event"
            source="pair:hasPart"
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
            label="Itinéraire"
            reference="Event"
            source="pair:hasPart"
            sort={{ field: 'pair:startDate', order: 'ASC' }}
          >
            <MapList
              latitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
              label={(record) => record?.['pair:label']}
              description={(record) => record?.['pair:comment']}
              connectMarkers
              boundToMarkers
              scrollWheelZoom
            />
          </ReferenceArrayField>
          <ReferenceArrayField label="Documents liés" reference="Document" source="pair:documentedBy" sort={{ field: 'dc:created', order: 'DESC' }}>
            <Datagrid rowClick="show">
              <DateField label="Date" source="dc:created" />
              <TextField source="pair:label" />
              <ReferenceField reference="Type" source="pair:hasType" link={false}>
                <TextField source="pair:label" />
              </ReferenceField>
              <ReferenceField reference="Person" source="dc:creator" link={false}>
                <TextField source="pair:label" />
              </ReferenceField>
              <ShowButton />
            </Datagrid>
          </ReferenceArrayField>
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Person" source="cdlt:organizedBy">
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
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </ShowWithPermissions>
);

export default CourseShow;
