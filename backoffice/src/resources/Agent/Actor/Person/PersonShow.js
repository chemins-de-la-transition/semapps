import React from 'react';
import { ChipField, SingleFieldList, TextField, EmailField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { MainList, SideList, Hero, GridList, AvatarField, SeparatedListField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import HomeIcon from '@material-ui/icons/Home';
import ChipWithResourceIcon from '../../../../commons/ChipWithResourceIcon';

const PersonShow = (props) => (
  <ShowWithPermissions title={<PersonTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:firstName" />
          <TextField source="pair:lastName" />
          <TextField source="pair:comment" />
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
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:offers">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:asAHostIntentions" />
          <MarkdownField source="cdlt:asAMentorIntentions" />
          <MarkdownField source="cdlt:asAnOrganiserIntentions" />
          <MarkdownField source="cdlt:asATravelerIntentions" />
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
              <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                <HomeIcon />
              </AvatarField>
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
          <ReferenceArrayField reference="Activity" source="cdlt:mentorOn">
            <SingleFieldList linkType="show">
              <ChipWithResourceIcon source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </ShowWithPermissions>
);

export default PersonShow;
