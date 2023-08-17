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
        <Filter
          reference="Type"
          source="pair:hasType"
          /*inverseSource="pair:typeOf"*/ filter={{ a: 'cdlt:OfferAndNeedType' }}
          label="Type d'annonce"
        />,
        <Filter reference="Sector" source="pair:hasSector" inverseSource="pair:sectorOf" label="Secteur d'activité" />,
        <Filter reference="Topic" source="pair:hasTopic" inverseSource="pair:topicOf" label="Mots clé" />,
      ]}
      views={{
        map: {
          label: 'Vue carte',
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
