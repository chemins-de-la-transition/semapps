import React from 'react';
import TabbedList from "../../commons/lists/TabbedList/TabbedList";
import Filter from '../../commons/Filter';
import CourseCard from '../Activity/Course/CourseCard';
import PlaceCard from "../Place/PlaceCard";
import EventCard from "../Activity/Event/EventCard";
import SearchFilter from '../../commons/SearchFilter';

const LEPList = (props) => {
  return (
    <TabbedList
      filters={[
        <SearchFilter />,
        <Filter reference="Type" source="cdlt:hasCourseType" inverseSource="cdlt:typeOfCourse" label="Type de voyage" />,
        <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Secteur d'activité" />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
      ]}
      tabs={[
        {
          resource: 'Course',
          card: CourseCard
        },
        {
          resource: 'Event',
          card: EventCard
        },
        {
          resource: 'Place',
          card: PlaceCard
        }
      ]}
      {...props}
    />
  );
};

export default LEPList;
