import React from 'react';
import { ListBase } from 'react-admin';
import TabbedListView from "./TabbedListView";

const TabbedList = ({ tabs, filters, futureActivities, ...rest }) => {
  return(
    <ListBase perPage={1000} {...rest}>
      <TabbedListView tabs={tabs} filters={filters} futureActivities={futureActivities}/>
    </ListBase>
  )
};

export default TabbedList;
