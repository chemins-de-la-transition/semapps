import React from "react";
import {
  ChipField,
  NumberField,
  SingleFieldList,
  TextField,
  UrlField,
  DateField,
  Datagrid,
  ShowButton,
  EmailField,
  BooleanField
} from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarWithLabelField, SeparatedListField, ReferenceArrayField, ReferenceField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import { Hero, MainList, SideList } from '../../../../common/list';
import { MapList } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';
import RegistrationButton from '../../../../common/buttons/RegistrationButton';
import CourseTitle from './CourseTitle';
import HomeIcon from '@material-ui/icons/Home';
import Show from "../../../../layout/show/Show";


const CourseShow = (props) => (
  <Show title={<CourseTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="cdlt:referenceNumber" />
          <TextField source="pair:comment" />
          <DateField source="pair:startDate" />
          <DateField source="pair:endDate" />
          <TextField source="cdlt:priceRange" />
          <ReferenceArrayField source="cdlt:hasCourseType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField source="cdlt:hasRegion" reference="Region">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <EmailField source="pair:e-mail" />
          <TextField source="pair:phone" />
          <UrlField source="pair:homePage" />
          <ReferenceField source="cdlt:hasPublicationStatus" reference="PublicationStatus" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <BooleanField addLabel source="cdlt:directRegistration" />
        </Hero>
        <RegistrationButton 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink" 
        />
        <MainList>
          <MarkdownField source="pair:description" />
          <ReferenceArrayField reference="TargetAudience" source="cdlt:hasTargetAudience">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:organizerDescription" />
          <MarkdownField source="cdlt:mentorDescription" />
          <MarkdownField source="cdlt:prerequisites" />
          <MarkdownField source="cdlt:practicalConditions" />
          <NumberField source="cdlt:minimumCapacity" />
          <NumberField source="cdlt:maximumCapacity" />
          <MarkdownField source="cdlt:learningObjectives" />
          <ReferenceArrayField reference="JobOpportunities" source="cdlt:hasJobOpportunities">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:economicalConditions" />
          <MarkdownField source="cdlt:financialSupport" />
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
              latitude={(record) => record?.['pair:hasLocation']?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:hasPostalAddress']?.['pair:longitude']}
              label={(record) => record?.['pair:label']}
              description={(record) => record?.['pair:comment']}
              connectMarkers
              boundToMarkers
              scrollWheelZoom
            />
          </ReferenceArrayField>
          {/*
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
          */}
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Actor" source="cdlt:organizedBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                <HomeIcon />
              </AvatarWithLabelField>
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:hasMentor">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Path" source="cdlt:courseOn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
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
          <ReferenceArrayField reference="Skill" source="cdlt:requiredSkills">
            <SingleFieldList linkType="show">
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

export default CourseShow;
