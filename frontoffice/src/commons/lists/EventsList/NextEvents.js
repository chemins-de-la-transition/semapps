import * as React from 'react';
import { useState } from 'react' ;
import { makeStyles } from '@material-ui/core';
import { ListBase } from 'react-admin';
import EventItemsGrid from './EventItemsGrid';
import AgendaFilter from './AgendaFilter';
import useFutureEventSparql from "../../../hooks/useFutureEventSparql";

const useStyles = makeStyles((theme) => ({
  eventListBase: {
    color: theme.palette.primary.contrastText,
    marginBottom: 40
  },
}));

const NextEvents = (similarRecord ) => {
  const classes = useStyles();
  const futureEventSparql = useFutureEventSparql();
  
  const [eventType, setEventType] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const eventTypeFilter = eventType ? { 'pair:hasType': eventType } : {};
  const categoryFilter = category ? { 'pair:hasTopic': category } : {};
  const regionFilter = region ? { 'pair:hasLocation': region } : {};

  return (
    <>
      <AgendaFilter
        eventType={eventType}
        setEventType={setEventType}
        category={category}
        setCategory={setCategory}
        region={region}
        setRegion={setRegion}
      />
      <ListBase
        resource="Event"
        basePath="/Event"
        className={classes.eventListBase}
        perPage={4}
        filter={{ ...eventTypeFilter, ...categoryFilter, ...regionFilter }}
        filterDefaultValues={{ sparqlWhere: futureEventSparql }}
        sort={{ field: 'pair:startDate', order: 'ASC' }}
      >
        <EventItemsGrid similarRecord={similarRecord}/>
      </ListBase>
    </>
  );
};

export default NextEvents;
