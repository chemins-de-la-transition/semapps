import React from 'react';
import { ImageInput, FormTab, TabbedForm, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import {
  ActivitiesInput,
  FinalitiesInput,
  PersonsInput,
  OrganizationsInput,
  PairLocationInput,
  PathsInput,
  PlacesInput,
  SectorsInput,
  SkillsInput,
  TopicsInput,
  TypeInput,
  StatusInput
} from '../../../../pair';
import { ImageField } from '@semapps/field-components';
import ReminderBeforeRecording from '../../../../common/ReminderBeforeRecording';
import PersonTitle from './PersonTitle';
import Edit from "../../../../layout/edit/Edit";

export const PersonEdit = (props) => (
  <Edit
    title={<PersonTitle />}
    transform={(data) => {
      const label = data['pair:alternativeLabel']
        ? data['pair:alternativeLabel']
        : `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`;
      return ({
        ...data,
        name: label,
        'foaf:name': label,
        'pair:label': label
      });
    }}
    {...props}
  >
    <TabbedForm redirect="show">
      <FormTab label="A son propos">
        <TextInput source="pair:firstName" label="Son prénom" fullWidth />
        <TextInput source="pair:lastName" label="Son nom de famille" fullWidth />
        <TextInput source="pair:alternativeLabel" label="Son nom d'utilisateur.trice" fullWidth />
        <TextInput source="pair:comment" label="Qui est-il/elle en une phrase ?" fullWidth />
        <TextInput source="pair:homePage" label="Un lien à propos de lui/elle ?" fullWidth />
        <MarkdownInput source="pair:description" label="N\'hésite pas à le/la décrire plus longuement !"  fullWidth />
        <MarkdownInput source="cdlt:intentions" label="Ses intentions en venant sur les chemins de la transition ?"  fullWidth />
        <ImageInput source="pair:depictedBy" label="Ta photo ! (C'est important pour la convivialité de la plateforme)" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <SectorsInput source="pair:hasSector" label="Il/elle s'intéresses à des secteurs d'activité en particulier ?" />
        <TopicsInput source="pair:hasTopic" label="C'est quoi ses centres d'intérêts ?" />
        <SkillsInput source="pair:offers" label="C\'est quoi ses compétences actuelles ?" />
        <SkillsInput source="pair:aims" label="Quelles sont les compétences qu'il/elle recherche ?" fullWidth />
        <FinalitiesInput source="pair:hasFinality" label="Quelles sont les finalités qu'il/elle poursuit ?"  />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        {/*}
        <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
        <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        */}
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec lui/elle">
        <OrganizationsInput source="pair:affiliatedBy" label="Il/elle est membre d'une (ou plusieurs) organisations ?" />
        <PersonsInput source="pair:inspiredBy" />
        <PlacesInput source="cdlt:proposes" />
        <ActivitiesInput source="cdlt:mentorOn" />
        <ActivitiesInput source="cdlt:organizes" />
        <PathsInput source="cdlt:supports" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default PersonEdit;
