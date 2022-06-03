import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField, DateField, EmailField, BooleanField, NumberField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarField, GridList, Hero, MainList, SeparatedListField, SideList } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import RegistrationButton from '../../../../commons/RegistrationButton';
import EventTitle from './EventTitle';
import EventMapField from "./EventMapField";

const EventShow = (props) => (
  <ShowWithPermissions title={<EventTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="cdlt:referenceNumber" />
          <TextField source="pair:comment" />
          <DateField source="pair:startDate" showTime />
          <DateField source="pair:endDate" showTime />
          <ReferenceField source="pair:hostedIn" reference="Place" link="show">
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceArrayField source="cdlt:hasCourseType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField source="pair:hasType" reference="Type">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField source="pair:hasStatus" reference="Status">
            <SeparatedListField link={false}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <EmailField source="pair:e-mail" />
          <TextField source="pair:phone" />
          <UrlField source="pair:aboutPage" />
          <BooleanField addLabel source="cdlt:directRegistration" />
        </Hero>
        <RegistrationButton 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink" 
        />
        <MainList>
          <MarkdownField source="pair:description"/>
          <ReferenceArrayField reference="TargetAudience" source="cdlt:targetAudience">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:organizerDescription" />
          <MarkdownField source="cdlt:mentorDescription" />
          
          <MarkdownField source="cdlt:program" addLabel />
          
          <MarkdownField source="cdlt:prerequisites" addLabel />
          <MarkdownField source="cdlt:learningObjectives" addLabel />
          <MarkdownField source="cdlt:pedagogicalMeans" />
          <MarkdownField source="cdlt:evaluationMethod" />

          <MarkdownField source="cdlt:practicalConditions" />
          <NumberField source="cdlt:attendeesMin" />
          <NumberField source="cdlt:attendeesMax" />
          <BooleanField source="cdlt:full" />
          <MarkdownField source="cdlt:accessibility" />
        
          <NumberField source="cdlt:price" />
          <MarkdownField source="cdlt:economicalConditions" />
          <MarkdownField source="cdlt:financialSupport" />
        
          <BooleanField source="cdlt:directRegistration" />
          <EventMapField source="pair:hasLocation" />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Actor" source="cdlt:organizedBy">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:hasMentor">
            <GridList xs={6} linkType="show">
              <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Path" source="cdlt:eventOn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Course" source="pair:partOf">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasSector">
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

export default EventShow;
