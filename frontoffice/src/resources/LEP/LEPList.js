import React, { useState } from 'react';
import TabbedList from "../../commons/lists/TabbedList/TabbedList";
import Filter from '../../commons/Filter';
import CourseCard from '../Agent/Activity/Course/CourseCard';
import PlaceCard from "../Place/PlaceCard";
import EventCard from "../Agent/Activity/Event/EventCard";
import OrganizationCard from '../Agent/Actor/Organization/OrganizationCard';
import SearchFilter from '../../commons/SearchFilter';
import { Checkbox, FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formGroup: {
    width: '100%',
    marginTop: 14,
    marginBottom: 16,
    color: 'white',
    '& label': {
      color: 'white',
    },
    '& svg': {
      color: 'white',
    },
  },
}));

const LEPList = (props) => {
  const [checked, setChecked] = useState(true);
  const classes = useStyles();

  return (
    <>
    <TabbedList
      filters={[
        <SearchFilter />,
        <FormGroup className={classes.formGroup}>
          <FormControlLabel control={<Checkbox checked={checked} />} label="N'afficher que les activités à venir" onChange={e => setChecked(e.target.checked)}/>
        </FormGroup>,
        <Filter reference="Type" source="cdlt:hasCourseType" inverseSource="cdlt:typeOfCourse" label="Mode de voyage" />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
      ]}
      futureActivities={checked}
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
    </>
  );
};

export default LEPList;
