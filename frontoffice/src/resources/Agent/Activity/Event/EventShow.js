import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../../config/themes/resourceTheme';
import resourceShowStyle from '../../../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { CommentsField, useMentions } from "@semapps/activitypub-components";
import { Box } from '@material-ui/core';
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import SimilarEvents from "../../../../commons/lists/EventsList/SimilarEvents";
import EventDetails from './EventDetails';
import EventAlert from "./EventAlert";
import ContactDialog from "../../../../commons/ContactDialog";
import SectorField from '../../../../commons/fields/SectorField';
import ApplyButton from "../../../../commons/buttons/ApplyButton";
import GroupOfFields from '../../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../../utils";

const useStyles = resourceShowStyle;

const EventShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const mentions = useMentions('Person');
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
              sources={["pair:comment","pair:description","cdlt:program","pair:hasTopic","pair:hasFinality"]}
              addLabel
              noBorder
            >
              <TextField variant="body2" source="pair:comment"/>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:program" />
              <ReferenceArrayField reference="Topic" source="pair:hasTopic">
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                <ChipField source="pair:label" color="primary" className={classes.chipField}/>
              </SeparatedListField>
            </ReferenceArrayField>
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
              <ReferenceArrayField reference="Topic" source="pair:hasTopic">
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
              sources={["cdlt:prerequisites","cdlt:requiredSkills","pair:produces","cdlt:learningObjectives"]}
              addLabel
            >
              <MarkdownField source="cdlt:prerequisites" />
              <ReferenceArrayField reference="Skill" source="cdlt:requiredSkills">
                <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:requiredSkills')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="cdlt:learningObjectives" />
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
            </GroupOfFields>
            <GroupOfFields
              title="Ressources et évaluation"
              sources={["cdlt:pedagogicalMeans","cdlt:evaluationMethod","cdlt:hasJobOpportunities"]}
              addLabel
            >
              <MarkdownField source="cdlt:pedagogicalMeans" />
              <MarkdownField source="cdlt:evaluationMethod" />
              <ReferenceArrayField reference="JobOpportunities" source="cdlt:hasJobOpportunities">
                <SingleFieldList linkType={false}>
                  <ChipField source="pair:label" />
                </SingleFieldList>
              </ReferenceArrayField>
            </GroupOfFields>
            <GroupOfFields
              title="Conditions financières"
              sources={["cdlt:economicalConditions","cdlt:financialSupport"]}
              addLabel
            >
              <MarkdownField source="cdlt:economicalConditions" />
              <MarkdownField source="cdlt:financialSupport" />
            </GroupOfFields>
            <GroupOfFields
              title="Organisation"
              sources={["cdlt:organizerDescription","cdlt:mentorDescription"]}
              addLabel
            >
              <MarkdownField source="cdlt:organizerDescription" />
              <MarkdownField source="cdlt:mentorDescription" />
            </GroupOfFields>
            <GroupOfFields
              title="Accueil et accessibilité"
              sources={["cdlt:practicalConditions","cdlt:accessibility","pair:hasLocation"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" />
              <MarkdownField source="cdlt:accessibility" />
              <MapField
                source="pair:hasLocation"
                address={(record) => record?.['pair:hasLocation']?.['pair:label']}
                latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
                longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
                typographyProps={{ variant: 'body2', color: 'secondary' }}
                scrollWheelZoom={false}
                dragging={false}
              />
            </GroupOfFields>
            <ReferenceArrayField reference="Sector" source="pair:hasSector">
              <SingleFieldList linkType={false}>
                <SectorField />
              </SingleFieldList>
            </ReferenceArrayField>
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <SimilarEvents />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default EventShow;
