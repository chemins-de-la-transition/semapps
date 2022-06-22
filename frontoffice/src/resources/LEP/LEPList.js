import React from 'react';
import TabbedList from "../../commons/lists/TabbedList/TabbedList";
import Filter from '../../commons/Filter';
import CourseCard from '../Activity/Course/CourseCard';
import PlaceCard from "../Place/PlaceCard";
import EventCard from "../Activity/Event/EventCard";
import OrganizationCard from '../Agent/Actor/Organization/OrganizationCard';
import SearchFilter from '../../commons/SearchFilter';

const LEPList = (props) => {
  return (
    <TabbedList
      filters={[
        <SearchFilter />,
        <Filter reference="Type" source="cdlt:hasCourseType" inverseSource="cdlt:typeOfCourse" label="Mode de voyage" />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
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
        },
        { 
          resource: 'Organization',
          card: OrganizationCard
        }
      ]}
      {...props}
    />
  );
};

export default LEPList;
