import React from 'react';
import { useRecordContext } from 'react-admin';
import { MapField } from '@semapps/geo-components';

const EventMapField = () => {
  const record = useRecordContext()
  return (
    <MapField
      record = {record}
      source="pair:hasLocation"
      address={(record) => record?.['pair:label'] + ', ' + record?.['pair:hasLocation']?.['pair:label']}
      latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
      longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
      typographyProps={{ variant: 'body2', color: 'secondary' }}
      scrollWheelZoom={false}
      dragging={false}
    />
  )
}

export default EventMapField;
