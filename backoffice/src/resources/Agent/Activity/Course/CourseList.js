import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import CourseFilterSidebar from './CourseFilterSidebar';
import PublishButton from '../../../../pair/PublishButton';
import List from "../../../../layout/list/List";

const CourseList = (props) => (
  <List aside={<CourseFilterSidebar />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ShowButton />
      <EditButton />
      <PublishButton />
    </Datagrid>
  </List>
);

export default CourseList;
