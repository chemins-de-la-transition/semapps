import React, { useState } from 'react';
import { ChipField, SingleFieldList, TextField, useTranslate} from 'react-admin';
import ShowBaseOnlyIfPublished from '../../../commons/ShowBaseOnlyIfPublished';
import { ThemeProvider, Checkbox, FormGroup, FormControlLabel, Box, Typography } from '@material-ui/core';
import resourceTheme from '../../../config/themes/resourceTheme';
import resourceShowStyle from '../../../commons/style/resourceShowStyle';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
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
import Traveler from "../../../pages/HomePage/Traveler/Traveler";

const useStyles = resourceShowStyle;

const PathShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [onlyFutureEvents, setOnlyFutureEvents] = useState(true);
  const mentions = useMentions('Person');
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBaseOnlyIfPublished {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<PathDetails onlyFutureEvents={onlyFutureEvents} />}
            actionButton={<ContactButton label={translate('app.action.contactPathOrganizer')} />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label={translate('app.action.contactPathOrganizer')} />}
              >
                <PathDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title={translate('app.tab.path.about')}
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
              label={translate('app.input.skills')}
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
      
            <ReferenceArrayField source="cdlt:hasPlace" reference="Place" className={classes.cardsList} label={translate('app.tab.path.place')}>
              <Box pt={1}>
                <CardsList CardComponent={PlaceCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField source="cdlt:hasEvent" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList} label={translate('app.tab.path.event')}>
              <Box pt={1}>
                <Typography variant="body2" component="div">
                  {translate('app.message.moreEvents')}
                  <FormGroup >
                    <FormControlLabel control={<Checkbox checked={onlyFutureEvents} />} label={"N'afficher que les événements à venir"} onChange={() => setOnlyFutureEvents(!onlyFutureEvents)} />
                  </FormGroup>
                </Typography>
                <CardsList onlyFutureEvents={onlyFutureEvents} CardComponent={EventCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField source="cdlt:hasCourse" reference="Course" className={classes.cardsList} label={translate('app.tab.path.course')}>
              <Box pt={1}>
                <CardsList CardComponent={CourseCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Debate" source="pair:nourishes" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
              <CardsList CardComponent={DebateCard} external link={record => record['pair:webPage']} />
            </ReferenceArrayField>
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <Traveler />
          <br />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBaseOnlyIfPublished>
    </ThemeProvider>
  );
};

export default PathShow;
