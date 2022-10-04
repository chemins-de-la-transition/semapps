import React from 'react';
import PanToolIcon from '@material-ui/icons/PanTool';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const SkillList = (props) => (
  <List {...props}>
    <SimpleList primaryText={(record) => record['pair:label']} leftAvatar={() => <PanToolIcon />} linkType="show" />
  </List>
);

export default SkillList;
