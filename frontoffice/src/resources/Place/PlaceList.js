import React from 'react';
import { ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import MapIcon from '../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../commons/Filter';
import CardsList from '../../commons/lists/CardsList';
import PlaceCard from './PlaceCard';
import SearchFilter from '../../commons/SearchFilter';

const PlaceList = (props) => {
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
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:PlaceType' }}
          label="Type de lieu"
        />,
      ]}
      views={{
        map: {
          label: 'Vue carte',
          icon: MapIcon,
          perPage: 1000,
          list: (
            <MapList
              height={xs ? 'calc(100vh - 146px)' : 'calc(100vh - 196px)'}
              latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
              scrollWheelZoom
              popupContent={({ record, basePath }) => (
                <>
                  <PlaceCard record={record} basePath={basePath} variant="compact" />
                  <br />
                  <ShowButton record={record} basePath={basePath} variant="contained" />
                </>
              )}
            />
          ),
        },
        list: {
          label: 'Vue liste',
          icon: ListIcon,
          perPage: 1000,
          list: (
            <Box p={{ xs: 2, sm: 3 }}>
              <CardsList CardComponent={PlaceCard} />
            </Box>
          ),
        },
      }}
      {...props}
    />
  );
}

export default PlaceList;
