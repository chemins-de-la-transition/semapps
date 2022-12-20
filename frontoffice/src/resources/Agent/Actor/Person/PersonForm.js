import React, { useMemo } from 'react';
import { FormTab, ImageInput, TabbedForm, TextInput, useGetIdentity } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
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
  TopicsInput
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const PersonForm = ({ ...rest }) => {
  const { identity } = useGetIdentity();
  const TRAVELER_TYPE_URL = process.env.REACT_APP_MIDDLEWARE_URL + 'types/traveler';
  const isTraveler = useMemo( () => {
    return ! identity?.webIdData?.['pair:hasType'] || identity.webIdData?.['pair:hasType'] === TRAVELER_TYPE_URL
  }, [identity, TRAVELER_TYPE_URL]);

  return (
    <TabbedForm {...rest} redirect="show">
      <FormTab label="A propos de toi">
        <TextInput source="pair:firstName" label="Ton prénom" fullWidth />
        <TextInput source="pair:lastName" label="Ton nom de famille" fullWidth />
        <TextInput source="pair:alternativeLabel" label="Ton nom d'utilisateur" fullWidth />
        <TextInput source="pair:comment" label="Qui es-tu en une phrase ?" fullWidth />
        <TextInput source="pair:homePage" label="Un lien à propos de toi ?" fullWidth />
        <MarkdownInput source="pair:description" label="N\'hésite pas à te décrire plus longuement !" fullWidth />
        <MarkdownInput source="cdlt:intentions" label="Tes intentions en venant sur les chemins de la transition ?" fullWidth />

        <ImageInput source="pair:depictedBy" label="Ta photo ! (C'est important pour la convivialité de la plateforme)" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <SectorsInput source="pair:hasSector" label="Tu t'intéresses à des secteurs d'activité en particulier ?" />
        <TopicsInput source="pair:hasTopic" label="C'est quoi tes centres d'intérêts ?" />
        <SkillsInput source="pair:offers" label="C\'est quoi tes compétences actuelles ?" />
        <SkillsInput source="pair:aims" label="Quelles sont les compétences que tu recherches ?" fullWidth />
        <FinalitiesInput source="pair:hasFinality" label="Quelles sont les finalités que tu poursuis ?" />
        <TextInput source="pair:phone" label="Ton numéro de téléphone ?" fullWidth helperText="Non visible sur la plateforme" />
        {/*
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        */}
        <PairLocationInput source="pair:hasLocation" label="Tu vis où ?" fullWidth />
        {/*
        <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
        <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        */}
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec toi">
        { ! isTraveler && 
          <>
            <OrganizationsInput source="pair:affiliatedBy" label="Membre d'une (ou plusieurs) organisations ?" />
            <PersonsInput source="pair:inspiredBy" label="Des personnes t'inspirent ?" />
          </>
        }
      </FormTab>
    </TabbedForm>
  );
};

export default PersonForm;
