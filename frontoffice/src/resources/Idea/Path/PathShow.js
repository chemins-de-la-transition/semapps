import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import CardsList from "../../../commons/lists/CardsList";
import DebateCard from "../Debate/DebateCard";
import PathDetails from "./PathDetails";
import StickyCard from '../../../commons/StickyCard';
import PlaceCard from '../../Place/PlaceCard';
import EventCard from '../../Activity/Event/EventCard';
import CourseCard from '../../Activity/Course/CourseCard';

const EventShow = (props) => {
  return (
    <ShowBase {...props}>
      <Box>
        <HeaderShow
          linkToListText="Liste des chemins"
          actionButton={<ApplyButton />}
          details={<PathDetails />}
          hasComment={true}
        />
        <BodyList
          aside={
            <StickyCard>
              <PathDetails orientation="vertical" />
            </StickyCard>
          }
        >
          <MarkdownField source="pair:description" />
          <ReferenceArrayField reference="Place" source="cdlt:hasPlace" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
            <CardsList CardComponent={PlaceCard} external link="show" />
          </ReferenceArrayField>
          <ReferenceArrayField reference="Event" source="cdlt:hasEvent" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
            <CardsList CardComponent={EventCard} external link="show" />
          </ReferenceArrayField>
          <ReferenceArrayField reference="Course" source="cdlt:hasCourse" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
            <Box pt={1}>
              <CardsList CardComponent={CourseCard} external link="show" />
            </Box>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Debate" source="pair:nourishes" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
            <CardsList CardComponent={DebateCard} external link={record => record['pair:webPage']} />
          </ReferenceArrayField>
        </BodyList>
      </Box>
    </ShowBase>
  );
}

export default EventShow;
