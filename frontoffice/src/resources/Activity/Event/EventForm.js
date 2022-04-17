import React, { useCallback, useEffect, useState } from 'react';
import {
  BooleanInput,
  Error,
  ImageInput,
  Link,
  Loading,
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
// import { Grow } from '@material-ui/core';

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
    setDuplicateIsOpen(false)
  }, [setChosenEvent]);
    
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);
  
  const getFormatedEvent = useCallback((chosenEvent) => {
    let formatedEvent = {};  
    for (const property in chosenEvent) {
      if (! ['pair:label'].includes(property)) {
        formatedEvent = { ...formatedEvent, [property]: chosenEvent[property] };
      }
    }
    return formatedEvent
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

  return (
    <SimpleForm
      initialValues={ initalValues(mode) }
      {...rest}
      redirect="/MyEvents"
    >
      <TextInput source="pair:label" fullWidth validate={[required()]} />
      
      <Link onClick={ handleClickToggleDuplicate(duplicateIsOpen) }>Dupliquer un événement existant ?</Link>
      { duplicateIsOpen && eventsListIsLoading &&
        /*todo*/
        <Loading/>
      }
      { duplicateIsOpen && ! eventsListIsLoading && eventsListIsOnError &&
        /*todo*/
        <Error/>
      }
      { duplicateIsOpen && ! eventsListIsLoading && ! eventsListIsOnError &&
        <>
          <SelectInput label="Choisissez un événement" source="eventsList" fullWidth 
            choices={ eventsList.map(event => ({ id: event.id, name: event["pair:label"] })) }
            onChange={ handleChangeSelectEvent(eventsList) }
          />
        </>
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
