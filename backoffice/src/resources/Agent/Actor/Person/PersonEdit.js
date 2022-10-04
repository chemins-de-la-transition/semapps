import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  ActivitiesInput,
  FinalitiesInput,
  OrganizationsInput,
  PairLocationInput,
  PathsInput,
  PlacesInput,
  SectorsInput,
  SkillsInput,
  TopicsInput,
  TypeInput,
  StatusInput
} from '../../../../pair';
import { ImageField } from '@semapps/field-components';
import ReminderBeforeRecording from '../../../../common/ReminderBeforeRecording';
import PersonTitle from './PersonTitle';
import Edit from "../../../../layout/edit/Edit";

export const PersonEdit = (props) => (
  <Edit
    title={<PersonTitle />}
    transform={(data) => ({
      ...data,
      'pair:label': 
        data['pair:alternativeLabel']
          ? data['pair:alternativeLabel']
          : `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`
    })}
    {...props}
  >
    <TabbedForm redirect="show">
      <FormTab label="Principal">
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:alternativeLabel" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        {/*}
        <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
        <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        */}
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="pair:affiliatedBy" />
        <OrganizationsInput source="pair:inspiredBy" />
        <PlacesInput source="cdlt:proposes" />
        <ActivitiesInput source="cdlt:mentorOn" />
        <ActivitiesInput source="cdlt:organizes" />
        <SectorsInput source="pair:hasSector" />
        <TopicsInput source="pair:hasTopic" />
        <PathsInput source="cdlt:supports" />
        <SkillsInput source="pair:offers" />
        <SkillsInput source="pair:aims" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PersonEdit;
