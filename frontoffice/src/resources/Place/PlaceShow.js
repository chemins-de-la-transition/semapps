import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, Typography, makeStyles } from '@material-ui/core';
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
import PictoLieu from '../../icons/PictoLieu.png' ;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    '#pair\:description h6.MuiTypography-h6': {
      marginTop: 16,
      border: 'none',
    },
    '& .MuiBox-root .MuiContainer-root .MuiGrid-root h6': {
      marginTop: 8,
      marginBottom: 8,
      '& ~ .MuiTypography-body2:not(a)': {
        color: theme.palette.grey40.main
      },
      '& ~ span': {
        color: theme.palette.grey40.main
      },
      '& ~ span *': {
        color: theme.palette.grey40.main
      },
      '& ~ p.MuiTypography-body2': {
        marginTop: 8
      },
      '& ~ div .MuiButtonBase-root.MuiChip-root': {
        marginTop: 16,
        marginBottom: 16,
        fontWeight: 600
      },
      '& ~ a.MuiLink-root': {
        marginTop: 8,
        marginBottom: 16
      }
    },
  },
  singleFieldList: {
    marginBottom: 48 
  },
  hideLabel: {
    '& h6': {
      display: 'none'
    }
  },
  textBody: {
    marginTop: 8,
    marginBottom: 16,
    color: theme.palette.grey40.main,
  }
}));

const PlaceShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ShowBase {...props}>
      <Box className={classes.mainContainer}>
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
            noBorder
          >
            <TextField variant="body2" color="secondary" source="pair:comment"/>
            <ReferenceArrayField reference="Finality" source="pair:hasFinality">
              <SeparatedListField link={false} separator=" / ">
                <TextField variant="body2" color="secondary" source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Sector" source="pair:hasSector">
              <SingleFieldList linkType={false}>
                <SectorField />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField source="pair:hasType" reference="Type">
            <SeparatedListField link={false} separator=" / ">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
            <SeparatedListField link={false} separator=" / ">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Theme" source="pair:hasTopic">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" color="primary" />
              </SingleFieldList>
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
              <SingleFieldList linkType="show" className={classes.singleFieldList}>
                <ChipField source="pair:label" color="primary" />
              </SingleFieldList>
            </ReferenceArrayField>
          </GroupOfFields>
          <GroupOfFields
            title="Modalités d'accueil"
            source="cdlt:practicalConditions"
            addLabel
          >
            <MarkdownField source="cdlt:practicalConditions" className={classes.hideLabel} />
          </GroupOfFields>
          <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }}>
            <Box pt={1}>
              <Typography variant="body2" component="div" className={classes.textBody} >
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
          logo={PictoLieu}
          title="Les lieux"
          subtitle="Similaires"
          linkText="Voir tous les lieux"
          CardSubHeaderComponent={PlaceSubHeader}
        />
        <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
      </Box>
    </ShowBase>
  );
};

export default PlaceShow;
