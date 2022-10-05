import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { Hero, MainList, SideList } from '../../../common/list';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/field-components';
import TopicTitle from './TopicTitle';
import Show from "../../../layout/show/Show";

const TopicShow = (props) => (
  <Show title={<TopicTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <Hero>
          <TextField source="pair:comment" />
        </Hero>
        <MainList>
          <MarkdownField source="pair:description" />
        </MainList>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SideList>
          <ReferenceArrayField reference="Subject" source="pair:topicOf">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" />
            </SingleFieldList>
          </ReferenceArrayField>
        </SideList>
      </Grid>
    </Grid>
  </Show>
);

export default TopicShow;
