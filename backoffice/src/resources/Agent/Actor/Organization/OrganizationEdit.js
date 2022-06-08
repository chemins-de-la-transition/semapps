import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import { UsersInput, OrganizationsInput, ActivitiesInput, SectorsInput, ThemesInput, PairLocationInput, RegionsInput, TypesInput, PathsInput, PlacesInput } from '../../../../pair';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <EditWithPermissions title={<OrganizationTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput source="pair:description" fullWidth />
      <TextInput source="pair:homePage" fullWidth />
      <ImageInput source="pair:depictedBy" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <OrganizationsInput source="pair:partnerOf" />
      <UsersInput source="pair:affiliates" />
      <ActivitiesInput source="cdlt:organizes" />
      <SectorsInput source="pair:hasSector" />
      <ThemesInput source="pair:hasTopic" />
      <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
      <PathsInput source="cdlt:supports" />
      <PairLocationInput source="pair:hasLocation" fullWidth />
      <RegionsInput source="cdlt:hasRegion" fullWidth />
      <PlacesInput source="cdlt:organizationHostedIn" />
    </SimpleForm>
  </EditWithPermissions>
);

export default OrganizationEdit;
