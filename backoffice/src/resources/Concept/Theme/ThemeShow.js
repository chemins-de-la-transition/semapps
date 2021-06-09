import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Grid } from "@material-ui/core";
import { Hero, Show, MainList, SideList } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import ThemeTitle from './ThemeTitle';

const ThemeShow = props => (
  <Show title={<ThemeTitle />} {...props}>
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

export default ThemeShow;
