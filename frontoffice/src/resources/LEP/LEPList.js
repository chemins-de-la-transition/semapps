import React from 'react';
import TabbedList from "../../commons/lists/TabbedList/TabbedList";
import Filter from '../../commons/Filter';
import CourseCard from '../Activity/Course/CourseCard';
import PlaceCard from "../Place/PlaceCard";
import EventCard from "../Activity/Event/EventCard";

const LEPList = (props) => {
  return (
    <TabbedList
      filters={[
        <Filter reference="Type" source="cdlt:hasCourseType" inverseSource="cdlt:typeOfCourse" label="Type de voyage" />,
        <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Secteur d'activité" />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Path" source="cdlt:courseOn" inverseSource="cdlt:hasCourse" label="Chemin" />,
      ]}
      tabs={[
        {
          resource: 'Place',
          card: PlaceCard
        },
        {
          resource: 'Event',
          card: EventCard
        },
        {
          resource: 'Course',
          card: CourseCard
        },
      ]}
      {...props}
    />
  );
};

export default LEPList;
