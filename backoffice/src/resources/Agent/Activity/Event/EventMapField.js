import React from 'react';
import { useRecordContext } from 'react-admin';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';

const EventMapField = () => {
  const record = useRecordContext()
  return (
    <>
      { record["pair:hostedIn"] &&
        <ReferenceField record={record} reference="Place" source="pair:hostedIn" link={false}>
          <MapField
            record={record}
            address={(record) => record?.['pair:label'] + ', ' + record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
            scrollWheelZoom={false}
            dragging={false}
          />
        </ReferenceField>
      }
      { ! record["pair:hostedIn"] && record["pair:hasLocation"] &&
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
      }
    </>
  )
}

export default EventMapField;
