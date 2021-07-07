import React from 'react';
import { ListBase } from 'react-admin';
import { Box } from '@material-ui/core';
import frLocale from '@fullcalendar/core/locales/fr';
import { CalendarList } from '@semapps/date-components';
import { MapList } from "@semapps/geo-components";
import MultiViewsFilterList from "../../../../commons/MultiViewsFilterList";
import Calendar from "../../../../svg/CalendarIcon";
import MapIcon from "../../../../svg/MapIcon";
import ListIcon from "@material-ui/icons/List";
import Filter from "../../../../commons/Filter";
import CardsList from "../../../../commons/CardsList";

const EventList = (props) => (
  <ListBase perPage={1000} {...props}>
    <MultiViewsFilterList
      filters={[
        <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Thématique" />,
        <Filter reference="Type" source="cdlt:hasCourseType" /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }} label="Type de parcours" />,
        <Filter reference="Type" source="pair:hasEventType" /*inverseSource="cdlt:typeOfEvent"*/ filter={{ a: 'pair:EventType' }} label="Type d'événement" />
      ]}
      views={{
        calendar: {
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
          )
        },
        map: {
          label: 'Carte',
          icon: MapIcon,
          list: (
            <MapList
              height="calc(100vh - 198px)"
              latitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
              label={(record) => record?.['pair:label']}
              description={(record) => record?.['pair:comment']}
            />
          )
        },
        list: {
          label: 'Liste',
          icon: ListIcon,
          list: (
            <Box p={3}>
              <CardsList />
            </Box>
          )
        }
      }}
    />
  </ListBase>
);

export default EventList;
