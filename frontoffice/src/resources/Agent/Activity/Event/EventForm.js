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
  FormDataConsumer,
  useTranslate
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
  const translate = useTranslate();

  return (
    <TabbedForm
      initialValues={ initalValues(mode) }
      {...rest}
      redirect="show"
    >
      <FormTab label={translate('app.tab.event.about')} className={classes.formTab}>
        <TextInput source="pair:label" fullWidth validate={[required()]} />
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
                  label={translate('app.input.event.duplicate')}
                />
                { duplicateIsOpen && ! eventsListIsLoading && eventsListIsOnError &&
                  <Alert severity="error" className={classes.errorContainer}>Un problème est survenu</Alert>
                }
                { duplicateIsOpen && ! eventsListIsLoading && ! eventsListIsOnError &&
                  <Slide direction="up" in={duplicateIsOpen} mountOnEnter unmountOnExit>
                    <div>
                      <SelectInput source="eventsList" fullWidth
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
        <TextInput source="pair:comment"  fullWidth validate={[required()]} />
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
        <ImageInput source="pair:depictedBy"  accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description"  fullWidth validate={[required()]} />
        <SectorsInput source="pair:hasSector"  />
        <TopicsInput source="pair:hasTopic"  />
        <FinalitiesInput source="pair:hasFinality" />
        {/* <TypesInput source="cdlt:hasCourseType"  filter={{ a: 'cdlt:CourseType' }} fullWidth /> */}
        <TypesInput source="pair:hasType" lfilter={{ a: 'pair:EventType' }} validate={[required()]} fullWidth />
        <TargetAudienceInput source="cdlt:hasTargetAudience"  fullWidth />
        <ActorsInput source="cdlt:organizedBy"  />  
        <MarkdownInput source="cdlt:organizerDescription"  fullWidth />
        <MarkdownInput source="cdlt:program" fullWidth />
        <CoursesInput source="pair:partOf" fullWidth />
        <FormDataConsumer fullWidth>
          {({ formData, ...rest }) => (
            (formData["pair:partOf"]?.length > 0) &&
            <BooleanInput source="cdlt:registrationOutsideCourse" {...rest} />
          )}
        </FormDataConsumer>
        <PathsInput source="cdlt:eventOn"  fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label={translate('app.tab.event.learningObjectives')} className={classes.formTab}>
        <PersonsInput source="cdlt:hasMentor" />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth />
        <SkillsInput source="cdlt:requiredSkills" fullWidth />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <SkillsInput source="pair:produces"  fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:pedagogicalMeans"  fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities"  fullWidth />
        <TextInput multiline source="cdlt:evaluationMethod" fullWidth />
      </FormTab>
      <FormTab label={translate('app.tab.event.practicalConditions')} className={classes.formTab}>
        <BooleanInput source="cdlt:full" helperText={translate('app.helper.full')} fullWidth />
        <MarkdownInput source="cdlt:practicalConditions"  helperText={translate('app.helper.practicalConditions')} fullWidth />
        <NumberInput source="cdlt:minimumCapacity"  fullWidth />
        <NumberInput source="cdlt:maximumCapacity"  fullWidth />
        <TextInput multiline helperText={translate('app.helper.accessibility')}  source="cdlt:accessibility" fullWidth />
        {/*<NumberInput source="cdlt:price" fullWidth />*/}
        <TextInput multiline source="cdlt:economicalConditions"  fullWidth />
        <TextInput multiline helperText={translate('app.helper.financialSupport')} source="cdlt:financialSupport"  fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <PlaceInput source="pair:hostedIn"  fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')}  validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="pair:aboutPage" fullWidth />
        <RegistrationInput
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"
          fullWidth
        />
      </FormTab>
      <FormTab label={translate('app.tab.visibility')} >
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default EventForm;
