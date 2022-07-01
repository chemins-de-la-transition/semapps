import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../config/themes/resourceTheme';
import resourceShowStyle from '../../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import SimilarEvents from "../../../commons/lists/EventsList/SimilarEvents";
import EventDetails from './EventDetails';
import EventAlert from "./EventAlert";
import ContactDialog from "../../../commons/ContactDialog";
import NumberWithUnitField from '../../../commons/fields/NumberWithUnitField';
import SectorField from '../../../commons/fields/SectorField';
import ApplyButton from "../../../commons/buttons/ApplyButton";
import GroupOfFields from '../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../utils";

const useStyles = resourceShowStyle;

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
              sources={["cdlt:referenceNumber","pair:description"]}
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
              <ReferenceArrayField reference="TargetAudience" source="cdlt:hasTargetAudience" >
                <SeparatedListField link={false} separator=" / ">
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:pedagogicalMeans" />
              <MarkdownField source="cdlt:accessibility" />
            </GroupOfFields>
            <GroupOfFields
              title="Compétences"
              sources={["cdlt:requiredSkills","cdlt:prerequisites","pair:produces","cdlt:learningObjectives"]}
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="cdlt:requiredSkills">
                <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:requiredSkills')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="cdlt:prerequisites" />
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="cdlt:learningObjectives" />
            </GroupOfFields>
            <GroupOfFields
              title="Modalités d'accueil"
              sources={["cdlt:practicalConditions","cdlt:minimumCapacity","cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
              <NumberWithUnitField source="cdlt:minimumCapacity" addLabel unit='personnes' color="grey40" />
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <GroupOfFields
              title="Conditions financières"
              sources={["cdlt:economicalConditions","cdlt:financialSupport","cdlt:evaluationMethod"]}
              addLabel
            >
              <MarkdownField source="cdlt:economicalConditions" addLabel={false} />
              <MarkdownField source="cdlt:financialSupport" />
              <MarkdownField source="cdlt:evaluationMethod" />
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
          <SimilarEvents />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default EventShow;
