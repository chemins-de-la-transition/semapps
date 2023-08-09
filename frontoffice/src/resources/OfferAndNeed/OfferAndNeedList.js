import React from 'react';
import { ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { MapList } from '@semapps/geo-components';
import MultiViewsFilterList from '../../commons/lists/MultiViewsFilterList/MultiViewsFilterList';
import MapIcon from '../../svg/MapIcon';
import ListIcon from '@material-ui/icons/List';
import Filter from '../../commons/Filter';
import CardsList from '../../commons/lists/CardsList';
import OfferAndNeedCard from './OfferAndNeedCard';
import SearchFilter from '../../commons/SearchFilter';

const OfferAndNeedList = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <MultiViewsFilterList
      filter= {{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}
      filters={[
        <SearchFilter />,
        <Filter reference="Region" source="cdlt:hasRegion" inverseSource="cdlt:regionOf" label="Région" />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
        <Filter
          reference="Type"
          source="cdlt:hasCourseType"
          /*inverseSource="cdlt:typeOfCourse"*/ filter={{ a: 'cdlt:CourseType' }}
          label="Mode de voyage"
        />,
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="cdlt:typeOf"*/ filter={{ a: 'pair:OfferAndNeedType' }}
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
                  <OfferAndNeedCard record={record} basePath={basePath} variant="compact" />
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
              <CardsList CardComponent={OfferAndNeedCard} />
            </Box>
          ),
        },
      }}
      {...props}
    />
  );
}

export default OfferAndNeedList;
