import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from '@semapps/auth-provider';
import { Avatar } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
// import PathFilterSidebar from './PathFilterSidebar';

const PathList = (props) => (
  <ListWithPermissions /*aside={<PathFilterSidebar />}*/ {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']}
      leftAvatar={(record) => (
        <Avatar src={record['pair:depictedBy']} alt={record['pair:label']}>
          <TimelineIcon />
        </Avatar>
      )} 
      linkType="show"
    />
  </ListWithPermissions>
);

export default PathList;
