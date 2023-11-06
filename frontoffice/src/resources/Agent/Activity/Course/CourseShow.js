import React, { useState } from 'react';
import { ChipField, SingleFieldList, TextField, UrlField, Link, linkToRecord, useTranslate} from 'react-admin';
import ShowBaseOnlyIfPublished from '../../../../commons/ShowBaseOnlyIfPublished';
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
import Traveler from "../../../../pages/HomePage/Traveler/Traveler";

const useStyles = resourceShowStyle;

const CourseShow = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const mentions = useMentions('Person');
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBaseOnlyIfPublished {...props}>
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
              title={translate('app.tab.course.about')}
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
              title={translate('app.tab.skills')}
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
              label={translate('app.tab.course.pathway')}
              reference="Event"
              source="pair:hasPart"
              sort={{ field: 'pair:startDate', order: 'ASC' }}
              filter={{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}
            >
              <TimelineList />
            </ReferenceArrayField>
            <MarkdownField source="cdlt:organizerDescription" />
            <MarkdownField source="cdlt:mentorDescription" />
            <GroupOfFields
              title={translate('app.tab.accommodation')}
              sources={["cdlt:practicalConditions","cdlt:minimumCapacity","cdlt:maximumCapacity"]}
              addLabel
            >
              <MarkdownField source="cdlt:practicalConditions" addLabel={false} />
              <NumberWithUnitField source="cdlt:minimumCapacity" addLabel unit='personnes' color="grey40" />
              <NumberWithUnitField source="cdlt:maximumCapacity" addLabel unit='personnes' color="grey40" />
            </GroupOfFields>
            <GroupOfFields
              title={translate('app.tab.economicalConditions')}
              sources={["cdlt:economicalConditions","cdlt:financialSupport"]}
              addLabel
            >
              <MarkdownField source="cdlt:economicalConditions" />
              <MarkdownField source="cdlt:financialSupport" popover=
              {<Link to={linkToRecord("/Page",urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'pages', 'dispositifs-de-financements'),"show")} target="_blank" rel="noopener noreferrer">{translate('app.notification.financialSupport')}</Link>}/>
              <MarkdownField source="cdlt:evaluationMethod" />
            </GroupOfFields>
            <ReferenceArrayField
              label={translate('app.tab.course.location')}
              reference="Event"
              source="pair:hasPart"
              sort={{ field: 'pair:startDate', order: 'ASC' }}
              filter={{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}
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
            <UrlField source="pair:homePage" label={translate('app.tab.links')} className={classes.urlField} />
            <CommentsField userResource="Person" mentions={mentions} />
          </BodyList>
          <SimilarList
            resource="Course"
            basePath="/Course"
            logo={PictoParcours}
            title={translate('app.tab.course.title')}
            subtitle={translate('app.tab.course.subTitle')}
            headComment=""
            linkText={translate('app.tab.course.linkText')}
            CardSubHeaderComponent={CourseSubHeader}
          />
          <Traveler />
          <br />
          <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </Box>
      </ShowBaseOnlyIfPublished>
    </ThemeProvider>
  );
};

export default CourseShow;
