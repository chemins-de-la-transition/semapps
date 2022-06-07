import React from 'react';
import { ShowBase, TextField, FunctionField } from 'react-admin';
import { Box } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import EventDetails from './EventDetails';
import ContactField from "../../../commons/fields/ContactField";
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import SimilarEvents from "../../../commons/lists/EventsList/SimilarEvents";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import EventAlert from "./EventAlert";
import EventMapField from "./EventMapField";
import GroupOfFields from '../../../commons/fields/GroupOfFields';
import CategoriesField from '../../../commons/fields/CategoriesField';
import CourseCard from '../Course/CourseCard';
import CardsList from '../../../commons/lists/CardsList';
import PathCard from '../../Idea/Path/PathCard';

const EventShow = (props) => (
  <ShowBase {...props}>
    <>
      <HeaderShow
        type="pair:hasType"
        linkToListText="Liste des évènements"
        details={<EventDetails />}
        actionButton={<ApplyButton />}
      />
      <BodyList
        aside={
          <StickyCard actionButton={<ApplyButton />}>
            <EventDetails orientation="vertical" />
          </StickyCard>
        }
        alert={<EventAlert />}
      >
        <GroupOfFields
          title="Présentation"
          source="cdlt:description"
          addLabel
        >
          <MarkdownField source="pair:description" />
          <ReferenceArrayField reference="TargetAudience" source="cdlt:targetAudience" >
            <SeparatedListField link={false} separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Organization" source="cdlt:organizedBy" >
            <SeparatedListField link="show" separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:organizerDescription" />
          <ReferenceArrayField reference="Person" source="cdlt:hasMentor" >
            <SeparatedListField link="show" separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:mentorDescription" />
          <ReferenceArrayField reference="Theme" source="pair:hasSector">
            <CategoriesField>
              <TextField source="pair:label" />
            </CategoriesField>
          </ReferenceArrayField>
        </GroupOfFields>
        <MarkdownField source="cdlt:program" />
        <GroupOfFields
          title="Compétences"
          source="cdlt:prerequisites"
          addLabel
        >
          <MarkdownField source="cdlt:prerequisites" />
          <MarkdownField source="cdlt:learningObjectives" />
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <MarkdownField source="cdlt:pedagogicalMeans" />
          <MarkdownField source="cdlt:evaluationMethod" />
        </GroupOfFields>
        <GroupOfFields
          title="Informations pratiques"
          source="cdlt:practicalConditions"
          addLabel
        >
          <MarkdownField source="cdlt:practicalConditions" />
          <FunctionField 
            label="Nombre de participants" 
            source="cdlt:attendeesMax" 
            render={record => `${record['cdlt:attendeesMin']} - ${record['cdlt:attendeesMax']} ${record['cdlt:full']?' (Complet)':''}`}
          />
          <MarkdownField source="cdlt:accessibility" />
        </GroupOfFields>
        <GroupOfFields
          title="Conditions financières"
          source="cdlt:price"
          addLabel
        >
          <FunctionField source="cdlt:price" render={record => `${record['cdlt:price']} €`} />
          <MarkdownField source="cdlt:economicalConditions" />
          <FunctionField 
            source="cdlt:financialSupport" 
            render={record => `Éligible aux dispositifs de financements : ${record['cdlt:financialSupport']}`}
          />
        </GroupOfFields>
        <ReferenceArrayField reference="Course" source="pair:partOf">
          <div style={{paddingTop:10}}>
          <CardsList CardComponent={CourseCard}/>
          </div>
        </ReferenceArrayField>
        <EventMapField addLabel source="pair:hasLocation" />
        <ContactField
          source="pair:phone"
          phone="pair:phone"
          website="pair:aboutPage"
          mail="pair:e-mail"
        />
        <ReferenceArrayField source="cdlt:eventOn" reference="Path">
          <Box pt={1}>
            <CardsList CardComponent={PathCard} />
          </Box>
        </ReferenceArrayField>
      </BodyList>
      <Box>
        <SimilarEvents />
      </Box>
    </>
  </ShowBase>
);

export default EventShow;
