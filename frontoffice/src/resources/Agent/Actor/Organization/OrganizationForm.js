import React from 'react';
import { FormTab, ImageInput, NumberInput, TabbedForm, TextInput, useGetIdentity } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
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
  TypesInput,
  UsersInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const OrganizationForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'pair:affiliatedBy': identity?.id } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="Principal">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:OrganizationType' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="Relations">
        <OrganizationsInput source="pair:partnerOf" />
        <OrganizationsInput source="pair:inspiredBy" />
        <UsersInput source="pair:affiliates" />
        <ActivitiesInput source="cdlt:organizes" />
        <PathsInput source="cdlt:supports" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <PlacesInput source="cdlt:organizationHostedIn" fullWidth />
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
    </TabbedForm>
  );
};

export default OrganizationForm;