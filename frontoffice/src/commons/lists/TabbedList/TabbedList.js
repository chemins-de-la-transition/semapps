import React from 'react';
import TabbedListView from "./TabbedListView";
import ListBaseWithOnlyPublishedResources from '../ListBaseWithOnlyPublishedResources';

const TabbedList = ({ tabs, filters, futureActivities, ...rest }) => {
  return(
    <ListBaseWithOnlyPublishedResources perPage={1000} {...rest}>
      <TabbedListView tabs={tabs} filters={filters} futureActivities={futureActivities}/>
    </ListBaseWithOnlyPublishedResources>
  )
};

export default TabbedList;
