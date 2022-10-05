import React from 'react';
import { ChipField, SingleFieldList, TextField, EmailField, UrlField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { GridList } from '@semapps/list-components';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceField, ReferenceArrayField, AvatarWithLabelField, SeparatedListField } from '@semapps/field-components';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import HomeIcon from '@material-ui/icons/Home';
import ChipWithResourceIcon from '../../../../common/ChipWithResourceIcon';
import { MainList, SideList, Hero } from "../../../../common/list";
import Show from "../../../../layout/show/Show";

const PersonShow = (props) => (
  <Show title={<PersonTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:firstName" />
          <TextField source="pair:lastName" />
          <TextField source="pair:alternativeLabel" />
          <TextField source="pair:comment" />
          <ReferenceField source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <UrlField source="pair:homePage" />
          <MarkdownField source="pair:description" />
          <EmailField source="foaf:email" />
          <TextField source="pair:phone" />
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
        </Hero>
        <MainList>
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
          {/*
          <MarkdownField source="cdlt:asAHostIntentions" />
          <MarkdownField source="cdlt:asAMentorIntentions" />
          <MarkdownField source="cdlt:asAnOrganiserIntentions" />
          <MarkdownField source="cdlt:asATravelerIntentions" />
          */}
          <MarkdownField source="cdlt:intentions" />
          <ReferenceArrayField reference="Finality" source="pair:hasFinality">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MapField
            source="pair:hasLocation"
            latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
            scrollWheelZoom={false}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Organization" source="pair:affiliatedBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                <HomeIcon />
              </AvatarWithLabelField>
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="pair:inspiredBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                <HomeIcon />
              </AvatarWithLabelField>
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Place" source="cdlt:proposes">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Activity" source="cdlt:organizes">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Path" source="cdlt:supports">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Activity" source="cdlt:mentorOn">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:offers">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:aims">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default PersonShow;
