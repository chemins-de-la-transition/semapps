import React, { useState } from 'react';
import { ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import frLocale from '@fullcalendar/core/locales/fr';
import { CalendarList } from '@semapps/date-components';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import Calendar from '../../../svg/CalendarIcon';
import MapIcon from '../../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import SparqlFilter from '../../../commons/SparqlFilter';
import SearchFilter from '../../../commons/SearchFilter';
import CardsList from '../../../commons/lists/CardsList';
import EventCard from './EventCard';
import useFutureEventSparql from "../../../hooks/useFutureEventSparql";

const EventList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const [checked, setChecked] = useState(true);
  const clearFilters = () => setChecked(false);
  const futureEventSparql = useFutureEventSparql();

  return (
    <MultiViewsFilterList
      filters={[
        <SearchFilter />,
        <SparqlFilter checked={checked} setChecked={setChecked} sparqlWhere={futureEventSparql} label="N'afficher que les événements à venir" />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label="Mode de voyage"
        />,
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:EventType' }}
          label="Type d'événement"
        />,
      ]}
      views={{
        list: {
          label: 'Vue liste',
          icon: ListIcon,
          perPage: 1000,
          sort: { field: 'pair:startDate', order: 'ASC' },
          filterDefaultValues: { sparqlWhere: futureEventSparql, dereference: [] },
          list: (
            <Box p={xs ? 2 : 3}>
              <CardsList CardComponent={EventCard} />
            </Box>
          ),
        },
        calendar: xs
          ? undefined
          : {
              label: 'Vue calendrier',
              icon: Calendar,
              perPage: 1000,
              filterDefaultValues: { dereference: [] },
              list: (
                <Box p={3}>
                  <CalendarList
                    locale={frLocale}
                    label="pair:label"
                    startDate="pair:startDate"
                    endDate="pair:endDate"
                    linkType="show"
                  />
                </Box>
              ),
            },
        map: {
          label: 'Vue carte',
          icon: MapIcon,
          perPage: 1000,
          filterDefaultValues: { sparqlWhere: futureEventSparql },
          list: (
            <MapList
              height={xs ? 'calc(100vh - 143px)' : 'calc(100vh - 193px)'}
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
              popupContent={({ record, basePath }) => (
                <>
                  <EventCard record={record} basePath={basePath} variant="compact" />
                  <br />
                  <ShowButton record={record} basePath={basePath} variant="contained" />
                </>
              )}
            />
          ),
        },
      }}
      clearFilters={ clearFilters }
      {...props}
    />
  );
};

export default EventList;
