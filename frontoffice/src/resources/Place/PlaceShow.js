import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { MapField } from '@semapps/geo-components';
import { Box, Typography } from '@material-ui/core';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../commons/HeaderShow';
import StickyCard from '../../commons/StickyCard';
import BodyList from '../../commons/lists/BodyList/BodyList';
import PlaceDetails from './PlaceDetails';
import EventCard from '../Activity/Event/EventCard';
import CardsList from '../../commons/lists/CardsList';
import BulletPointsField from '../../commons/fields/BulletPointsField';
import ContactDialog from "../../commons/ContactDialog";
import ContactField from "../../commons/fields/ContactField";
import SectorField from '../../commons/fields/SectorField';
import PlaceSubHeader from "./PlaceSubHeader";
import SimilarList from "../../commons/lists/FeaturedList/SimilarList";
import ContactButton from "../../commons/buttons/ContactButton";
import GroupOfFields from '../../commons/fields/GroupOfFields';
import PathCard from "../Idea/Path/PathCard";

const PlaceShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <ShowBase {...props}>
      <>
        <HeaderShow
          type="pair:hasType"
          linkToListText="Liste des lieux"
          details={<PlaceDetails />}
          actionButton={<ContactButton label="Contacter le lieu" />}
        />
        <BodyList
          aside={
            <StickyCard
              actionButton={<ContactButton label="Contacter le lieu" />}
            >
              <PlaceDetails orientation="vertical" />
            </StickyCard>
          }
        >
          <GroupOfFields
            title="A propos du lieu"
            source="pair:description"
            addLabel
          >
            <TextField variant="body2" color="secondary" source="pair:comment" />
            <ReferenceArrayField reference="Finality" source="pair:hasFinality">
              <BulletPointsField linkType={false}>
                <TextField variant="body2" color="secondary" source="pair:label" />
              </BulletPointsField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Sector" source="pair:hasSector">
              <SingleFieldList linkType={false}>
                <SectorField />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField source="pair:hasType" reference="Type">
              <BulletPointsField linkType={false}>
                <TextField source="pair:label" />
              </BulletPointsField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
              <BulletPointsField linkType={false}>
                <TextField source="pair:label" />
              </BulletPointsField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Theme" source="pair:hasTopic">
              <BulletPointsField linkType={false}>
                <TextField variant="body2" color="secondary" source="pair:label" />
              </BulletPointsField>
            </ReferenceArrayField>
            <MarkdownField source="pair:description" />
            <MarkdownField source="cdlt:activities" />
          </GroupOfFields>
          <GroupOfFields
            title="Compétences"
            source="pair:produces"
            addLabel
          >
            <ReferenceArrayField reference="Skill" source="pair:produces">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
          </GroupOfFields>
          <GroupOfFields
            title="Modalités d'accueil"
            source="cdlt:practicalConditions"
            addLabel
          >
            <MarkdownField source="cdlt:practicalConditions" />
          </GroupOfFields>
          <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }}>
            <Box pt={1}>
              <Typography variant="div" color="secondary" component="div" >
                Ce lieu propose plusieurs événements. Cliquez dessus pour en savoir plus et/ou participer.
              </Typography>
              <CardsList CardComponent={EventCard} />
            </Box>
          </ReferenceArrayField>
          <MapField
            source="pair:hasPostalAddress"
            address={(record) => record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
            scrollWheelZoom={false}
            dragging={false}
          />
          <UrlField source="pair:homePage" label="Liens" />
        </BodyList>
        <SimilarList
          resource="Place"
          basePath="/Place"
          title="Les lieux"
          subtitle="Similaires"
          headComment="Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition."
          linkText="Voir tous les lieux"
          CardSubHeaderComponent={PlaceSubHeader}
        />
        <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
      </>
    </ShowBase>
  );
};

export default PlaceShow;
