import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const StatusList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']}
      secondaryText={(record) => record.type}
      leftAvatar={() => <VisibilityIcon />}
    />
  </List>
);

export default StatusList;
