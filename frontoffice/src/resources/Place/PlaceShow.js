import React from 'react';
import { TextField, UrlField, EmailField, ChipField, SingleFieldList } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarField, GridList, Hero, MainList, SeparatedListField, SideList } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import PlaceTitle from './PlaceTitle';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';

const PlaceShow = (props) => (
  <ShowWithPermissions title={<PlaceTitle />} {...props}>
    <FullWidthBox>
      <LargeContainer>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9}>
            <Hero image="pair:isDepictedBy">
              <TextField source="pair:comment" />
              <ReferenceArrayField source="cdlt:hasCourseType" reference="Type">
                <SeparatedListField linkType={false}>
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField source="pair:hasPlaceType" reference="Type">
                <SeparatedListField linkType={false}>
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <EmailField source="pair:e-mail" />
              <TextField source="pair:phone" />
              <UrlField source="pair:homePage" />
            </Hero>
            <MainList>
              <MarkdownField source="pair:description" addLabel />
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
      </LargeContainer>
    </FullWidthBox>
  </ShowWithPermissions>
);

export default PlaceShow;
