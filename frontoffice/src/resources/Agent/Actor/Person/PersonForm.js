import React, { useMemo } from 'react';
import { FormTab, ImageInput, TabbedForm, TextInput, useGetIdentity } from 'react-admin';
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
  ThemesInput
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const PersonForm = ({ ...rest }) => {
  const { identity } = useGetIdentity();
  const TRAVELER_TYPE_URL = process.env.REACT_APP_MIDDLEWARE_URL + 'types/traveler';
  const isTraveler = useMemo( () => {
    return ! identity?.webIdData?.['pair:hasType'] || identity.webIdData.['pair:hasType'] === TRAVELER_TYPE_URL
  }, [identity, TRAVELER_TYPE_URL]);

  return (
    <TabbedForm {...rest} redirect="show">
      <FormTab label="A propos de vous">
        <ImageInput source="pair:depictedBy" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="pair:firstName" fullWidth />
        <TextInput source="pair:lastName" fullWidth />
        <TextInput source="pair:alternativeLabel" fullWidth helperText="Renseignez un nom d'utilisateur pour que votre nom n'apparaisse pas publiquement" />
        <TextInput source="pair:homePage" fullWidth helperText="Un lien sur le web ? (Site web, réseau social...)"/>
        <TextInput source="pair:phone" fullWidth helperText="Ne s'affichera pas publiquement" />
        <PairLocationInput source="pair:hasLocation" fullWidth helperText="Renseignez au choix une adresse précise ou seulement une commune"/>
        <TextInput source="pair:comment" fullWidth />
        <MarkdownInput source="pair:description" fullWidth />
        <MarkdownInput source="cdlt:intentions" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <SkillsInput source="pair:offers" />
        <SkillsInput source="pair:aims" fullWidth />
        {/*
        <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
        */}
        
        {/*
        <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
        <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
        <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        */}
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec vous">
        { ! isTraveler && 
          <>
            <OrganizationsInput source="pair:affiliatedBy" helperText="Tu es membre d'une ou plusieurs organisations ?"/>
            <OrganizationsInput source="pair:inspiredBy" helperText="Des personnes t'inspirent ?"/>
            <PlacesInput source="cdlt:proposes" helperText="Tu es l'hôte d'un lieu ?"/>
            <ActivitiesInput source="cdlt:organizes" helperText="Tu contribues à l'organisation d'un évenement ou d'un voyage ?"/>
            <ActivitiesInput source="cdlt:mentorOn" helperText="Tu es intervenant sur un évenement ou un voyage ?"/>
            <PathsInput source="cdlt:supports" helperText="Tu contribues à la construction d'un chemin ?"/>
          </>
        }
      </FormTab>
    </TabbedForm>
  );
};

export default PersonForm;