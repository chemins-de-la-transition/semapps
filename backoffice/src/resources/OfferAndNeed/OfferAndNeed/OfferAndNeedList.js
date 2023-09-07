import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import PublishButton from '../../../pair/PublishButton';
import List from "../../../layout/list/List";
import OfferAndNeedFilterSidebar from './OfferAndNeedFilterSidebar';

const OfferAndNeedList = (props) => (
  <List aside={<OfferAndNeedFilterSidebar />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ShowButton />
      <EditButton />
      <PublishButton />
    </Datagrid>
  </List>
);

export default OfferAndNeedList;
