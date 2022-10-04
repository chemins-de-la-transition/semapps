import React from 'react';
import StyleIcon from '@material-ui/icons/Style';
import { Avatar } from '@material-ui/core';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const SectorList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']}
      leftIcon={(record) => (
        <Avatar src={record['pair:depictedBy']} alt={record['pair:label']}>
          <StyleIcon />
        </Avatar>
      )}
     />
  </List>
);

export default SectorList;
