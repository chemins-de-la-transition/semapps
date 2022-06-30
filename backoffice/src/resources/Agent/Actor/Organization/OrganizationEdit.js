import React from 'react';
import { FormTab, NumberInput, TabbedForm, TextInput, ImageInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
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
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <EditWithPermissions title={<OrganizationTitle />} {...props}>
    <TabbedForm
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
  </EditWithPermissions>
);

export default OrganizationEdit;
