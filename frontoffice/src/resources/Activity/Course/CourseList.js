import React from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import CardsList from '../../../commons/lists/CardsList';
import CourseCard from './CourseCard';
import SearchFilter from '../../../commons/SearchFilter';

const CourseList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <MultiViewsFilterList
      filters={[
        <SearchFilter />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Theme" source="pair:hasTopic" inverseSource="pair:topicOf" label="Secteur d'activité" />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label="Type de voyage"
        />,
      ]}
      views={{
        list: {
          label: 'Vue liste',
          icon: ListIcon,
          perPage: 1000,
          list: (
            <Box p={xs ? 2 : 3}>
              <CardsList CardComponent={CourseCard} />
            </Box>
          ),
        },
      }}
      {...props}
    />
  );
};

export default CourseList;
