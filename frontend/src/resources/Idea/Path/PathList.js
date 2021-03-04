import React from 'react';
import { List, SimpleList } from '@semapps/archipelago-layout';
import TimelineIcon from '@material-ui/icons/Timeline';

const PathList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <TimelineIcon />}
      linkType="show"
    />
  </List>
);

export default PathList;
