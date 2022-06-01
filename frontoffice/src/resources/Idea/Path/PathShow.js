import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { Box } from '@material-ui/core';
import { AvatarField, GridList } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import FeaturedList from '../../../commons/lists/FeaturedList/FeaturedList';
import CourseSubHeader from "../../Activity/Course/CourseSubHeader";
import EventSubHeader from "../../Activity/Event/EventSubHeader";
import PlaceSubHeader from "../../Place/PlaceSubHeader";
import CardsList from "../../../commons/lists/CardsList";
import DebateCard from "../Debate/DebateCard";

const EventShow = (props) => {
  return (
    <ShowBase {...props}>
      <Box>
        <HeaderShow
          linkToListText="Liste des chemins"
          actionButton={<ApplyButton />}
          hasComment={true}
        />
        <BodyList>
          <MarkdownField source="pair:description" />
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={3} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="cdlt:supportedBy">
            <GridList xs={3} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Debate" source="pair:nourishes">
            <CardsList CardComponent={DebateCard} external link={record => record['pair:webPage']} />
          </ReferenceArrayField>
        </BodyList>
        <FeaturedList
          resource="Place"
          basePath="/Place"
          title="Les lieux"
          subtitle="A visiter"
          headComment="Partez à la découverte de lieux inspirants et allez à la rencontre de personnes qui ont choisi d’être actrices de la transition."
          linkText="Voir tous les lieux"
          CardSubHeaderComponent={PlaceSubHeader}
          filter={{ field:'cdlt:placeOn',value: props.id }}
        />
        <FeaturedList
          resource="Event"
          basePath="/Event"
          title="Les événements"
          subtitle=""
          headComment=""
          linkText="Voir tous les événements"
          CardSubHeaderComponent={EventSubHeader}
          filter={{ field:'cdlt:eventOn',value: props.id }}
        />
        <FeaturedList
          resource="Course"
          basePath="/Course"
          title="Les parcours"
          subtitle="Thématiques & géographiques"
          headComment="Tu rêves de partir sur les routes pour découvrir des savoir-faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
          linkText="Voir tous les parcours"
          CardSubHeaderComponent={CourseSubHeader}
          filter={{ field:'cdlt:courseOn',value: props.id }}
        />
      </Box>
    </ShowBase>
  );
}

export default EventShow;
