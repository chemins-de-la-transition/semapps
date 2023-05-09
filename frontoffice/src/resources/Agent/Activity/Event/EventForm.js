import React, { useCallback, useEffect, useState } from 'react';
import {
  BooleanInput,
  NumberInput,
  FormTab,
  ImageInput,
  SelectInput,
  TabbedForm,
  TextInput,
  email,
  required,
  useDataProvider,
  useGetIdentity,
  FormDataConsumer
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import { DateTimeInput } from '@semapps/date-components';
import {
  ActorsInput,
  CoursesInput,
  FinalitiesInput,
  JobOpportunitiesInput,
  PairLocationInput,
  PathsInput,
  PersonsInput,
  PlaceInput, PublicationStatusInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
  TargetAudienceInput,
  TopicsInput,
  TypesInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import frLocale from 'date-fns/locale/fr';
import { Box, FormControlLabel, Slide, LinearProgress, makeStyles, Switch } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  duplicateContainer: {
    marginBottom: 16,
    width: '100%'
  },
  duplicateLoading: {
    width: 160,
  },
  errorContainer: {
    '& .MuiAlert-message': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  formTab: {
    /*
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: 'white',
      fontWeight: 'bold',
    }
    */
  }
}));

const EventForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  const dataProvider = useDataProvider();
  const [eventsList, setEventsList] = useState([]);
  const [eventsListIsLoading, setEventsListIsLoading] = useState(true);
  const [eventsListIsOnError, setEventsListIsOnError] = useState(false);
  const [chosenEvent, setChosenEvent] = useState(null);
  const [duplicateIsOpen, setDuplicateIsOpen] = useState(false);

  const generateReference = () => uuid().slice(0,8).toUpperCase()

  const getAllEvents = useCallback(() => {
    if (eventsList.length === 0) {
      dataProvider
        .getList('Event')
        .then(({ data }) => {
          setEventsList(data)
          setEventsListIsLoading(false)
        })
        .catch(e => {
          setEventsListIsLoading(false)
          setEventsListIsOnError(true)
        })
    }
  }, [dataProvider, eventsList, setEventsList, setEventsListIsLoading, setEventsListIsOnError]);

  const handleClickToggleDuplicate = useCallback((duplicateIsOpen) => (e) => {
    e.preventDefault();
    setDuplicateIsOpen(! duplicateIsOpen)
    setChosenEvent(null)
  }, [setDuplicateIsOpen]);

  const handleChangeSelectEvent = useCallback((eventsList) => (e) => {
    const eventId = e.target.value;
    const chosenEvent = eventsList.find( event => event.id === eventId )
    setChosenEvent(chosenEvent)
  }, [setChosenEvent]);

  useEffect(() => {
    if (mode === 'create') {
      getAllEvents();
    }
  }, [mode, getAllEvents]);

  const getFormatedEvent = useCallback((chosenEvent) => {
    let formatedEvent = {};
    for (const property in chosenEvent) {
      if (! ['id','dc','type'].includes(property.split(':')[0])) {
        if ( ! [
          'cdlt:organizedBy',
          'pair:label',
        ].includes(property)) {
          formatedEvent = { ...formatedEvent, [property]: chosenEvent[property] };
        }
      }
    }
    return { ...formatedEvent, 'cdlt:referenceNumber':generateReference(), 'cdlt:organizedBy': identity?.id }
  }, [identity]);

  const initalValues = (mode) => {
    switch (mode) {
      case 'create': return {
        'cdlt:organizedBy': identity?.id,
        /* force components to be controlled : needed for duplication feature */
        'cdlt:hasMentor': null,
        'pair:hostedIn': null,
        'pair:partOf': null,
        'pair:hasSector': null,
        'cdlt:hasCourseType': null,
        'pair:hasType': null,
        'pair:produces': null,
        'cdlt:referenceNumber': generateReference(),
        'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide'
      }
      case 'duplicate': return getFormatedEvent(chosenEvent)
      default: return undefined
    }
  }

  if (chosenEvent) {
    mode = 'duplicate';
  }
  
  const classes = useStyles();
  return (
    <TabbedForm
      initialValues={ initalValues(mode) }
      {...rest}
      redirect="show"
    >
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
        <MarkdownInput source="cdlt:mentorDescription" fullWidth label="Vous pouvez les décrire ici" />
        <SkillsInput source="cdlt:requiredSkills" label="Quelles sont les compétences requises ?" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" label="Vous pouvez les décrire ici" fullWidth />
        <SkillsInput source="pair:produces" label="Quelles compétences permet-il d'acquérir ?" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" label="Quels sont les objectifs pédagogiques ?" fullWidth />
        <MarkdownInput source="cdlt:pedagogicalMeans" label="Utilisez-vous des méthodes ou des matériels pédagogiques en particulier ?" fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" label="Peut-il ouvrir sur des opportunités d'activité ou d'emploi ? Si oui, lesquelles ?"  fullWidth />
        <TextInput multiline source="cdlt:evaluationMethod" label="Dans le cas de formations financées ou qualifiantes, quelles sont les modalités d'évaluation ?" fullWidth />
      </FormTab>
      <FormTab label="Infos pratiques" className={classes.formTab}>
        <BooleanInput source="cdlt:full" helperText="Cochez cette case si l'événement est complet" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label="Quelles sont les modalités d'accueil ?" helperText="Précisez si besoin équipements, modalités d'inscription, hébergement, repas..." fullWidth />
        <NumberInput source="cdlt:minimumCapacity" label="Nombre minimum de participants pour que l'événement ait lieu" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Nombre maximum de participants" fullWidth />
        <TextInput multiline helperText="Précisez l'accessibilité de l'événement aux personnes en situation de handicap" source="cdlt:accessibility" label="Accessibilité" fullWidth />
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
      <FormTab label="Visibilité">
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default EventForm;
