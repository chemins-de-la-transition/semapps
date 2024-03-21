import React from 'react';
import { ShowButton, useTranslate } from 'react-admin';
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
  const translate = useTranslate();
  return (
    <MultiViewsFilterList
      filter= {{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}
      filters={[
        <SearchFilter />,
        /*AnMa: remove regional filter from ecommunity. Needs to be solved by configuration in the future  
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label={translate('app.input.region')} />,
        */
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label={translate('app.input.sector')} />,
        /*AnMa: remove regional filter from ecommunity. Needs to be solved by configuration in the future  
        <Filter
          reference="Type"
          source="cdlt:hasCourseType" */
          /*inverseSource="cdlt:typeOfCourse"*/ /*filter={{ a: 'cdlt:CourseType' }}
          label={translate('app.input.courseType')}
        />,
        */
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:PlaceType' }}
          label={translate('app.input.placeType')}
        />,
      ]}
      views={{
        map: {
          label: 'View map', // srosset81 how to translate this? /*AnMa temporarily hard translated into english*/
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
          label: 'View List', // srosset81 how to translate this? /*AnMa temporarily hard translated into english*/
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
