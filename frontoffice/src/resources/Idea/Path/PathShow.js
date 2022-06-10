import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../config/themes/resourceTheme';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import PathDetails from './PathDetails';
import EventCard from '../../../resources/Activity/Event/EventCard';
import CardsList from '../../../commons/lists/CardsList';
import ContactDialog from "../../../commons/ContactDialog";
import SectorField from '../../../commons/fields/SectorField';
import PlaceSubHeader from "../../../resources/Place/PlaceSubHeader";
import EventSubHeader from "../../../resources/Activity/Event/EventSubHeader";
import CourseSubHeader from "../../../resources/Activity/Course/CourseSubHeader";
import SimilarList from "../../../commons/lists/FeaturedList/SimilarList";
import ContactButton from "../../../commons/buttons/ContactButton";
import GroupOfFields from '../../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../../utils";
import FeaturedList from '../../../commons/lists/FeaturedList/FeaturedList';
import PictoLieu from '../../../icons/PictoLieu.png' ;
import PictoParcours from '../../../icons/PictoParcours.png' ;
import DebateCard from "../Debate/DebateCard";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    /* MarkdownField */
    '& p[class*=makeStyles-p]': {
      margin: 0,
      color: theme.palette.grey40.main
    },
    '& p[class*=makeStyles-li]': {
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

const PathShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            linkToListText="Liste des chemins"
            details={<PathDetails />}
            actionButton={<ContactButton label="Contacter le chemin" />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label="Contacter le chemin" />}
              >
                <PathDetails orientation="vertical" />
              </StickyCard>
            }
          >
          
            <GroupOfFields
                title="A propos du chemin"
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
                source="pair:produces"
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

              <ReferenceArrayField source="pair:hosts" reference="Event" sort={{ field: 'pair:startDate', order: 'ASC' }} className={classes.cardsList}>
                <Box pt={1}>
                  <Typography variant="body2" component="div" className={classes.textBody}>
                    Ce lieu propose plusieurs événements. Cliquez dessus pour en savoir plus et/ou participer.
                  </Typography>
                  <CardsList CardComponent={EventCard} />
                </Box>
              </ReferenceArrayField>
            
              <ReferenceArrayField reference="Debate" source="pair:nourishes" perPage={5} sort={{ field: 'dc:created', sort: 'ASC' }}>
                <CardsList CardComponent={DebateCard} external link={record => record['pair:webPage']} />
              </ReferenceArrayField>
        
            </BodyList>
            <FeaturedList
            resource="Place"
            basePath="/Place"
            title="Les lieux"
            subtitle="A visiter"
            logo={PictoLieu}
            headComment="Partez à la découverte de lieux inspirants et allez à la rencontre de personnes qui ont choisi d’être actrices de la transition."
            linkText="Voir tous les lieux"
            CardSubHeaderComponent={PlaceSubHeader}
            filter={{ field:'cdlt:placeOn',value: props.id }}
          />
          <FeaturedList
            resource="Event"
            basePath="/Event"
            title="Les événements"
            subtitle=""
            logo={PictoParcours}
            headComment=""
            linkText="Voir tous les événements"
            CardSubHeaderComponent={EventSubHeader}
            filter={{ field:'cdlt:eventOn',value: props.id }}
          />
          <FeaturedList
            resource="Course"
            basePath="/Course"
            title="Les parcours"
            subtitle="Thématiques & géographiques"
            logo={PictoParcours}
            headComment="Tu rêves de partir sur les routes pour découvrir des savoir-faire ou même apprendre un métier sur le terrain? Découvre nos parcours."
            linkText="Voir tous les parcours"
            CardSubHeaderComponent={CourseSubHeader}
            filter={{ field:'cdlt:courseOn',value: props.id }}
          />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default PathShow;
