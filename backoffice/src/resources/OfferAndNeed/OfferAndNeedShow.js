import React from 'react';
import { TextField, UrlField, EmailField, ChipField, SingleFieldList } from 'react-admin';
import { Grid } from '@material-ui/core';
import { AvatarWithLabelField, SeparatedListField, ReferenceArrayField, ReferenceField } from '@semapps/field-components';
import { MarkdownField } from '@semapps/markdown-components';
import { MapField } from '@semapps/geo-components';
import { GridList } from '@semapps/list-components';
import OfferAndNeedTitle from './OfferAndNeedTitle';
import Show from "../../layout/show/Show";
import { MainList, SideList, Hero } from "../../common/list";

const OfferAndNeedShow = (props) => (
  <Show title={<OfferAndNeedTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero image="pair:depictedBy">
          <TextField source="pair:comment" />
          <ReferenceField source="cdlt:hasRegion" reference="Region" link={false}>
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceArrayField source="pair:hasType" reference="Type">
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
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" addLabel />
          <MapField
            source="pair:hasLocation"
            address={(record) => record?.['pair:hasLocation']?.['pair:label']}
            latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
            scrollWheelZoom={false}
            dragging={false}
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
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default OfferAndNeedShow;
