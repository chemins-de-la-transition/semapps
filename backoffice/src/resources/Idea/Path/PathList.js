import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import PublishButton from '../../../pair/PublishButton';
import List from "../../../layout/list/List";

const PathList = (props) => (
  <List /*aside={<PathFilterSidebar />}*/ {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ShowButton />
      <EditButton />
      <PublishButton />
    </Datagrid>
  </List>
);

export default PathList;
