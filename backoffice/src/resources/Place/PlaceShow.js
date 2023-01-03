import React from 'react';
import { TextField, UrlField, EmailField, ChipField, NumberField, SingleFieldList, BooleanField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarWithLabelField, SeparatedListField, ReferenceArrayField, ReferenceField } from '@semapps/field-components';
import { MarkdownField } from '@semapps/markdown-components';
import { MapField } from '@semapps/geo-components';
import { GridList } from '@semapps/list-components';
import PlaceTitle from './PlaceTitle';
import RegistrationButton from '../../common/buttons/RegistrationButton';
import Show from "../../layout/show/Show";
import { MainList, SideList, Hero } from "../../common/list";

const PlaceShow = (props) => (
  <Show title={<PlaceTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:comment" />
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
          <EmailField source="pair:e-mail" />
          <TextField source="pair:phone" />
          <TextField source="cdlt:publicPhone" label="Numéro de téléphone public" />
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
          <MarkdownField source="pair:description" addLabel />
          <MarkdownField source="cdlt:hostDescription" addLabel />
          <MarkdownField source="cdlt:activities" addLabel />
          <MarkdownField source="cdlt:practicalConditions" addLabel />
          <NumberField source="cdlt:maximumCapacity" />
          <MapField
            source="pair:hasPostalAddress"
            address={(record) => record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
          />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="cdlt:hostsOrganization">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Path" source="cdlt:placeOn">
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

export default PlaceShow;
