import React from 'react';
import { TabbedForm, FormTab, TextInput, ImageInput, BooleanInput, NumberInput, email, required } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import { MarkdownInput } from '@semapps/markdown-components';
import { EditWithPermissions } from '@semapps/auth-provider';
import { DateTimeInput } from '@semapps/date-components';
import { ImageField } from '@semapps/semantic-data-provider';
import {
  ActorsInput,
  CoursesInput,
  FinalitiesInput,
  PairLocationInput,
  PathsInput,
  PersonsInput,
  PlaceInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
  ThemesInput,
  TargetAudienceInput,
  TypesInput
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import EventTitle from './EventTitle';

const EventEdit = (props) => (
  <EditWithPermissions title={<EventTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="Données">
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <DateTimeInput
          source="pair:startDate"
          options={{
            format: 'dd/MM/yyyy à HH:mm',
            ampm: false,
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
          validate={[required()]}
        />
        <DateTimeInput
          source="pair:endDate"
          options={{
            format: 'dd/MM/yyyy à HH:mm',
            ampm: false,
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
          validate={[required()]}
        />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" fullWidth validate={[required()]} />
        <TargetAudienceInput source="cdlt:hasTargetAudience" fullWidth/>
        <MarkdownInput source="cdlt:organizerDescription" fullWidth />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth />
        
        <MarkdownInput source="cdlt:program" fullWidth />
        
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:pedagogicalMeans" fullWidth />

        <MarkdownInput source="cdlt:practicalConditions" helperText="Précisez si besoin équipements, inscription, hébergement, repas..." fullWidth />
        <NumberInput source="cdlt:minimumCapacity" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <BooleanInput source="cdlt:full" helperText="Cochez si l'événement est complet" fullWidth />
        <TextInput multiline source="cdlt:accessibility" helperText="Précisez l'accessibilité de l'événement aux personnes en situation de handicap" fullWidth />
        
        {/*<NumberInput source="cdlt:price" fullWidth />*/}
        <TextInput multiline source="cdlt:economicalConditions" fullWidth />
        <TextInput multiline source="cdlt:financialSupport" helperText="Si éligible, précisez les types de financements (CPF, Qualiopi...)" fullWidth />
        <TextInput multiline source="cdlt:evaluationMethod" fullWidth />
        
        <PairLocationInput source="pair:hasLocation" fullWidth />
        
        <RegistrationInput 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"          
          fullWidth
        />

        <ReminderBeforeRecording />

      </FormTab>

      <FormTab label="Relations">
        <ActorsInput source="cdlt:organizedBy" />
        <PersonsInput source="cdlt:hasMentor" />
        <PlaceInput source="pair:hostedIn" fullWidth />
        <CoursesInput source="pair:partOf" fullWidth />
        <PathsInput source="cdlt:eventOn" />
        <SectorsInput source="pair:hasSector" />
        <ThemesInput source="pair:hasTopic" />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} fullWidth />
        <TypesInput source="pair:hasType" filter={{ a: 'pair:EventType' }} validate={[required()]} fullWidth />
        <SkillsInput source="cdlt:requiredSkills" />
        <SkillsInput source="pair:produces" />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:aboutPage" fullWidth />
      </FormTab>
    </TabbedForm>
  </EditWithPermissions>
);

export default EventEdit;
