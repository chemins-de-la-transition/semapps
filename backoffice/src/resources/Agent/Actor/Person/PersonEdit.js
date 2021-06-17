import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { EditWithPermissions } from "@semapps/auth-provider";
import { ActivitiesInput, OrganizationsInput, PairLocationInput, SkillsInput, ThemesInput } from '../../../../pair';
import { ImageField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';

export const PersonEdit = props => (
  <EditWithPermissions title={<PersonTitle />} transform={data => ({ ...data, 'pair:label': `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`})} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:lastName" fullWidth />
      <TextInput source="pair:e-mail" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ActivitiesInput source="cdlt:mentorOn" />
      <OrganizationsInput source="pair:affiliatedBy" />
      <SkillsInput source="pair:offers" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default PersonEdit;
