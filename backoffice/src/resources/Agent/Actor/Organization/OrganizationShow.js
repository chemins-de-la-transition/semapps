import React from 'react';
import { NumberField, TextField, ChipField, SingleFieldList, EmailField } from 'react-admin';
import { GridList } from '@semapps/list-components';
import { MapField } from '@semapps/geo-components';
import { MultiUrlField, SeparatedListField, AvatarWithLabelField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { MarkdownField } from '@semapps/markdown-components';
import { Grid } from '@material-ui/core';
import OrganizationTitle from './OrganizationTitle';
import HomeIcon from '@material-ui/icons/Home';
import ChipWithResourceIcon from '../../../../common/ChipWithResourceIcon';
import { MainList, SideList, Hero } from "../../../../common/list";
import Show from "../../../../layout/show/Show";

const OrganizationShow = (props) => (
  <Show title={<OrganizationTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:comment" />
          <ReferenceField source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <MultiUrlField source="pair:homePage" />
          <EmailField source="pair:e-mail" />
          <TextField source="pair:phone" />
          <TextField source="cdlt:publicPhone" label="Numéro de téléphone public" />
          <ReferenceArrayField source="pair:hasType" reference="Type">
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
          <MarkdownField source="cdlt:intentions" />
          <ReferenceArrayField reference="Finality" source="pair:hasFinality">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:practicalConditions" addLabel />
          <NumberField source="cdlt:maximumCapacity" />
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
          <ReferenceArrayField  reference="Place" source="cdlt:organizationHostedIn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="pair:affiliates">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="pair:partnerOf">
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
          <ReferenceArrayField reference="Project" source="pair:involvedIn">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField
            label="Événements"
            reference="Event"
            filter={{ '@type': 'pair:Event' }}
            source="pair:involvedIn"
          >
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          {/*
          <ReferenceArrayField reference="Document" source="pair:documentedBy">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          */}
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
          <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
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

export default OrganizationShow;
