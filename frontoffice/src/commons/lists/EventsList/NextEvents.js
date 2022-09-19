import * as React from 'react';
import { useState } from 'react' ;
import { makeStyles, Box, useMediaQuery } from '@material-ui/core';
import { ListBase } from 'react-admin';
import EventItemsGrid from './EventItemsGrid';
import AgendaFilter from './AgendaFilter';
import useFutureEventSparql from "../../../hooks/useFutureEventSparql";

const useStyles = makeStyles((theme) => ({
  eventListBase: {
    color: theme.palette.primary.contrastText,
    marginBottom: 40
  },
  eventsBox: {
    overflowX: 'hidden',
    [theme.breakpoints.down('xs')]: {
      overflowX: 'scroll',
    },
  }
}));

const NextEvents = ({ similarRecord }) => {
  const classes = useStyles();
  const futureEventSparql = useFutureEventSparql();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  const [eventType, setEventType] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const eventTypeFilter = eventType ? { 'pair:hasType': eventType } : {};
  const categoryFilter = category ? { 'pair:hasSector': category } : {};
  const regionFilter = region ? { 'cdlt:hasRegion': region } : {};

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
      <Box className={classes.eventsBox}>
      <ListBase
        resource="Event"
        basePath="/Event"
        className={classes.eventListBase}
        perPage={similarRecord ? 5 : xs ? 10 : 4}
        filter={{ ...eventTypeFilter, ...categoryFilter, ...regionFilter }}
        filterDefaultValues={{ sparqlWhere: futureEventSparql }}
        sort={{ field: 'pair:startDate', order: 'ASC' }}
      >
        <EventItemsGrid similarRecord={similarRecord}/>
      </ListBase>
      </Box>
    </>
  );
};

export default NextEvents;
