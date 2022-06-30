import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
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
  ThemesInput,
  TypeInput,
  StatusInput
} from '../../../../pair';
import { ImageField } from '@semapps/semantic-data-provider';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import PersonTitle from './PersonTitle';

export const PersonEdit = (props) => (
  <EditWithPermissions
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
      <FormTab label="A propos de la personne">
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:alternativeLabel" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
        <TextInput source="pair:phone" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <SkillsInput source="pair:offers" />
        <SkillsInput source="pair:aims" fullWidth />
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
      <FormTab label="En lien avec la personne">
        <OrganizationsInput source="pair:affiliatedBy" />
        <OrganizationsInput source="pair:inspiredBy" />
        <PlacesInput source="cdlt:proposes" />
        <ActivitiesInput source="cdlt:organizes" />
        <ActivitiesInput source="cdlt:mentorOn" />
        <PathsInput source="cdlt:supports" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PersonEdit;
