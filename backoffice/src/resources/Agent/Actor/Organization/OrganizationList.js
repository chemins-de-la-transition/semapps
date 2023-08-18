import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton, useTranslate } from 'react-admin';
import { MultiViewsList } from '@semapps/list-components';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import PublishButton from '../../../../pair/PublishButton';
import List from "../../../../layout/list/List";

const OrganizationList = (props) => {
  const translate = useTranslate();
  return (
  <MultiViewsList
    ListComponent={List}
    views={{
      list: {
        label: translate('app.action.listView'),
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
        label: translate('app.action.mapView'),
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
            label={(record) => record['pair:label']}
            description={(record) => record['pair:comment']}
            scrollWheelZoom
          />
        ),
      },
    }}
    {...props}
  />
  );
}

export default OrganizationList;
