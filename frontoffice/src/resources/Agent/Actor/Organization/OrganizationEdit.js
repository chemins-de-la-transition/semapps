import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { Container } from '@material-ui/core';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import { 
  UsersInput,
  OrganizationsInput,
  ActivitiesInput,
  SectorsInput,
  ThemesInput,
  PairLocationInput 
} from '../../../../pair';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <Container maxWidth="xl">
    <EditWithPermissions title={<OrganizationTitle />} {...props}>
      <SimpleForm redirect="show">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
        <ImageInput source="pair:image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <OrganizationsInput source="pair:partnerOf" />
        <UsersInput source="pair:affiliates" />
        <ActivitiesInput source="cdlt:organizes" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <PairLocationInput source="pair:hasLocation" fullWidth />
      </SimpleForm>
    </EditWithPermissions>
  </Container>
);

export default OrganizationEdit;
