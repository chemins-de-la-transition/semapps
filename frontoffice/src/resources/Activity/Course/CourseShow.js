import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapList } from '@semapps/geo-components';
import HeaderShow from '../../../commons/HeaderShow';
import MarkdownField from '../../../commons/fields/MarkdownField';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import CourseDetails from './CourseDetails';
import BulletPointsField from '../../../commons/fields/BulletPointsField';
import TimelineList from '../../../commons/lists/TimelineList';
import ContactField from "../../../commons/fields/ContactField";
import SimilarList from "../../../commons/lists/FeaturedList/SimilarList";
import CourseSubHeader from "./CourseSubHeader";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import PathCard from '../../Idea/Path/PathCard';
import CardsList from '../../../commons/lists/CardsList';

const CourseShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow linkToListText="Liste des voyages" details={<CourseDetails />} actionButton={<ApplyButton />} />
      <BodyList
        aside={
          <StickyCard actionButton={<ApplyButton />}>
            <CourseDetails orientation="vertical" />
          </StickyCard>
        }
      >
        <MarkdownField source="pair:description" />
        <MarkdownField source="cdlt:organizerDescription" />
        <MarkdownField source="cdlt:mentorDescription" />
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
            latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
            label={(record) => record?.['pair:label']}
            description={(record) => record?.['pair:comment']}
            groupClusters={false}
            connectMarkers
            boundToMarkers
            scrollWheelZoom={false}
            dragging={false}
          />
        </ReferenceArrayField>
        <ContactField
          source="pair:phone"
          phone="pair:phone"
          website="pair:homePage"
        />
        <ReferenceArrayField source="cdlt:courseOn" reference="Path">
          <Box pt={1}>
            <CardsList CardComponent={PathCard} />
          </Box>
        </ReferenceArrayField>
      </BodyList>
      <SimilarList
        resource="Course"
        basePath="/Course"
        title="Les voyages"
        subtitle="Similaires"
        headComment="Tu rêves de partir sur les routes pour découvrir des savoirs faire ou même apprendre un métier sur le terrain? Découvre nos voyages."
        linkText="Voir tous les voyages"
        CardSubHeaderComponent={CourseSubHeader}
      />
    </>
  </ShowBase>
);

export default CourseShow;
