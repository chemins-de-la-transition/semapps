import React from 'react';
import { TabbedForm, FormTab, TextInput, ImageInput, BooleanInput, NumberInput, email, required, FormDataConsumer } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import { MarkdownInput } from '@semapps/markdown-components';
import { DateTimeInput } from '@semapps/date-components';
import { ImageField } from '@semapps/field-components';
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
  TopicsInput,
  TargetAudienceInput,
  TypesInput,
  JobOpportunitiesInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../common/ReminderBeforeRecording';
import EventTitle from './EventTitle';
import Edit from "../../../../layout/edit/Edit";

const EventEdit = (props) => (
  <Edit title={<EventTitle />} {...props}>
    <TabbedForm redirect="show">
      <FormTab label="A propos de l'évènement" className={classes.formTab}>

        <TextInput source="pair:label" label="Quel est le titre de votre événement ?" fullWidth validate={[required()]} />
        { ['create', 'duplicate'].includes(mode)  &&
          <Box className={classes.duplicateContainer}>
            { eventsListIsLoading &&
              <LinearProgress className={classes.duplicateLoading}/>
            }
            { ! eventsListIsLoading &&
              <>
                <FormControlLabel control={
                    <Switch
                        color="primary"
                        checked={duplicateIsOpen}
                        onClick={ handleClickToggleDuplicate(duplicateIsOpen) }
                    />
                  }
                  label={"Dupliquer un événement existant ?"}
                />
                { duplicateIsOpen && ! eventsListIsLoading && eventsListIsOnError &&
                  <Alert severity="error" className={classes.errorContainer}>Un problème est survenu</Alert>
                }
                { duplicateIsOpen && ! eventsListIsLoading && ! eventsListIsOnError &&
                  <Slide direction="up" in={duplicateIsOpen} mountOnEnter unmountOnExit>
                    <div>
                      <SelectInput label="Choisissez un événement" source="eventsList" fullWidth
                        choices={ eventsList.map(event => ({ id: event.id, name: event["pair:label"] })) }
                        onChange={ handleChangeSelectEvent(eventsList) }
                      />
                    </div>
                  </Slide>
                }
              </>
            }
          </Box>
        }
        <TextInput source="pair:comment" label="Comment le décririez-vous en une phrase ?" fullWidth validate={[required()]} />
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
        <ImageInput source="pair:depictedBy" label="Vous pouvez mettre 2 images (en format paysage) !" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" label="Décrivez votre événement" fullWidth validate={[required()]} />
        <SectorsInput source="pair:hasSector" label="Dans quel secteur(s) d'activité(s) s'inscrit-il ?" />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés choisiriez-vous pour le caractériser ?" />
        <FinalitiesInput source="pair:hasFinality" label="A quoi contribue t'il ?" />
        <TypesInput source="cdlt:hasCourseType" label="A quel mode de voyage correspond-il ?" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} fullWidth />
        <TypesInput source="pair:hasType" label="A quel type d'événement correspond-il ?" filter={{ a: 'pair:EventType' }} validate={[required()]} fullWidth />
        <TargetAudienceInput source="cdlt:hasTargetAudience" label="A qui s'adresse t'il ?" fullWidth />
        <ActorsInput source="cdlt:organizedBy" label="Qui sont les organisateur.trice.s (individus et/ou organisations) ?" />  
        <MarkdownInput source="cdlt:organizerDescription" label="Vous pouvez les décrire" fullWidth />
        <MarkdownInput source="cdlt:program" fullWidth />
        <CoursesInput source="pair:partOf" label="Fait-il partie d'un voyage ?" fullWidth />
        <FormDataConsumer fullWidth>
          {({ formData, ...rest }) => (
            (formData["pair:partOf"]?.length > 0) &&
            <BooleanInput source="cdlt:registrationOutsideCourse" {...rest} />
          )}
        </FormDataConsumer>
        <PathsInput source="cdlt:eventOn" label="Fait-il partie d'un chemin ?" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="Volet pédagogique" className={classes.formTab}>
        <PersonsInput source="cdlt:hasMentor" label="Qui sont les intervenant.e.s ?" />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth label="Vous pouvez les décrire" />
        <SkillsInput source="cdlt:requiredSkills" label="Quelles sont les compétences requises ?" fullWidth />
        <SkillsInput source="pair:produces" label="Quelles compétences permet-il d'acquérir ?" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" label="Y a t'il des prérequis pour participer à votre événement ? Si oui, lesquels ?" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" label="Quels sont les objectifs pédagogiques ?" fullWidth />
        <MarkdownInput source="cdlt:pedagogicalMeans" label="Utilisez-vous des méthodes ou des matériels pédagogiques en particulier ?" fullWidth />  
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" "Peut-il ouvrir sur des opportunités d'activité ou d'emploi ? Si oui, lesquelles ?"  fullWidth />        
        <TextInput multiline source="cdlt:evaluationMethod" label="Dans le cas de formations financées ou qualifiantes, quelles sont les modalités d'évaluation ?" fullWidth />
        />
      </FormTab>
      <FormTab label="Infos pratiques" className={classes.formTab}>
        <MarkdownInput source="cdlt:practicalConditions" label="Quelles sont les modalités d'accueil et les infos pratiques ?" helperText="Précisez si besoin équipements, inscription, hébergement, repas..." fullWidth />
        <NumberInput source="cdlt:minimumCapacity" label="Nombre minimum de participants pour que l'événement ait lieu" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Nombre maximum de participants" fullWidth />
        <BooleanInput source="cdlt:full" helperText="Cochez cette case si l'événement est complet" fullWidth />
        <TextInput multiline helperText="Précisez l'accessibilité de l'événement aux personnes en situation de handicap" source="cdlt:accessibility" label="L'événement est-il accessible aux personnes en situation de handicap ?" fullWidth />
        {/*<NumberInput source="cdlt:price" fullWidth />*/}
        <TextInput multiline source="cdlt:economicalConditions" label="Y a t'il des conditions financières pour y participer ?" fullWidth />
        <TextInput multiline helperText="Si éligible, précisez les types de financements (CPF, Qualiopi...)" source="cdlt:financialSupport" label="Est-ce que l'événement est éligible à des dispositifs de financement ?" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <PlaceInput source="pair:hostedIn" label="Où se déroule l'événement ?" fullWidth />  
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="pair:aboutPage" fullWidth />
        <RegistrationInput 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"          
          fullWidth
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default EventEdit;
