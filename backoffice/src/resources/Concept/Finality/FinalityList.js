import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import List from "../../../layout/list/List";
import { SimpleList } from "../../../common/list";

const FinalityList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']} leftAvatar={() => <VisibilityIcon />} linkType="edit" 
    />
  </List>
);

export default FinalityList;
