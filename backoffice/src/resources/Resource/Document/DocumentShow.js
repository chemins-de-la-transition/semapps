import React from 'react';
import { SingleFieldList, ChipField, DateField } from 'react-admin';
import { Grid, Typography } from '@material-ui/core';
import { ReferenceArrayField, AvatarWithLabelField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import { MarkdownField } from '@semapps/markdown-components';
import DocumentTitle from './DocumentTitle';
import { MainList, SideList } from '../../../common/list';
import Show from "../../../layout/show/Show";

const DocumentShow = props => (
  <Show title={<DocumentTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MainList>
          <MarkdownField source="pair:description" addLabel={false} />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Course" source="pair:documents">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Type" source="pair:hasType">
            <SingleFieldList linkType={false}>
              <ChipField source="pair:label" color="secondary" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="dc:creator">
            <GridList xs={6} linkType="show">
              <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <DateField source="dc:created" showTime />
          <DateField source="dc:modified" showTime />
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default DocumentShow;
