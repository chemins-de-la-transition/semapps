import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../config/themes/resourceTheme';
import resourceShowStyle from '../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, Typography } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
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
import PictoLieu from '../../icons/PictoLieu.png' ;

const useStyles = resourceShowStyle;

const PlaceShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            linkToListText="Liste des lieux"
            details={<PlaceDetails />}
            actionButton={<ContactButton label="Contacter le lieu" />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label="Contacter le lieu" />}
              >
                <PlaceDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="A propos du lieu"
              sources={["pair:comment","pair:hasFinality","pair:hasSector","pair:hasType","cdlt:hasCourseType","pair:hasTopic","pair:description","cdlt:hostDescription","cdlt:activities"]}
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
                  <TextField variant="body2" source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Type" source="cdlt:hasCourseType">
                <SeparatedListField link={false} separator=" / ">
                  <TextField source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Theme" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField}/>
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
              <MarkdownField source="cdlt:hostDescription" />
              <MarkdownField source="cdlt:activities" />
            </GroupOfFields>
            <GroupOfFields
              title="Compétences"
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
              title="Modalités d'accueil"
              sources={["cdlt:practicalConditions","cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false}/>
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList}>
              <Box pt={1}>
                <Typography variant="body2" component="div" className={classes.textBody}>
                  Ce lieu propose plusieurs événements. Cliquez dessus pour en savoir plus et/ou participer.
                </Typography>
                <CardsList CardComponent={EventCard} />
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
            <UrlField source="pair:homePage" label="Liens" className={classes.urlField} />
          </BodyList>
          <SimilarList
            resource="Place"
            basePath="/Place"
            logo={PictoLieu}
            title="Les lieux"
            subtitle="Similaires"
            headComment=""
            linkText="Voir tous les lieux"
            CardSubHeaderComponent={PlaceSubHeader}
          />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default PlaceShow;
