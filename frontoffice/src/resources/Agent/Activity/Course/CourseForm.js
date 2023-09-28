import React from 'react';
import {
  DateInput,
  NumberInput,
  FormTab,
  ImageInput,
  TabbedForm,
  TextInput,
  email,
  useGetIdentity
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  ActorsInput,
  EventsInput,
  FinalitiesInput,
  JobOpportunitiesInput,
  PathsInput,
  PersonsInput,
  PublicationStatusInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
  TargetAudienceInput,
  TopicsInput,
  TypesInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import frLocale from 'date-fns/locale/fr';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacer: {
    marginTop: 16,
  },
}));

const CourseForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  const classes = useStyles();
  return (
    <TabbedForm
      initialValues={mode === 'create' ? { 'cdlt:organizedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="A propos du voyage">
        <TextInput source="pair:label" label="Nom du voyage" fullWidth />
        <TextInput source="pair:comment" label="Comment le décririez-vous en une phrase ?" fullWidth />
        <ImageInput source="pair:depictedBy" label="Vous pouvez mettre 2 images !" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <DateInput
          source="pair:startDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <DateInput
          source="pair:endDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <MarkdownInput source="pair:description" label="N'hésitez pas à le décrire plus longuement ici" fullWidth />
        <TypesInput source="cdlt:hasCourseType" label="A quel mode de voyage correspond-il ?" filter={{ a: 'cdlt:CourseType' }} />
        <SectorsInput source="pair:hasSector" label="Dans quel secteur(s) d'activité(s) s'inscrit-il ?" />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés choisiriez-vous pour le caractériser ?" /> 
        <FinalitiesInput source="pair:hasFinality" label="A quoi contribue t'il ?" />
        <TargetAudienceInput source="cdlt:hasTargetAudience" label="A qui s'adresse t'il ?" fullWidth/>
        <ActorsInput source="cdlt:organizedBy" label="Qui sont les organisateur.trice.s (individus et organisations) ?" />
        <MarkdownInput source="cdlt:organizerDescription" label="Vous pouvez les décrire ici" fullWidth />
        <PathsInput source="cdlt:courseOn" label="De quel(s) chemin(s) votre voyage fait-il partie ?" />
        <EventsInput source="pair:hasPart" label="Quelles sont les étapes (événements) constitutives de ce voyage" fullWidth helperText="Vous devez au préalable avoir créé les événements correspondant aux différentes étapes de votre voyage" />       
        <Box className={classes.spacer}></Box>
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="Volet pédagogique">
        <PersonsInput source="cdlt:hasMentor" label="Qui sont les intervenant.e.s ?" />
        <MarkdownInput source="cdlt:mentorDescription" label="Vous pouvez les décrire ici" fullWidth />
        <SkillsInput source="cdlt:requiredSkills" label="Quelles sont les compétences requises pour y participer ?" />
        <MarkdownInput source="cdlt:prerequisites" label="Vous pouvez décrire les prérequis ici" fullWidth />
        <SkillsInput source="pair:produces" label="Quelles compétences permet-il d'acquérir ?" />
        <MarkdownInput source="cdlt:learningObjectives" label="Quels sont les objectifs pédagogiques ?" fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" label="Peut-il ouvrir sur des opportunités d'activité ou d'emploi ? Si oui, lesquelles ?" fullWidth />
        {/*<DocumentsType source="pair:documentedBy" />*/}
      </FormTab>
      <FormTab label="Infos pratiques">
        <MarkdownInput source="cdlt:practicalConditions" label="Quelles sont les modalités d'accueil ?" fullWidth />
        <NumberInput source="cdlt:minimumCapacity" label="Nombre minimum de participants pour que le voyage ait lieu" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Nombre maximum de participants" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth/>
        <MarkdownInput source="cdlt:economicalConditions" label="Quelles sont les conditions financières pour y participer ?" fullWidth />
        <MarkdownInput source="cdlt:financialSupport" label="Ce voyage est-il éligible à des dispositifs de financement ?" fullWidth />
        <RegistrationInput 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"          
          fullWidth
        />
      </FormTab>
      <FormTab label="Visibilité">
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default CourseForm;
