import React from 'react';
import { FormTab, ImageInput, NumberInput, TabbedForm, TextInput, email } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  PathsInput, 
  ActorsInput,
  EventsInput,
  FinalitiesInput,
  PersonsInput,
  TopicsInput,
  SectorsInput,
//  StatusInput,
  TypesInput,
  SkillsInput,
//  DocumentsType,
  RegistrationInput,
  TargetAudienceInput,
  JobOpportunitiesInput,
} from '../../../../pair';
import CourseTitle from './CourseTitle';
import { DateInput } from '@semapps/date-components';
import frLocale from 'date-fns/locale/fr';
import Edit from "../../../../layout/edit/Edit";

const CourseEdit = (props) => (
  <Edit title={<CourseTitle />} {...props}>
    <TabbedForm redirect="show">
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
        <TargetAudienceInput source="cdlt:hasTargetAudience" label="A qui s'adresse t'il ?" fullWidth/>
        <MarkdownInput source="cdlt:organizerDescription" label="Qui sont les organisateurs ?" fullWidth />
        <MarkdownInput source="cdlt:mentorDescription" label="Qui sont les intervenants ?" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" label="Y a t'il des prérequis pour participer à ce voyage ? Si oui, lesquels ?" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label="Quelles sont les modalités d'accueil et les infos pratiques ?" fullWidth />
        <NumberInput source="cdlt:minimumCapacity" label="Nombre minimum de participants pour que le voyage ait lieu" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Nombre maximum de participants" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" label="Quels sont les objectifs pédagogiques ?" fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" "Peut-il ouvrir sur des opportunités d'activité ou d'emploi ? Si oui, lesquelles ?" fullWidth />
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
      <FormTab label="En lien avec le voyage">
        <TypesInput source="cdlt:hasCourseType" label="A quel mode de voyage correspond-il ?" filter={{ a: 'cdlt:CourseType' }} />
        <EventsInput source="pair:hasPart" label="Quelles sont les étapes (événements) constitutives de ce voyage" fullWidth helperText="Vous devez au préalable avoir créé les événements correspondant aux différentes étapes de votre voyage" />
        <PathsInput source="cdlt:courseOn" label="De quel(s) chemin(s) votre voyage fait-il partie ?" />
        <SectorsInput source="pair:hasSector" label="Dans quel secteur(s) d'activité(s) s'inscrit-il ?" />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés choisiriez-vous pour le caractériser ?" />
        <SkillsInput source="cdlt:requiredSkills" label="Quelles sont les compétences requises pour y participer ?" />
        <SkillsInput source="pair:produces" label="Quelles compétences permet-il d'acquérir ?" />
        <ActorsInput source="cdlt:organizedBy" label="Qui sont les organisateur.trice.s (individus et organisations) ?" />
        <PersonsInput source="cdlt:hasMentor" label="Qui sont les intervenant.e.s ?" />
        {/*<DocumentsType source="pair:documentedBy" />*/}
        <FinalitiesInput source="pair:hasFinality" label="A quoi contribue t'il ?" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:homePage" fullWidth/>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default CourseEdit;
