import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField, useTranslate } from 'react-admin';
import { ThemeProvider, Checkbox, FormGroup, FormControlLabel, Box, Typography } from '@material-ui/core';
import resourceTheme from '../../config/themes/resourceTheme';
import resourceShowStyle from '../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { CommentsField, useMentions } from "@semapps/activitypub-components";
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../commons/HeaderShow';
import StickyCard from '../../commons/StickyCard';
import BodyList from '../../commons/lists/BodyList/BodyList';
import PlaceDetails from './PlaceDetails';
import EventCard from '../Agent/Activity/Event/EventCard';
import CardsList from '../../commons/lists/CardsList';
import ContactDialog from "../../commons/ContactDialog";
import NumberWithUnitField from '../../commons/fields/NumberWithUnitField';
import SectorField from '../../commons/fields/SectorField';
import PlaceSubHeader from "./PlaceSubHeader";
import SimilarList from "../../commons/lists/FeaturedList/SimilarList";
import ContactButton from "../../commons/buttons/ContactButton";
import GroupOfFields from '../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../utils";
import PictoLieu from '../../icons/PictoLieu.png';
import Traveler from "../../pages/HomePage/Traveler/Traveler";

const useStyles = resourceShowStyle;

const PlaceShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [onlyFutureEvents, setOnlyFutureEvents] = useState(true);
  const translate = useTranslate();
  const mentions = useMentions('Person');
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<PlaceDetails onlyFutureEvents={onlyFutureEvents} />}
            actionButton={<ContactButton label={translate('app.action.contactPlace')} />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label={translate('app.action.contactPlace')} />}
              >
                <PlaceDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title={translate('app.tab.place.about')}
              sources={["pair:comment", "pair:hasFinality", "pair:hasSector", "pair:hasType", "cdlt:hasCourseType", "pair:hasTopic", "pair:description", "cdlt:hostDescription", "cdlt:activities"]}
              addLabel
              noBorder
            >
              <TextField variant="body2" source="pair:comment" />
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
              <ReferenceArrayField source="pair:hasType" reference="Type">
                <SeparatedListField link={false} separator=" / ">
                  <TextField variant="body2" source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
                <SeparatedListField link={false} separator=" / ">
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Topic" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:hostDescription" />
              <MarkdownField source="cdlt:activities" />
            </GroupOfFields>
            <GroupOfFields
              label={translate('app.input.skills')}
              sources={["pair:produces", "pair:aims"]}
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Skill" source="pair:aims">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:aims')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
            </GroupOfFields>
            <GroupOfFields
              label={translate('app.tab.accommodation')}
              sources={["cdlt:practicalConditions", "cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }}>
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
            <MapField
              source="pair:hasPostalAddress"
              address={(record) => record?.['pair:hasPostalAddress']?.['pair:label']}
              latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
              typographyProps={{ variant: 'body2', color: 'secondary' }}
              scrollWheelZoom={false}
              dragging={false}
            />
            <UrlField source="pair:homePage" label={translate('app.tab.links')} className={classes.urlField} />
            <TextField source="pair:e-mail" />
            <TextField source="cdlt:publicPhone" />
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <SimilarList
            resource="Place"
            basePath="/Place"
            logo={PictoLieu}
            title={translate('app.tab.place.title')}
            subtitle={translate('app.tab.place.subTitle')}
            headComment=""
            linkText={translate('app.tab.place.linkText')}
            CardSubHeaderComponent={PlaceSubHeader}
          />
          <Traveler />
          <br />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default PlaceShow;
