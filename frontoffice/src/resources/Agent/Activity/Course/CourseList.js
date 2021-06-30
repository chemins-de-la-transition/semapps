import React from 'react';
import { DateField } from 'react-admin';
import { List, SimpleList } from '@semapps/archipelago-layout';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CourseFilterSidebar from "./CourseFilterSidebar";

const CourseList = props => (
  <List aside={<CourseFilterSidebar />} {...props}>
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
  </List>
);

export default CourseList;