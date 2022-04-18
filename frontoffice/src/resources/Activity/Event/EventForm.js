import React, { useCallback, useEffect, useState } from 'react';
import {
  BooleanInput,
  ImageInput,
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  required,
  useDataProvider,
  useGetIdentity,
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { DateTimeInput } from '@semapps/date-components';
import { ThemesInput, TypeInput, SkillsInput } from '../../../pair';
import frLocale from 'date-fns/locale/fr';
import { Box, FormControlLabel, Grow, LinearProgress, makeStyles, Switch } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

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
}));

const EventForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  const dataProvider = useDataProvider();
  const [eventsList, setEventsList] = useState([]);
  const [eventsListIsLoading, setEventsListIsLoading] = useState(true);
  const [eventsListIsOnError, setEventsListIsOnError] = useState(false);
  const [chosenEvent, setChosenEvent] = useState(null);
  const [duplicateIsOpen, setDuplicateIsOpen] = useState(false);
    
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
      console.log('getAllEvents');
      getAllEvents();
    }    
  }, [getAllEvents]);
  
  const getFormatedEvent = useCallback((chosenEvent) => {
    let formatedEvent = {};  
    for (const property in chosenEvent) {
      if (! ['id','dc','type'].includes(property.split(':')[0])) {
        if ( ! [
          'cdlt:organizedBy',
          'pair:label',
          /*
          'cdlt:hasCourseType',
          'pair:hasType',
          */
        ].includes(property)) {
          console.log('property-ok:', property);
          formatedEvent = { ...formatedEvent, [property]: chosenEvent[property] };
        }
      }
    }
    return { ...formatedEvent, 'cdlt:organizedBy': identity?.id }
  }, []);
  
  const initalValues = (mode) => {
    switch (mode) {
      case 'create': return { 'cdlt:organizedBy': identity?.id }
      case 'duplicate': return getFormatedEvent(chosenEvent)
      default: return undefined
    }
  }
  
  if (chosenEvent) {
    mode = 'duplicate';
  }

  const classes = useStyles();
  return (
    <SimpleForm
      initialValues={ initalValues(mode) }
      {...rest}
      redirect="/MyEvents"
    >
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
                fullWidth
              />
              { duplicateIsOpen && ! eventsListIsLoading && eventsListIsOnError &&
                <Alert severity="error" className={classes.errorContainer}>Un problème est survenu</Alert>
              }
              { duplicateIsOpen && ! eventsListIsLoading && ! eventsListIsOnError &&
                <Grow in={duplicateIsOpen} fullWidth>
                  <SelectInput label="Choisissez un événement" source="eventsList" fullWidth 
                    choices={ eventsList.map(event => ({ id: event.id, name: event["pair:label"] })) }
                    onChange={ handleChangeSelectEvent(eventsList) }
                  />
                </Grow>
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
      <ImageInput source="pair:isDepictedBy" accept="image/*" multiple>
        <ImageField source="src" />
      </ImageInput>
      <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
      <MarkdownInput source="cdlt:program" fullWidth />
      <SkillsInput source="pair:produces" fullWidth />
      <MarkdownInput source="cdlt:prerequisites" fullWidth />
      <MarkdownInput source="cdlt:practicalConditions" fullWidth />
      <MarkdownInput source="cdlt:learningObjectives" fullWidth />
      <MarkdownInput source="cdlt:economicalConditions" fullWidth />
      <BooleanInput source="cdlt:directRegistration" fullWidth />
      <TypeInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />
      <TypeInput source="pair:hasType" filter={{ a: 'pair:EventType' }} validate={[required()]} />
      <ThemesInput source="pair:hasTopic" />
      <TextInput source="pair:e-mail" fullWidth validate={[required(), email()]} />
      <TextInput source="pair:phone" fullWidth />
      <TextInput source="pair:aboutPage" fullWidth />
    </SimpleForm>
  );
};

export default EventForm;
