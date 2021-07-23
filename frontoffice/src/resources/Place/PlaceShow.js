import React, { useState } from 'react';
import { ShowBase, TextField } from 'react-admin';
import { MapField } from '@semapps/geo-components';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../commons/HeaderShow';
import Events from '../../commons/lists/EventsList/EventsList';
import StickyCard from '../../commons/StickyCard';
import BodyList from '../../commons/lists/BodyList/BodyList';
import PlaceDetails from './PlaceDetails';
import EventCard from '../Activity/Event/EventCard';
import CardsList from '../../commons/lists/CardsList';
import BulletPointsField from '../../commons/fields/BulletPointsField';
import ContactDialog from "../../commons/ContactDialog";

const PlaceShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <ShowBase {...props}>
      <>
        <HeaderShow
          type="pair:hasType"
          linkToListText="Liste des lieux"
          details={<PlaceDetails />}
          actionLabel="Contacter le lieu"
          actionClick={() => setShowDialog(true)}
        />
        <BodyList
          aside={
            <StickyCard actionLabel="Contacter le lieu" actionClick={() => setShowDialog(true)}>
              <PlaceDetails orientation="vertical" />
            </StickyCard>
          }
        >
          <MarkdownField source="pair:description" />
          <MarkdownField source="cdlt:activities" />
          <ReferenceArrayField source="pair:hosts" reference="Event">
            <Box pt={1}>
              <CardsList CardComponent={EventCard} />
            </Box>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:practicalConditions" />
          <MapField
            source="pair:hasPostalAddress"
            address={(record) => record?.['pair:hasPostalAddress']?.['pair:label']}
            latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            typographyProps={{ variant: 'body2', color: 'secondary' }}
          />
        </BodyList>
        <Events filter={(record)=>({ 'pair.hasTopic': record?.['pair.hasTopic'] })}/>
        <ContactDialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
        />
      </>
    </ShowBase>
  );
}

export default PlaceShow;
