import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../config/themes/resourceTheme';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, makeStyles } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import EventDetails from './EventDetails';
import EventAlert from "./EventAlert";
import ContactDialog from "../../../commons/ContactDialog";
import NumberWithUnitField from '../../../commons/fields/NumberWithUnitField';
import SectorField from '../../../commons/fields/SectorField';
import ApplyButton from "../../../commons/buttons/ApplyButton";
import GroupOfFields from '../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../utils";
import FeaturedList from '../../../commons/lists/FeaturedList/FeaturedList';
import PictoAgenda from '../../../icons/PictoAgenda.png' ;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    /* MarkdownField */
    '& p[class*=makeStyles-p]': {
      margin: 0,
      color: theme.palette.grey40.main
    },
    '& p[class*=makeStyles-li]': {
      color: theme.palette.grey40.main
    }
  },
  singleFieldList: {
    marginBottom: 48 
  },
  textBody: {
    marginTop: 8,
    marginBottom: 16
  },
  urlField: {
    display: 'block',
    marginTop: 8,
    marginBottom: 16,
  },
  cardsList: {
    color: 'red',
    '& div[class*=makeStyles-description] span': {
      margin: 0,
      color: theme.palette.secondary.main
    }
  },
  chipField: {
    fontWeight: 'bold'
  }
}));

const EventShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            linkToListText="Liste des évènements"
            details={<EventDetails />}
            actionButton={<ApplyButton />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ApplyButton />}
              >
                <EventDetails orientation="vertical" />
              </StickyCard>
            }
            alert={<EventAlert />}
          >
            <GroupOfFields
              title="A propos de l'événement"
              source="pair:description"
              addLabel
              noBorder
            >
              <TextField variant="body2" source="cdlt:referenceNumber"/>
              <TextField variant="body2" source="pair:comment"/>
              <ReferenceArrayField reference="Finality" source="pair:hasFinality">
                <SeparatedListField link={false} separator=" / ">
                  <TextField variant="body2" source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Sector" source="pair:hasSector">
                <SingleFieldList linkType={false}>
                  <SectorField />
                </SingleFieldList>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
                <SeparatedListField link={false} separator=" / ">
                <TextField variant="body2" color="secondary" source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Theme" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField}/>
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
            </GroupOfFields>
            <GroupOfFields
              title="Compétences"
              source="pair:produces"
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="cdlt:requiredSkills">
                <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:requiredSkills')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="cdlt:prerequisites" />
              {/*
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              */}
            </GroupOfFields>
            <GroupOfFields
              title="Modalités d'accueil"
              source="cdlt:practicalConditions"
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
              <NumberWithUnitField source="cdlt:minimumCapacity" addLabel unit='personnes' color="grey40" />
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <GroupOfFields
              title="Conditions financières"
              source="cdlt:economicalConditions"
              addLabel
            >
              <MarkdownField source="cdlt:economicalConditions" addLabel={false} />
              <MarkdownField source="cdlt:financialSupport" />
            </GroupOfFields>
            <MarkdownField source="cdlt:organizerDescription" />
            <MarkdownField source="cdlt:mentorDescription" />
            <MarkdownField source="cdlt:program" />
            <MapField
              source="pair:hasLocation"
              address={(record) => record?.['pair:hasLocation']?.['pair:label']}
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
              typographyProps={{ variant: 'body2', color: 'secondary' }}
              scrollWheelZoom={false}
              dragging={false}
            />
            <UrlField source="pair:aboutPage" label="Liens" className={classes.urlField} />
          </BodyList>
          <FeaturedList
            resource="Event"
            basePath="/Event"
            title="Les événements"
            subtitle="similaires"
            logo={PictoAgenda}
            linkText="Voir tous les événements"
            isAgenda={true}
          />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default EventShow;
