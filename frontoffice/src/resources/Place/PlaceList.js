import React from 'react';
import { ListBase, ShowButton } from 'react-admin';
import { Box } from '@material-ui/core';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../commons/lists/MultiViewsFilterList';
import MapIcon from '../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../commons/Filter';
import CardsList from '../../commons/lists/CardsList';
import PlaceCard from './PlaceCard';

const PlaceList = (props) => (
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
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:PlaceType' }}
          label="Type de lieu"
        />,
      ]}
      views={{
        map: {
          label: 'Carte',
          icon: MapIcon,
          list: (
            <MapList
              latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
              scrollWheelZoom
              popupContent={({ record, basePath }) => (
                <>
                  <PlaceCard record={record} variant="compact" />
                  <ShowButton record={record} basePath={basePath} variant="outlinedPrimary" />
                </>
              )}
            />
          ),
        },
        list: {
          label: 'Liste',
          icon: ListIcon,
          list: (
            <Box p={{ xs: 2, sm: 3 }}>
              <CardsList CardComponent={PlaceCard} />
            </Box>
          ),
        },
      }}
    />
  </ListBase>
);

export default PlaceList;
