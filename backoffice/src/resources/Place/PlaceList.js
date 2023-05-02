import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import { MultiViewsList } from '@semapps/list-components';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import PublishButton from '../../pair/PublishButton';
import List from "../../layout/list/List";

const PlaceList = (props) => (
  <MultiViewsList
    ListComponent={List}
    views={{
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        list: (
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <ShowButton />
            <EditButton />
            <PublishButton />
          </Datagrid>
        ),
      },
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            label={(record) => record?.['pair:label']}
            description={(record) => record?.['pair:comment']}
            scrollWheelZoom
          />
        ),
      },
    }}
    {...props}
  />
);

export default PlaceList;
