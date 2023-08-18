import React from 'react';
import { useTranslate } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { MultiViewsList } from '@semapps/list-components';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import SimpleList from "../../../../common/list/SimpleList";
import List from "../../../../layout/list/List";

const PersonList = (props) => {
  const translate = useTranslate();
  return (
  <MultiViewsList
    ListComponent={List}
    views={{
      list: {
        label: translate('app.action.listView'),
        icon: ListIcon,
        sort: { field: 'pair:lastName', order: 'DESC' },
        perPage: 25,
        list: (
          <SimpleList
            primaryText={(record) => record['pair:label']}
            secondaryText={(record) => record['pair:comment']}
            leftIcon={(record) => (
              <Avatar src={record['pair:depictedBy']} alt={record['pair:label']}>
                <PersonIcon />
              </Avatar>
            )}
            linkType="show"
          />
        ),
      },
      map: {
        label: translate('app.action.mapView'),
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={(record) => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={(record) => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
            label={(record) => record['label']}
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

export default PersonList;
