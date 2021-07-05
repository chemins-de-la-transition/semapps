import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import { ListWithPermissions } from '@semapps/auth-provider';
import CourseFilterSidebar from './CourseFilterSidebar';
import PublishButton from '../../../../pair/PublishButton';

const CourseList = (props) => (
  <ListWithPermissions aside={<CourseFilterSidebar />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ShowButton />
      <EditButton />
      <PublishButton />
    </Datagrid>
  </ListWithPermissions>
);

export default CourseList;
