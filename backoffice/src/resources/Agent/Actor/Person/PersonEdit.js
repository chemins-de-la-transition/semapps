import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  ActivitiesInput,
  FinalitiesInput,
  OrganizationsInput,
  PairLocationInput,
  PlacesInput,
  SectorsInput,
  SkillsInput,
  ThemesInput,
  TypeInput,
  StatusInput
} from '../../../../pair';
import { ImageField } from '@semapps/semantic-data-provider';
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
      <FormTab label="Principal">
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:alternativeLabel" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <TextInput source="pair:phone" fullWidth />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        {/*}
        <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
        <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        */}
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="pair:affiliatedBy" />
        <PlacesInput source="cdlt:proposes" />
        <ActivitiesInput source="cdlt:mentorOn" />
        <ActivitiesInput source="cdlt:organizes" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <SkillsInput source="pair:offers" />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PersonEdit;
