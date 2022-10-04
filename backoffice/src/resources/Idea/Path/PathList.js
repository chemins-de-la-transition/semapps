import React from 'react';
import { Avatar } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const PathList = (props) => (
  <List /*aside={<PathFilterSidebar />}*/ {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']}
      leftAvatar={(record) => (
        <Avatar src={record['pair:depictedBy']} alt={record['pair:label']}>
          <TimelineIcon />
        </Avatar>
      )} 
      linkType="show"
    />
  </List>
);

export default PathList;
