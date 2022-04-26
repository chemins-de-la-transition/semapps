import * as React from 'react';
import { useState, useEffect } from 'react' ;
import { makeStyles } from '@material-ui/core';
import { ListBase } from 'react-admin';
import EventItemsGrid from './EventItemsGrid';
import AgendaFilter from './AgendaFilter';

const useStyles = makeStyles((theme) => ({
  eventListBase: {
    color: theme.palette.primary.contrastText,
  },
}));

const NextEvents = () => {
  const classes = useStyles();

  const [eventType, setEventType] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const eventTypeFilter = eventType ? {'pair:hasType': eventType} : {};
  const categoryFilter = category ? {'pair:hasTopic': category} : {};
  const regionFilter = region ? {'pair:hasLocation': region} : {};

  const filter = Object.assign({}, 
    { 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/open'}, eventTypeFilter, categoryFilter, regionFilter);
    // TODO : add a filter to only keep the future events

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
      <ListBase resource="Event" basePath="/Event" className={classes.eventListBase} style={{marginBottom:40}} perPage={4} filter={filter} sort={{ field: 'pair:startDate', order: 'ASC'}}>
        <EventItemsGrid />
      </ListBase>
    </>
  );
};

export default NextEvents;
