import React, { useState } from 'react';
import {useTranslate } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import MultiViewsFilterList from '../../../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../../commons/Filter';
import CardsList from '../../../../commons/lists/CardsList';
import CourseCard from './CourseCard';
import SearchFilter from '../../../../commons/SearchFilter';
import SparqlFilter from '../../../../commons/SparqlFilter';
import useFutureEventSparql from "../../../../hooks/useFutureEventSparql";

const CourseList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const [checked, setChecked] = useState(true);
  const clearFilters = () => setChecked(false);
  const futureCoursesSparql = useFutureEventSparql();
  const translate = useTranslate();

  return (
    <MultiViewsFilterList
      filters={[
        <SearchFilter />,
        <SparqlFilter checked={checked} setChecked={setChecked} sparqlWhere={futureCoursesSparql} label={translate('app.card.course.onlyFutureCourse')}/>,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label={translate('app.input.region')} />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label={translate('app.input.sector')} />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label={translate('app.input.courseType')}
        />,
        <Filter 
          reference="TargetAudience"
          source="cdlt:hasTargetAudience"
          label={translate('app.input.targetAudience')}
        />,
      ]}
      views={{
        list: {
          label: 'Vue liste', //@
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
