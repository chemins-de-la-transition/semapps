import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useDataProvider,
  useGetIdentity,
} from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { Box, FormControlLabel, LinearProgress, makeStyles, Slide, Switch } from '@material-ui/core';
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
}));

const EventCreate = (props) => {
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
    getAllEvents();
  }, [getAllEvents]);
  
  const getFormatedEvent = useCallback((chosenEvent, identity) => {
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
    if (identity?.id) {
      formatedEvent = { ...formatedEvent, 'cdlt:organizedBy': identity?.id };
    }
    return { ...formatedEvent, 'cdlt:referenceNumber':uuid().slice(0,8).toUpperCase() }
  }, []);
  
  const chosenEventRef = useRef(null);
  chosenEventRef.current = chosenEvent;
  const identityRef = useRef(null);
  identityRef.current = identity;
  
  const transform = useCallback((data) => {
    if (chosenEventRef.current) {
      const duplicateData = getFormatedEvent(chosenEventRef.current, identityRef.current);
      return ({
        ...duplicateData,
        'pair:label':data['pair:label']
      })
    } else {
      return ({
        ...data,
        'cdlt:referenceNumber':uuid().slice(0,8).toUpperCase()
      })
    }
  }, [getFormatedEvent]);
  
  const classes = useStyles();
  return (
    <Create {...props} transform={transform}>
      <SimpleForm>
        <TextInput source="pair:label" fullWidth validate={[required()]}/>
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
      </SimpleForm>
    </Create>
  );
}

export default EventCreate;
