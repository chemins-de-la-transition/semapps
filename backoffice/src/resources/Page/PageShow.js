import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { MarkdownField } from '@semapps/markdown-components';
import PageTitle from './PageTitle';
import Show from "../../layout/show/Show";
import MainList from "../../common/list/MainList/MainList";

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: 9
  }
}));

const PageShow = props => {
  const classes = useStyles();
  return (
    <Show title={<PageTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MarkdownField source="semapps:content" addLabel={false} />
      </MainList>
    </Show>
  );
};

export default PageShow;
