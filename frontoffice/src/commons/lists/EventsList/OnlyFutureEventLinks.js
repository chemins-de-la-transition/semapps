
import React from 'react';
import { TextField, useListContext, Link, linkToRecord } from 'react-admin';

const OnlyFutureEventLinks = () => {
  const { ids, data, basePath } = useListContext();
  const futureEvents = ids.filter((id) => data[id] && (data[id]?.['pair:startDate']>(new Date()).toISOString()) )
  return (
    futureEvents.slice(0,5).map((id) =>
      <Link to={linkToRecord(basePath, id, "show")} key={id}>
        <TextField record={data[id]} source="pair:label" />
      </Link>
    )
  )
};

export default OnlyFutureEventLinks;