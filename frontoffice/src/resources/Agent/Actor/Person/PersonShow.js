import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import personTheme from '../../../../config/themes/personTheme';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, makeStyles } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import PersonDetails from './PersonDetails';
import OrganizationCard from '../../../../resources/Agent/Actor/Organization/OrganizationCard';
import CardsList from '../../../../commons/lists/CardsList';
import ContactDialog from "../../../../commons/ContactDialog";
import SectorField from '../../../../commons/fields/SectorField';
import ContactButton from "../../../../commons/buttons/ContactButton";
import GroupOfFields from '../../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../../utils";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    /* MarkdownField */
    '& p[class*=makeStyles-p]': {
      margin: 0,
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
    '&:hover': {
      color: theme.palette.theme_2.main
    }
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

const PersonShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={personTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            linkToListText="Liste des personnes"
            details={<PersonDetails />}
            actionButton={<ContactButton label="Contacter la personne" />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label="Contacter la personne" />}
              >
                <PersonDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="A propos de la personne"
              source="pair:description"
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
              <ReferenceArrayField reference="Theme" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:intentions" />
            </GroupOfFields>
            <GroupOfFields
              title="Compétences"
              source="pair:produces"
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
            </GroupOfFields>    
            <GroupOfFields
              title="Compétences"
              source="pair:produces"
              addLabel
            >
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
          
            <GroupOfFields
              title="Modalités d'accueil"
              source="cdlt:practicalConditions"
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false}/>
            </GroupOfFields>
            <ReferenceArrayField source="pair:inspiredBy" reference="Organization" className={classes.cardsList} label="Est inspirée par">
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
