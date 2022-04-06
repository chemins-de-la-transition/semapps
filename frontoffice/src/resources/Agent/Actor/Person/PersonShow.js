import React from 'react';
import { ChipField, SingleFieldList, TextField, EmailField } from 'react-admin';
import { Container, Grid } from '@material-ui/core';
import { MainList, SideList, Hero, GridList, AvatarField, SeparatedListField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import HomeIcon from '@material-ui/icons/Home';

const PersonShow = (props) => (
  <Container maxWidth="xl">
    <ShowWithPermissions title={<PersonTitle />} {...props}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={9}>
          <Hero image="pair:image">
            <TextField source="pair:firstName" />
            <TextField source="pair:lastName" />
            <TextField source="pair:comment" />
            <MarkdownField source="pair:description" />
            <EmailField source="foaf:email" />
            <TextField source="pair:phone" />
          </Hero>
          <MainList>
            <MapField
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
            />
          </MainList>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SideList>
            <ReferenceArrayField reference="Organization" source="pair:affiliatedBy">
              <GridList xs={6} linkType="show">
                <AvatarField label="pair:label" image="pair:image" labelColor="grey.300">
                  <HomeIcon />
                </AvatarField>
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Place" source="cdlt:proposes">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Event" source="cdlt:organizes">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Theme" source="pair:hasTopic">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Skill" source="pair:offers">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
          </SideList>
        </Grid>
      </Grid>
    </ShowWithPermissions>
  </Container>
);

export default PersonShow;
