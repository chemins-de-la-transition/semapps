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
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { DateTimeInput } from '@semapps/date-components';
import { PairLocationInput, FinalitiesInput, PathsInput, PersonsInput, PlaceInput, SkillsInput, ThemesInput, TypeInput, CourseInput, ActorsInput } from '../../../pair';
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
  }
}));

const EventForm = ({ mode, ...rest }) => {
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
      redirect="/MyEvents"
    >
      <FormTab label="Données">

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
        <TextInput multiline source="cdlt:targetAudience" fullWidth />
        <MarkdownInput source="cdlt:organizerDescription" fullWidth />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth />

        <MarkdownInput source="cdlt:program" fullWidth />

        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <MarkdownInput source="cdlt:pedagogicalMeans" fullWidth />
        <MarkdownInput source="cdlt:evaluationMethod" fullWidth />

        <MarkdownInput source="cdlt:practicalConditions" helperText="Précisez si besoin équipements, inscription, hébergement, repas..." fullWidth />
        <NumberInput source="cdlt:attendeesMin" fullWidth />
        <NumberInput source="cdlt:attendeesMax" fullWidth />
        <BooleanInput source="cdlt:full" helperText="Cochez si l'événement est complet" fullWidth />
        <TextInput multiline helperText="Précisez l'accessibilité de l'événement aux personnes en situation de handicap" source="cdlt:accessibility" fullWidth />

        <NumberInput source="cdlt:price" fullWidth />
        <TextInput multiline source="cdlt:economicalConditions" fullWidth />
        <TextInput multiline helperText="Si éligible, précisez les types de financements (CPF, Qualiopi...)" source="cdlt:financialSupport" fullWidth />

        <PairLocationInput source="pair:hasLocation" fullWidth />
        <BooleanInput source="cdlt:directRegistration" fullWidth />
      </FormTab>
      <FormTab label="Relations">
        <ActorsInput source="cdlt:organizedBy"/>
        <PersonsInput source="cdlt:hasMentor" />
        <PlaceInput source="pair:hostedIn" />
        <CourseInput source="pair:partOf" />
        <PathsInput source="cdlt:eventOn" fullWidth />
        <ThemesInput source="pair:hasSector" />
        <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
        <TypeInput source="pair:hasType" filter={{ a: 'pair:EventType' }} validate={[required()]} />
        <SkillsInput source="pair:produces" fullWidth />
        <FinalitiesInput source="pair:hasFinality" />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth />
        <TextInput source="pair:aboutPage" fullWidth />
      </FormTab>
    </TabbedForm>
  );
};

export default EventForm;
