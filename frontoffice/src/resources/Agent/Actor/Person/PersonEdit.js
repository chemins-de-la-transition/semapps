import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Container } from '@material-ui/core';
import { EditWithPermissions } from '@semapps/auth-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  /*
  ActivitiesInput,
  OrganizationsInput,
  */
  PairLocationInput,
  /*
  SkillsInput,
  ThemesInput,
  */
} from '../../../../pair';
import { ImageField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';

export const PersonEdit = (props) => (
  <Container maxWidth="xl">
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
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <ImageInput source="pair:image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:phone" fullWidth />
        {/*
        <ActivitiesInput source="cdlt:mentorOn" />
        <OrganizationsInput source="pair:affiliatedBy" />
        <SkillsInput source="pair:offers" />
        <ThemesInput source="pair:hasTopic" />
        */}
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </SimpleForm>
    </EditWithPermissions>
  </Container>
);

export default PersonEdit;
