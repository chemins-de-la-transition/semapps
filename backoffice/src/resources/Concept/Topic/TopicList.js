import React from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import List from "../../../layout/list/List";
import SimpleList from "../../../common/list/SimpleList";

const TopicList = (props) => (
  <List {...props}>
    <SimpleList primaryText={(record) => record['pair:label']} leftAvatar={() => <LocalOfferIcon />} linkType="show" />
  </List>
);

export default TopicList;
