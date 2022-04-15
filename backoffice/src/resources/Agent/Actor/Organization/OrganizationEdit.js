import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import { UsersInput, OrganizationsInput, ActivitiesInput, SectorInput, ThemesInput, PairLocationInput } from '../../../../pair';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <EditWithPermissions title={<OrganizationTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:homePage" fullWidth />
      <ImageInput source="pair:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <SectorInput source="pair:hasSector" />
      <OrganizationsInput source="pair:partnerOf" />
      <UsersInput source="pair:affiliates" />
      <ActivitiesInput source="cdlt:organizes" />
      <ThemesInput source="pair:hasTopic" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
    </SimpleForm>
  </EditWithPermissions>
);

export default OrganizationEdit;
