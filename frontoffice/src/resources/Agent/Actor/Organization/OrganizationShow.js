import React from 'react';
import { TextField, UrlField, ChipField, SingleFieldList } from 'react-admin';
import { MainList, SideList, Hero, AvatarField, GridList } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Container, Grid, makeStyles } from '@material-ui/core';
import OrganizationTitle from './OrganizationTitle';
import HomeIcon from '@material-ui/icons/Home';
import ChipWithResourceIcon from '../../../../commons/ChipWithResourceIcon';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    '& .MuiPaper-root': {
      padding: '1rem',
      [theme.breakpoints.up('sm')]: {
        padding: '2rem',
      },
    }
  },
}));

const OrganizationShow = (props) => {
  const classes = useStyles();
  return (
  <Container className={classes.mainContainer} maxWidth="lg">
    <ShowWithPermissions title={<OrganizationTitle />} {...props}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={9}>
          <Hero image="pair:depictedBy">
            <TextField source="pair:comment" />
            <UrlField source="pair:homePage" />
          </Hero>
          <MainList>
            <MarkdownField source="pair:description" />
            <ReferenceArrayField  reference="Sector" source="pair:hasSector">
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
        <Grid item xs={12} md={3}>
          <SideList>
            <ReferenceArrayField reference="Person" source="pair:affiliates">
              <GridList xs={3} md={6} linkType="show">
                <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Organization" source="pair:partnerOf">
              <GridList xs={3} md={6} linkType="show">
                <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                  <HomeIcon />
                </AvatarField>
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Project" source="pair:involvedIn">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField
              label="Evénements"
              reference="Event"
              filter={{ '@type': 'pair:Event' }}
              source="pair:involvedIn"
            >
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Theme" source="pair:hasTopic">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Document" source="pair:documentedBy">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Activity" source="cdlt:organizes">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
          </SideList>
        </Grid>
      </Grid>
    </ShowWithPermissions>
  </Container>
  );
}

export default OrganizationShow;
