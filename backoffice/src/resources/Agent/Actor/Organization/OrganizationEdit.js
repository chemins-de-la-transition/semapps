import React from 'react';
import { FormTab, NumberInput, TabbedForm, TextInput, ImageInput, email } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { ImageField } from '@semapps/semantic-data-provider';
import { MultiLinesInput } from "@semapps/input-components";
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
  StatusInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import OrganizationTitle from './OrganizationTitle';

export const OrganizationEdit = (props) => (
  <EditWithPermissions title={<OrganizationTitle />} {...props}>
    <TabbedForm
      redirect="show"
    >
      <FormTab label="Principal">
        <TextInput source="pair:label" fullWidth />
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
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
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:OrganizationStatus' }} fullWidth helperText="Un statut de partenaire permettra d'afficher l'organisation sur la page d'accueil"/>
        <OrganizationsInput source="pair:inspiredBy" />
        <UsersInput source="pair:affiliates" />
        <ActivitiesInput source="cdlt:organizes" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <PathsInput source="cdlt:supports" />
        <PlacesInput source="cdlt:organizationHostedIn" fullWidth />
        <SkillsInput source="pair:produces" fullWidth />
        <SkillsInput source="pair:aims" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
      <FormTab label="Contact">
        <MultiLinesInput source="pair:homePage" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="cdlt:publicPhone" fullWidth helperText="Numéro public affiché sur la page" />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default OrganizationEdit;
