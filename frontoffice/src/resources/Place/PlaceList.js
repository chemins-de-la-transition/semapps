import React from 'react';
import { MultiViewsList, SimpleList } from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import { List } from '@semapps/archipelago-layout';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

const PlaceList = props => (
  <MultiViewsList
    ListComponent={List}
    views={{
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={record => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={record => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            label={record => record?.['pair:label']}
            description={record => record?.['pair:comment']}
            scrollWheelZoom
          />
        )
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        list: (
          <SimpleList
            primaryText={record => record['pair:label']}
            secondaryText={record => record['pair:comment']}
            leftAvatar={record => (
              <img src={record['image'] || process.env.PUBLIC_URL + '/logo192.png'} width="100%" alt="SemApps" />
            )}
            linkType="show"
          />
        )
      }
    }}
    {...props}
  />
);

export default PlaceList;
