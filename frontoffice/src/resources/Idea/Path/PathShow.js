import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../config/themes/resourceTheme';
import resourceShowStyle from '../../../commons/style/resourceShowStyle';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { Box } from '@material-ui/core';
import { CommentsField, useMentions } from '@semapps/activitypub-components';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import PathDetails from './PathDetails';
import CourseCard from '../../../resources/Agent/Activity/Course/CourseCard';
import EventCard from '../../Agent/Activity/Event/EventCard';
import PlaceCard from '../../../resources/Place/PlaceCard';
import CardsList from '../../../commons/lists/CardsList';
import ContactDialog from "../../../commons/ContactDialog";
import SectorField from '../../../commons/fields/SectorField';
import ContactButton from "../../../commons/buttons/ContactButton";
import GroupOfFields from '../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../utils";
import DebateCard from "../Debate/DebateCard";

const useStyles = resourceShowStyle;

const PathShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const mentions = useMentions('Person');
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<PathDetails />}
            actionButton={<ContactButton label="Contacter les instigateurs de ce chemin" />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label="Contacter les instigateurs de ce chemin" />}
              >
                <PathDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="A propos du chemin"
              sources={["pair:comment","pair:hasFinality","pair:hasSector","pair:hasTopic","cdlt:hasCourseType","pair:description"]}
              addLabel
              noBorder
            >
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
              <ReferenceArrayField reference="Topic" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField}/>
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
                <SeparatedListField link={false} separator=" / ">
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
            </GroupOfFields>

            <GroupOfFields
              title="Compétences"
              sources={["pair:produces","cdlt:learningObjectives"]}
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="cdlt:learningObjectives" />
              <ReferenceArrayField reference="JobOpportunities" source="cdlt:hasJobOpportunities">
                <SingleFieldList linkType={false}>
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SingleFieldList>
              </ReferenceArrayField>
            </GroupOfFields>  
      
            <ReferenceArrayField source="cdlt:hasPlace" reference="Place" className={classes.cardsList} label="Lieux">
              <Box pt={1}>
                <CardsList CardComponent={PlaceCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField source="cdlt:hasEvent" reference="Event" className={classes.cardsList} label="Evénements">
              <Box pt={1}>
                <CardsList CardComponent={EventCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField source="cdlt:hasCourse" reference="Course" className={classes.cardsList} label="Voyages">
              <Box pt={1}>
                <CardsList CardComponent={CourseCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Debate" source="pair:nourishes" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
              <CardsList CardComponent={DebateCard} external link={record => record['pair:webPage']} />
            </ReferenceArrayField>
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default PathShow;
