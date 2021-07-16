import React from 'react';
import { ListBase } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import MultiViewsFilterList from '../../../commons/lists/MultiViewsFilterList';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../../commons/Filter';
import CardsList from '../../../commons/lists/CardsList';
import CourseCard from './CourseCard';

const CourseList = (props) => {
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
        ]}
        views={{
          list: {
            label: 'Liste',
            icon: ListIcon,
            list: (
              <Box p={xs ? 2 : 3}>
                <CardsList CardComponent={CourseCard} />
              </Box>
            ),
          },
        }}
      />
    </ListBase>
  );
};

export default CourseList;
