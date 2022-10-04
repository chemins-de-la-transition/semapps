import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const DocumentList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <DescriptionIcon />} linkType="show" />
  </List>
);

export default DocumentList;
