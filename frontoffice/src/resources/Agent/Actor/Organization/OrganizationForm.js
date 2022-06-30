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
      <FormTab label="A propos de l'organisation">
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:homePage" fullWidth />
        <TextInput source="pair:e-mail" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />        
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:OrganizationType' }} />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec l'organisation">
        <OrganizationsInput source="pair:partnerOf" />
        <OrganizationsInput source="pair:inspiredBy" />
        <PlacesInput source="cdlt:organizationHostedIn" fullWidth />
        <ActivitiesInput source="cdlt:organizes" />
        <UsersInput source="pair:affiliates" />
        <PathsInput source="cdlt:supports" />    
      </FormTab>
    </TabbedForm>
  );
};

export default OrganizationForm;