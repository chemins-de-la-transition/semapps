import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  ActivitiesInput,
  IntentionInput,
  OrganizationsInput,
  PairLocationInput,
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
      'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`,
    })}
    {...props}
  >
    <TabbedForm redirect="show">
      <FormTab label="Principal">
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:phone" fullWidth />
        <ActivitiesInput source="cdlt:mentorOn" />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="pair:affiliatedBy" />
        <SkillsInput source="pair:offers" />
        <ThemesInput source="pair:hasTopic" />
        <IntentionInput source="pair:aims" />
        <IntentionInput source="cdlt:aimsAsHost" />
        <IntentionInput source="cdlt:aimsAsOrganizer" />
        <IntentionInput source="cdlt:aimsAsMentor" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default PersonEdit;
