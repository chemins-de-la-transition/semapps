import React from 'react';
import { DateField } from 'react-admin';
import { SimpleList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from "@semapps/auth-provider";
import DateRangeIcon from '@material-ui/icons/DateRange';
import CourseFilterSidebar from "./CourseFilterSidebar";

const CourseList = props => (
  <ListWithPermissions aside={<CourseFilterSidebar />} {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => (
        <>
          Du&nbsp;
          <DateField record={record} source="pair:startDate" />
          &nbsp;au&nbsp;
          <DateField record={record} source="pair:endDate" />
        </>
      )}
      leftAvatar={() => <DateRangeIcon />}
      linkType="show"
    />
  </ListWithPermissions>
);

export default CourseList;
