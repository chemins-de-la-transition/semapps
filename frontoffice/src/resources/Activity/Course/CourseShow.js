import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapList } from '@semapps/geo-components';
import HeaderShow from '../../../commons/HeaderShow';
import MarkdownField from '../../../commons/fields/MarkdownField';
import Events from '../../../commons/lists/EventsList/EventsList';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import CourseDetails from './CourseDetails';
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import TimelineList from "../../../commons/lists/TimelineList";

const CourseShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow linkToListText="Liste des parcours" details={<CourseDetails />} actionLabel="Je candidate" />
      <BodyList
        aside={
          <StickyCard actionLabel="Je candidate">
            <CourseDetails orientation="vertical" />
          </StickyCard>
        }
      >
        <MarkdownField source="pair:description" />
        <ReferenceArrayField
          label="Programme"
          reference="Event"
          source="pair:hasPart"
          sort={{ field: 'pair:startDate', order: 'ASC' }}
        >
          <TimelineList />
        </ReferenceArrayField>
        <ReferenceArrayField reference="Skill" source="pair:produces">
          <BulletPointsField linkType={false}>
            <TextField source="pair:label" />
          </BulletPointsField>
        </ReferenceArrayField>
        <MarkdownField source="cdlt:prerequisites" />
        <MarkdownField source="cdlt:practicalConditions" />
        <MarkdownField source="cdlt:learningObjectives" />
        <MarkdownField source="cdlt:economicalConditions" />
        <ReferenceArrayField
          label="Localisation"
          reference="Event"
          source="pair:hasPart"
          sort={{ field: 'pair:startDate', order: 'ASC' }}
        >
          <MapList
            latitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hostedIn']?.['pair:hasPostalAddress']?.['pair:longitude']}
            label={(record) => record?.['pair:label']}
            description={(record) => record?.['pair:comment']}
            groupClusters={false}
            connectMarkers
            boundToMarkers
            scrollWheelZoom
          />
        </ReferenceArrayField>
      </BodyList>
      <Events />
    </>
  </ShowBase>
);

export default CourseShow;
