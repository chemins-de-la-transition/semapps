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
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Path" source="cdlt:courseOn" inverseSource="cdlt:hasCourse" label="Chemin" />,
        <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Secteur d'activité" />,
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
