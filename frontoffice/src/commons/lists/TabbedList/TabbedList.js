import React from 'react';
import { ListBase } from 'react-admin';
import TabbedListView from "./TabbedListView";

const TabbedList = ({ tabs, filters, ...rest }) => {
  return(
    <ListBase perPage={1000} {...rest}>
      <TabbedListView tabs={tabs} filters={filters} />
    </ListBase>
  )
};

export default TabbedList;
