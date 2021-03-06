import React from 'react';
import { ListBase, ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import frLocale from '@fullcalendar/core/locales/fr';
import { CalendarList } from '@semapps/date-components';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList';
import Calendar from '../../../svg/CalendarIcon';
import MapIcon from '../../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import CardsList from '../../../commons/lists/CardsList';
import EventCard from "./EventCard";

const EventList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <ListBase perPage={1000} {...props}>
      <MultiViewsFilterList
        filters={[
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
          calendar: xs
            ? undefined
            : {
                label: 'Calendrier',
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
            label: 'Carte',
            icon: MapIcon,
            list: (
              <MapList
                height={xs ? 'calc(100vh - 146px)' : 'calc(100vh - 198px)'}
                latitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
                longitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
                popupContent={({ record, basePath }) => (
                  <>
                    <EventCard record={record} variant="compact" />
                    <ShowButton record={record} basePath={basePath} variant="containedPrimary" />
                  </>
                )}
              />
            ),
          },
          list: {
            label: 'Liste',
            icon: ListIcon,
            list: (
              <Box p={xs ? 2 : 3}>
                <CardsList CardComponent={EventCard} />
              </Box>
            ),
          },
        }}
      />
    </ListBase>
  );
};

export default EventList;
