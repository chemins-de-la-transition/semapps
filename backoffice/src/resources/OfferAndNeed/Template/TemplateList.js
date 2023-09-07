import React from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const TemplateList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']} leftAvatar={() => <AnnouncementIcon />} linkType="edit" 
    />
  </List>
);

export default TemplateList;
