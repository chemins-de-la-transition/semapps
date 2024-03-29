import React, { useState } from 'react';
import {  ChipField,  ShowBase,  SingleFieldList,  TextField,  UrlField,  useTranslate} from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import personTheme from '../../../../config/themes/personTheme';
import resourceShowStyle from '../../../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { Box } from '@material-ui/core';
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import PersonDetails from './PersonDetails';
import OrganizationCard from '../../../../resources/Agent/Actor/Organization/OrganizationCard';
import CardsList from '../../../../commons/lists/CardsList';
import ContactDialog from '../../../../commons/ContactDialog';
import SectorField from '../../../../commons/fields/SectorField';
import ContactButton from '../../../../commons/buttons/ContactButton';
import GroupOfFields from '../../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from '../../../../utils';

const useStyles = resourceShowStyle;

const PersonShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <ThemeProvider theme={personTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<PersonDetails />}
            actionButton={<ContactButton label={translate('app.action.person.contact')} />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label={translate('app.action.person.contact')} />}
              >
                <PersonDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title={translate('app.tab.person.about')}
              sources={["pair:description","pair:comment","pair:hasFinality","pair:hasSector","pair:hasTopic","cdlt:intentions"]}
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
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:intentions" />
            </GroupOfFields>
            <GroupOfFields
              title={translate('app.tab.person.skills')}
              sources={['pair:produces', 'pair:offers', 'pair:aims']}
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Skill" source="pair:offers">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:offers')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Skill" source="pair:aims">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:aims')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
            </GroupOfFields>
            <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
            <ReferenceArrayField source="pair:inspiredBy" reference="Organization" className={classes.cardsList} label={translate('app.input.person.inspiredBy')}
            >
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
            <UrlField source="pair:homePage" label={translate('app.input.person.links')} className={classes.urlField} />
            
            {/*
            <MarkdownField source="cdlt:asAHostIntentions" />
            <MarkdownField source="cdlt:asAMentorIntentions" />
            <MarkdownField source="cdlt:asAnOrganiserIntentions" />
            <MarkdownField source="cdlt:asATravelerIntentions" />
            <ReferenceArrayField reference="Organization" source="pair:affiliatedBy">
              <GridList xs={3} md={6} linkType="show">
                <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                  <HomeIcon />
                </AvatarField>
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Place" source="cdlt:proposes">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Activity" source="cdlt:organizes">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Activity" source="cdlt:mentorOn">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
          */}

          </BodyList>
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default PersonShow;
