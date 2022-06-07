import React from 'react';
import { SimpleForm, ImageInput, TextInput, useGetIdentity } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { 
  UsersInput,
  OrganizationsInput,
  ActivitiesInput,
  SectorsInput,
  ThemesInput,
  PathsInput,
  RegionsInput,
  TypesInput,
  PairLocationInput,
  PlacesInput,
} from '../../../../pair';

const OrganizationForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <SimpleForm
      initialValues={mode === 'create' ? { 'pair:affiliatedBy': identity?.id } : undefined}
      {...rest}
      redirect="/MyOrganizations"
    >
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
      <PlacesInput source="cdlt:organizationHostedIn" fullWidth />
    </SimpleForm>
  );
};

export default OrganizationForm;