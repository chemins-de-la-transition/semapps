import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { Container } from '@material-ui/core';
import { EditWithPermissions } from '@semapps/auth-provider';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  ActivitiesInput,
  IntentionsInput,
  OrganizationsInput,
  PairLocationInput,
  PlacesInput,
  SectorInput,
  SkillsInput,
  ThemesInput,
  // TypeInput,
  // StatusInput
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
      <TabbedForm redirect="show">
        <FormTab label="Principal">
          <TextInput source="pair:firstName" fullWidth />
          <TextInput source="pair:lastName" fullWidth />
          <TextInput source="pair:comment" fullWidth />
          <MarkdownInput source="pair:description" fullWidth />
          <ImageInput source="pair:image" accept="image/*">
            <ImageField source="src" />
          </ImageInput>
          <TextInput source="pair:phone" fullWidth />
          {/*
          <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
          <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
          */}
          <SectorInput source="pair:hasSector" />
          <PairLocationInput source="pair:hasLocation" fullWidth />
        </FormTab>
        <FormTab label="Relations">
          <OrganizationsInput source="pair:affiliatedBy" />
          <PlacesInput source="cdlt:proposes" />
          <ActivitiesInput source="cdlt:mentorOn" />
          <ActivitiesInput source="cdlt:organizes" />
          <SkillsInput source="pair:offers" />
          <ThemesInput source="pair:hasTopic" />
          <IntentionsInput source="pair:aims" />
          <IntentionsInput source="cdlt:aimsAsHost" />
          <IntentionsInput source="cdlt:aimsAsOrganizer" />
          <IntentionsInput source="cdlt:aimsAsMentor" />
        </FormTab>
      </TabbedForm>
    </EditWithPermissions>
  </Container>
);

export default PersonEdit;
