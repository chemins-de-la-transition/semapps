import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';
import TimelineIcon from '@material-ui/icons/Timeline';
import PathFilterSidebar from "./PathFilterSidebar";

const PathList = props => (
  <List aside={<PathFilterSidebar />} {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <TimelineIcon />}
      linkType="show"
    />
  </List>
);

export default PathList;
