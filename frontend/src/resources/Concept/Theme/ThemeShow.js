import React from 'react';
import { TextField } from 'react-admin';
import { Grid } from "@material-ui/core";
import { Hero, Show, MarkdownField, MainList } from '@semapps/archipelago-layout';
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
    </Grid>
  </Show>
);

export default ThemeShow;
