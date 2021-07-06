import React from 'react';
import { ShowBase } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import HeaderShow from '../../../../commons/HeaderShow';
import Events from "../../../../pages/Events/Events";
import StickyCard from "../../../../commons/StickyCard";
import BodyList from "../../../../commons/BodyList/BodyList";
import EventDetails from "./EventDetails";

const EventShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow
        type="pair:hasEventType"
        linkToListText="Liste des évènements"
        details={<EventDetails />}
      />
      <BodyList aside={<StickyCard><EventDetails orientation="vertical" /></StickyCard>}>
        <MarkdownField source="pair:description" />
        <MarkdownField source="cdlt:program" />
        <MarkdownField source="cdlt:prerequisites" />
        <MarkdownField source="cdlt:practicalConditions" />
        <MarkdownField source="cdlt:economicalConditions" />
        <ReferenceField reference="Place" source="pair:hostedIn" link={false}>
          <MapField
            address={(record) =>
              record?.['pair:label'] +
              ', ' +
              record?.['pair:hasPostalAddress']?.['pair:label']
            }
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
          />
        </ReferenceField>
      </BodyList>
      <Events />
    </>
  </ShowBase>
);

export default EventShow;
