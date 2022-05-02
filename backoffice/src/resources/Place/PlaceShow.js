import React from 'react';
import { TextField, UrlField, EmailField, ChipField, SingleFieldList, BooleanField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarField, GridList, Hero, MainList, SeparatedListField, SideList } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import PlaceTitle from './PlaceTitle';
import JotformButton from '../JotformButton';

const PlaceShow = (props) => (
  <ShowWithPermissions title={<PlaceTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:isDepictedBy">
          <TextField source="pair:comment" />
          <ReferenceField source="pair:hasLocation" reference="Region" link={false}>
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
          <UrlField source="pair:homePage" />
          <BooleanField addLabel source="cdlt:directRegistration" />
        </Hero>
        <JotformButton />
        <MainList>
          <MarkdownField source="pair:description" addLabel />
          <MarkdownField source="cdlt:hostDescription" addLabel />
          <MarkdownField source="cdlt:activities" addLabel />
          <MarkdownField source="cdlt:practicalConditions" addLabel />
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
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
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
  </ShowWithPermissions>
);

export default PlaceShow;
