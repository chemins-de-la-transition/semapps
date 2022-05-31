import React, {useState} from 'react';
import { ListBase } from 'react-admin';
import { useLocation } from 'react-router';
import MultiViewsFilterListView from "./MultiViewsFilterListView";

const MultiViewsFilterList = ({ views, filters, clearFilters, ...rest }) => {
  const query = new URLSearchParams(useLocation().search);
  const activatedViews = Object.keys(views).filter((key) => views[key]);
  const initialView =
    query.has('view') && activatedViews.includes(query.get('view')) ? query.get('view') : activatedViews[0];
  const [currentView, setView] = useState(initialView);

  return(
    <ListBase
      perPage={views[initialView].perPage}
      filterDefaultValues={views[initialView].filterDefaultValues}
      sort={views[initialView].sort}
      {...rest}
    >
      <MultiViewsFilterListView views={views} filters={filters} currentView={currentView} setView={setView} clearFilters={clearFilters}/>
    </ListBase>
  )
};

export default MultiViewsFilterList;
