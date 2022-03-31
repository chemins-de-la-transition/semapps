import React from 'react';
import { ListBase, ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router';
import frLocale from '@fullcalendar/core/locales/fr';
import { CalendarList } from '@semapps/date-components';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList';
import Calendar from '../../../svg/CalendarIcon';
import MapIcon from '../../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import UpcomingFilter from '../../../commons/UpcomingFilter';
import CardsList from '../../../commons/lists/CardsList';
import EventCard from './EventCard';

const EventList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  // Filter out finished events only for non-calendar view
  const query = new URLSearchParams(useLocation().search);
  const view = query.has('view') ? query.get('view') : xs ? 'map' : 'calendar';
  const filter = view === 'calendar' ? undefined : { 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/open' };

  return (
    <ListBase perPage={1000} filter={filter} sort={{ field: 'pair:startDate', order: 'ASC' }} {...props}>
      <MultiViewsFilterList
        filters={[
          <UpcomingFilter initialChecked source="http://virtual-assembly.org/ontologies/pair#endDate" label="N'afficher que les événements à venir" />,
          <Filter reference="Region" source="pair:hasLocation" inverseSource="pair:locationOf" label="Région" />,
          <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Thématique" />,
          <Filter
            reference="Type"
            source="cdlt:hasCourseType"
            /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
            label="Type de parcours"
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
            list: (
              <MapList
                height={xs ? 'calc(100vh - 143px)' : 'calc(100vh - 193px)'}
                latitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
                longitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
                popupContent={({ record, basePath }) => (
                  <>
                    <EventCard record={record} basePath={basePath} variant="compact" />
                    <br />
                    <ShowButton record={record} basePath={basePath} variant="contained" />
                  </>
                )}
              />
            ),
          }
        }}
      />
    </ListBase>
  );
};

export default EventList;
