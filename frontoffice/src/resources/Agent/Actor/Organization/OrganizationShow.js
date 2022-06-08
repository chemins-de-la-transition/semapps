import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import organizationTheme from '../../../../config/themes/organizationTheme';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import OrganizationDetails from './OrganizationDetails';
import EventCard from '../../../Activity/Event/EventCard';
import OrganizationCard from './OrganizationCard';
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
      color: theme.palette.theme_5.main
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

const OrganizationShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={organizationTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            linkToListText="Liste des organisations"
            details={<OrganizationDetails />}
            actionButton={<ContactButton label="Contacter l'organisation" />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label="Contacter l'organisation" />}
              >
                <OrganizationDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="A propos de cette organisation"
              source="pair:description"
              addLabel
              noBorder
            >
              <TextField variant="body2" source="pair:comment"/>
              <MarkdownField source="cdlt:intentions" />
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
              <ReferenceArrayField reference="Theme" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField} />
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              {/*
              <MarkdownField source="cdlt:activities" />
              */}
            </GroupOfFields>
            {/*
            <GroupOfFields
              title="Compétences"
              source="pair:produces"
              addLabel
            >
              <ReferenceArrayField reference="Skill" source="pair:produces">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:produces')} separator="">
                  <ChipField source="pair:label" color="primary" />
                </SeparatedListField>
              </ReferenceArrayField>
            </GroupOfFields>
            */}
            {/*
            <GroupOfFields
              title="Modalités d'accueil"
              source="cdlt:practicalConditions"
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" className={classes.hideLabel} addLabel={false}/>
            </GroupOfFields>
            */}
            <ReferenceArrayField source="cdlt:organizes" reference="Activity" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList} label="Activités">
              <Box pt={1}>
                <Typography variant="body2" component="div" className={classes.textBody} >
                  Cette organisation accueille plusieurs activités. Cliquez dessus pour en savoir plus et/ou participer.
                </Typography>
                <CardsList CardComponent={EventCard} />
              </Box>
            </ReferenceArrayField>
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
            <UrlField source="pair:homePage" label="Liens" className={classes.urlField} />
{/*
            <ReferenceArrayField  reference="Place" source="cdlt:organizationHostedIn">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Person" source="pair:affiliates">
              <GridList xs={3} md={6} linkType="show">
                <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300" />
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Organization" source="pair:partnerOf">
              <GridList xs={3} md={6} linkType="show">
                <AvatarField label="pair:label" image="pair:depictedBy" labelColor="grey.300">
                  <HomeIcon />
                </AvatarField>
              </GridList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Project" source="pair:involvedIn">
              <SingleFieldList linkType="show">
                <ChipField source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField
              label="Evénements"
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
            <ReferenceArrayField reference="Path" source="cdlt:supports">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
              <SingleFieldList linkType="show">
                <ChipWithResourceIcon source="pair:label" />
              </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField source="cdlt:hasRegion" reference="Region">
              <SingleFieldList linkType={false}>
                <ChipField source="pair:label" />
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

export default OrganizationShow;