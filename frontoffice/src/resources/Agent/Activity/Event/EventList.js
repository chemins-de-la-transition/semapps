import React, { useState } from 'react';
import { ShowButton, useTranslate } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import frLocale from '@fullcalendar/core/locales/fr';
import { CalendarList } from '@semapps/date-components';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import Calendar from '../../../../svg/CalendarIcon';
import MapIcon from '../../../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../../commons/Filter';
import SparqlFilter from '../../../../commons/SparqlFilter';
import SearchFilter from '../../../../commons/SearchFilter';
import CardsList from '../../../../commons/lists/CardsList';
import EventCard from './EventCard';
import useFutureEventSparql from "../../../../hooks/useFutureEventSparql";

const EventList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const [checked, setChecked] = useState(true);
  const clearFilters = () => setChecked(false);
  const futureEventSparql = useFutureEventSparql();
  const translate = useTranslate();

  return (
    <MultiViewsFilterList
      filter= {{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}
      filters={[
        <SearchFilter />,
        <SparqlFilter checked={checked} setChecked={setChecked} sparqlWhere={futureEventSparql} label={translate('app.card.event.onlyFutureEvents')} />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label={translate('app.input.sector')} />,
        <Filter reference="Topic" source="pair:hasTopic" inverseSource="pair:topicOf" label={translate('app.input.topic')} />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label={translate('app.input.courseType')}
        />,
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:EventType' }}
          label={translate('app.input.event.type')}
        />,
        <Filter 
          reference="TargetAudience"
          source="cdlt:hasTargetAudience"
          label={translate('app.input.event.hasTargetAudience')}
        />,
      ]}
      views={{
        list: {
          label: translate('app.action.listView'),
          icon: ListIcon,
          perPage: 1000,
          sort: { field: 'pair:startDate', order: 'ASC' },
          filterDefaultValues: { sparqlWhere: futureEventSparql, blankNodes: [] },
          list: (
            <Box p={xs ? 2 : 3}>
              <CardsList CardComponent={EventCard} />
            </Box>
          ),
        },
        calendar: xs
          ? undefined
          : {
              label: translate('app.action.calendarView'),
              icon: Calendar,
              perPage: 1000,
              filterDefaultValues: { blankNodes: [] },
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
          label: translate('app.action.mapView'),
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
