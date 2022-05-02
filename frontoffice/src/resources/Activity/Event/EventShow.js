import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import EventDetails from './EventDetails';
import ContactField from "../../../commons/fields/ContactField";
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import SimilarEvents from "../../../commons/lists/EventsList/SimilarEvents";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import EventAlert from "./EventAlert";
import EventMapField from "./EventMapField";

const EventShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow
        type="pair:hasType"
        linkToListText="Liste des évènements"
        details={<EventDetails />}
        actionButton={<ApplyButton />}
      />
      <BodyList
        aside={
          <StickyCard actionButton={<ApplyButton />}>
            <EventDetails orientation="vertical" />
          </StickyCard>
        }
        alert={<EventAlert />}
      >
        <MarkdownField source="pair:description" />
        <MarkdownField source="cdlt:organizerDescription" />
        <MarkdownField source="cdlt:mentorDescription" />
        <MarkdownField source="cdlt:program" />
        <ReferenceArrayField reference="Skill" source="pair:produces">
          <BulletPointsField linkType={false}>
            <TextField source="pair:label" />
          </BulletPointsField>
        </ReferenceArrayField>
        <MarkdownField source="cdlt:prerequisites" />
        <MarkdownField source="cdlt:practicalConditions" />
        <MarkdownField source="cdlt:learningObjectives" />
        <MarkdownField source="cdlt:economicalConditions" />
        <EventMapField source="pair:hasLocation" />
        <ContactField
          source="pair:phone"
          phone="pair:phone"
          website="pair:homePage"
        />
      </BodyList>
      <SimilarEvents />
    </>
  </ShowBase>
);

export default EventShow;
