import React, { useState } from 'react';
import { ShowBase, SingleFieldList, TextField } from 'react-admin';
import { MapField } from '@semapps/geo-components';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
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
          <MarkdownField source="pair:description" />
          <MarkdownField source="cdlt:hostDescription" addLabel />
          <MarkdownField source="cdlt:activities" />
          <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }}>
            <Box pt={1}>
              <CardsList CardComponent={EventCard} />
            </Box>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Sector" source="pair:hasSector">
            <SingleFieldList linkType={false}>
              <SectorField />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Theme" source="pair:hasTopic">
            <BulletPointsField linkType={false}>
              <TextField variant="body2" color="secondary" source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField variant="body2" color="secondary" source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:practicalConditions" />
          <MapField
            source="pair:hasPostalAddress"
            address={(record) => record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
            scrollWheelZoom={false}
            dragging={false}
          />
          <ContactField
            source="pair:phone"
            phone="pair:phone"
            website="pair:homePage"
          />
          <ReferenceArrayField source="cdlt:placeOn" reference="Path">
            <Box pt={1}>
              <CardsList CardComponent={PathCard} />
            </Box>
          </ReferenceArrayField>
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
