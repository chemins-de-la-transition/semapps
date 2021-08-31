import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from '@semapps/auth-provider';
import {
  ActivitiesInput,
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
    <SimpleForm redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:lastName" fullWidth />
      <TextInput source="foaf:email" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ActivitiesInput source="cdlt:mentorOn" />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
      <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
      <OrganizationsInput source="pair:affiliatedBy" />
      <SkillsInput source="pair:offers" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default PersonEdit;
