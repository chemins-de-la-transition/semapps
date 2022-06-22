import React, { useState } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import CardsList from '../../../commons/lists/CardsList';
import CourseCard from './CourseCard';
import SearchFilter from '../../../commons/SearchFilter';
import SparqlFilter from '../../../commons/SparqlFilter';
import useFutureEventSparql from "../../../hooks/useFutureEventSparql";

const CourseList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const [checked, setChecked] = useState(true);
  const clearFilters = () => setChecked(false);
  const futureCoursesSparql = useFutureEventSparql();

  return (
    <MultiViewsFilterList
      filters={[
        <SearchFilter />,
        <SparqlFilter checked={checked} setChecked={setChecked} sparqlWhere={futureCoursesSparql} label="N'afficher que les voyages à venir" />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label="Mode de voyage"
        />,
      ]}
      views={{
        list: {
          label: 'Vue liste',
          icon: ListIcon,
          perPage: 1000,
          sort: { field: 'pair:startDate', order: 'ASC' },
          filterDefaultValues: { sparqlWhere: futureCoursesSparql },
          filter: { sparqlWhere: futureCoursesSparql},
          list: (
            <Box p={xs ? 2 : 3}>
              <CardsList CardComponent={CourseCard} />
            </Box>
          ),
        },
      }}
      clearFilters={ clearFilters }
      {...props}
    />
  );
};

export default CourseList;
