import React from 'react';
import { ShowButton, useTranslate } from 'react-admin';
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
  const translate = useTranslate();
  return (
    <MultiViewsFilterList
      filters={[
        <SearchFilter />,
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="pair:typeOf"*/ filter={{ a: 'cdlt:OfferAndNeedType' }}
          label={translate('app.input.offerAndNeedType')}
        />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label={translate('app.input.sector')} />,
        <Filter reference="Topic" source="pair:hasTopic" inverseSource="pair:topicOf" label={translate('app.input.topic')} />,
      ]}
      views={{
        map: {
          label: translate('app.action.mapView'),
          icon: MapIcon,
          perPage: 1000,
          list: (
            <MapList
              height={xs ? 'calc(100vh - 143px)' : 'calc(100vh - 193px)'}
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
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
          label: translate('app.action.listView'),
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
