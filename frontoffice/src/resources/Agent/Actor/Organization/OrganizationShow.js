import React, { useState } from 'react';
import { ChipField, SingleFieldList, TextField, useTranslate } from 'react-admin';
import ShowBaseOnlyIfPublished from '../../../../commons/ShowBaseOnlyIfPublished';
import { ThemeProvider, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import organizationTheme from '../../../../config/themes/organizationTheme';
import resourceShowStyle from '../../../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { MultiUrlField, SeparatedListField, ReferenceArrayField } from "@semapps/field-components";
import { CommentsField, useMentions } from "@semapps/activitypub-components";
import { Box, Typography } from '@material-ui/core';
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import OrganizationDetails from './OrganizationDetails';
import EventCard from '../../Activity/Event/EventCard';
import OrganizationCard from './OrganizationCard';
import CardsList from '../../../../commons/lists/CardsList';
import ContactDialog from "../../../../commons/ContactDialog";
import NumberWithUnitField from '../../../../commons/fields/NumberWithUnitField';
import SectorField from '../../../../commons/fields/SectorField';
import ContactButton from "../../../../commons/buttons/ContactButton";
import GroupOfFields from '../../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from '../../../../utils';

const useStyles = resourceShowStyle;

const OrganizationShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [onlyFutureEvents, setOnlyFutureEvents] = useState(true);
  const mentions = useMentions('Person');
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <ThemeProvider theme={organizationTheme}>
      <ShowBaseOnlyIfPublished {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<OrganizationDetails />}
            actionButton={<ContactButton label={translate('app.action.organization.contact')} />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label={translate('app.action.organization.contact')} />}
              >
                <OrganizationDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title={translate('app.tab.organization.about')}
              sources={["pair:comment","pair:hasFinality","pair:hasSector","pair:hasType","pair:hasTopic","cdlt:intentions","pair:description"]}
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
              <ReferenceArrayField source="pair:hasType" reference="Type">
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
              <MarkdownField source="cdlt:intentions" />
            </GroupOfFields>
            <GroupOfFields
              title={translate('app.tab.organization.skills')}
              sources={["pair:produces","pair:aims"]}
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
              title={translate('app.tab.organization.accommodation')}
              sources={["cdlt:practicalConditions","cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false}/>
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit={translate('app.input.organization.capacityUnit')} color="grey40" />
            </GroupOfFields>
            {/* <ReferenceArrayField source="cdlt:organizes" reference="Activity" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList} label={translate('app.tab.organization.activities')}>
              <Box pt={1}>
                <Typography variant="body2" component="div" className={classes.textBody} >
                  Cette organisation est impliquée dans plusieurs activités. Cliquez dessus pour en savoir plus et/ou participer.
                </Typography>
                <CardsList CardComponent={EventCard} />
              </Box>
            </ReferenceArrayField> */}
            <ReferenceArrayField source="cdlt:organizes" reference="Activity" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList} label={translate('app.tab.organization.activities')}>
              <Box pt={1}>
                <Typography variant="body2" component="div" className={classes.textBody}>
                {translate('app.message.organization.involvedActivities')}
                  <FormGroup >
                    <FormControlLabel control={<Checkbox checked={onlyFutureEvents} />} label={translate('app.input.organization.onlyFutureEvents')} onChange={() => setOnlyFutureEvents(!onlyFutureEvents)}/>
                  </FormGroup>
                </Typography>
                <CardsList onlyFutureEvents={onlyFutureEvents} CardComponent={EventCard} />
              </Box>
            </ReferenceArrayField>
            <ReferenceArrayField source="pair:inspiredBy" reference="Organization" className={classes.cardsList} label={translate('app.tab.organization.inspiredBy')}>
              <Box pt={1}>
                <CardsList CardComponent={OrganizationCard} />
              </Box>
            </ReferenceArrayField>
            <MapField
              source="pair:hasLocation"
              address={(record) => record?.['pair:hasLocation']?.['pair:label']}
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
              typographyProps={{ variant: 'body2', color: 'secondary' }}
              scrollWheelZoom={false}
              dragging={false}
            />
            <MultiUrlField source="pair:homePage" />
            <TextField source="cdlt:publicPhone" />
            <CommentsField userResource="Person" mentions={mentions} />
{/*
            <ReferenceArrayField reference="Project" source="pair:involvedIn">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField
              label={translate('app.input.organization.event')}
              reference="Event"
              filter={{ '@type': 'pair:Event' }}
              source="pair:involvedIn"
            >
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Document" source="pair:documentedBy">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
*/}
          </BodyList>
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBaseOnlyIfPublished>
    </ThemeProvider>
  );
};


export default OrganizationShow;