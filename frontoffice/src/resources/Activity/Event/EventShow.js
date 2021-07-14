import React from 'react';
import { ShowBase } from 'react-admin';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import MarkdownField from "../../../commons/fields/MarkdownField";
import HeaderShow from '../../../commons/HeaderShow';
import Events from '../../../commons/lists/EventsList/EventsList';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import EventDetails from './EventDetails';

const EventShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow type="pair:hasEventType" linkToListText="Liste des évènements" details={<EventDetails />} actionLabel="Je candidate" />
      <BodyList
        aside={
          <StickyCard actionLabel="Je candidate">
            <EventDetails orientation="vertical" />
          </StickyCard>
        }
      >
        <MarkdownField source="pair:description" />
        <MarkdownField source="cdlt:program" />
        <MarkdownField source="cdlt:prerequisites" />
        <MarkdownField source="cdlt:practicalConditions" />
        <MarkdownField source="cdlt:economicalConditions" />
        <ReferenceField reference="Place" source="pair:hostedIn" link={false}>
          <MapField
            address={(record) => record?.['pair:label'] + ', ' + record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
          />
        </ReferenceField>
      </BodyList>
      <Events />
    </>
  </ShowBase>
);

export default EventShow;
