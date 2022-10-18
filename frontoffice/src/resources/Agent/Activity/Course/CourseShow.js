import React, { useState } from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField, Link, linkToRecord } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import resourceTheme from '../../../../config/themes/resourceTheme';
import resourceShowStyle from '../../../../commons/style/resourceShowStyle';
import { MapList } from '@semapps/geo-components';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { Box } from '@material-ui/core';
import { CommentsField, useMentions } from "@semapps/activitypub-components";
import MarkdownField from '../../../../commons/fields/MarkdownField';
import HeaderShow from '../../../../commons/HeaderShow';
import StickyCard from '../../../../commons/StickyCard';
import BodyList from '../../../../commons/lists/BodyList/BodyList';
import CourseDetails from './CourseDetails';
import ContactDialog from "../../../../commons/ContactDialog";
import NumberWithUnitField from '../../../../commons/fields/NumberWithUnitField';
import SectorField from '../../../../commons/fields/SectorField';
import CourseSubHeader from "./CourseSubHeader";
import SimilarList from "../../../../commons/lists/FeaturedList/SimilarList";
import ApplyButton from "../../../../commons/buttons/ApplyButton";
import GroupOfFields from '../../../../commons/fields/GroupOfFields';
import TimelineList from '../../../../commons/lists/TimelineList';
import { linkToFilteredList } from "../../../../utils";
import PictoParcours from '../../../../icons/PictoParcours.png' ;
import urlJoin from 'url-join';

const useStyles = resourceShowStyle;

const CourseShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const mentions = useMentions('Person');
  const classes = useStyles();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            details={<CourseDetails />}
            actionButton={<ApplyButton />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ApplyButton />}
              >
                <CourseDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="A propos du voyage"
              sources={["cdlt:referenceNumber","pair:comment","pair:hasFinality","pair:hasSector","cdlt:hasCourseType","pair:hasTopic","cdlt:hasTargetAudience","pair:description"]}
              addLabel
              noBorder
            >
              <TextField variant="body2" source="cdlt:referenceNumber" />
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
            </GroupOfFields>
            <GroupOfFields
              title="Compétences"
              sources={["cdlt:requiredSkills","pair:produces","cdlt:learningObjectives"]}
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
              <ReferenceArrayField reference="JobOpportunities" source="cdlt:hasJobOpportunities">
                <SingleFieldList linkType={false}>
                  <ChipField source="pair:label" />
                </SingleFieldList>
              </ReferenceArrayField>
            </GroupOfFields>
            <ReferenceArrayField
              label="Itinéraire"
              reference="Event"
              source="pair:hasPart"
              sort={{ field: 'pair:startDate', order: 'ASC' }}
            >
              <TimelineList />
            </ReferenceArrayField>
            <MarkdownField source="cdlt:organizerDescription" />
            <MarkdownField source="cdlt:mentorDescription" />
            <GroupOfFields
              title="Modalités d'accueil"
              sources={["cdlt:practicalConditions","cdlt:minimumCapacity","cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
              <NumberWithUnitField source="cdlt:minimumCapacity" addLabel unit='personnes' color="grey40" />
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <GroupOfFields
              title="Conditions financières"
              sources={["cdlt:economicalConditions","cdlt:financialSupport"]}
              addLabel
            >
              <MarkdownField source="cdlt:economicalConditions" />
              <MarkdownField source="cdlt:financialSupport" popover=
              {<Link to={linkToRecord("/Page",urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'pages', 'dispositifs-de-financements'),"show")} target="_blank" rel="noopener noreferrer">Découvrir les différents dispositifs de financement</Link>}/>
              <MarkdownField source="cdlt:evaluationMethod" />
            </GroupOfFields>
            <ReferenceArrayField
              label="Localisation"
              reference="Event"
              source="pair:hasPart"
              sort={{ field: 'pair:startDate', order: 'ASC' }}
            >
              <MapList
                latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
                longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
                label={(record) => record?.['pair:label']}
                description={(record) => record?.['pair:comment']}
                groupClusters={false}
                connectMarkers
                boundToMarkers
                scrollWheelZoom={false}
                dragging={false}
              />
            </ReferenceArrayField>
            <UrlField source="pair:homePage" label="Liens" className={classes.urlField} />
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <SimilarList
            resource="Course"
            basePath="/Course"
            logo={PictoParcours}
            title="Nos voyages"
            subtitle="Similaires"
            headComment=""
            linkText="Voir tous les voyages"
            CardSubHeaderComponent={CourseSubHeader}
          />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default CourseShow;
