import React from 'react';
import {makeStyles, Typography, ListItem, ListItemText, Box } from '@material-ui/core';
import { DateField, ImageField, TextField, FunctionField, SingleFieldList, useTranslate  } from 'react-admin';
import DurationField from '../../fields/DurationField';
import { Link } from 'react-router-dom';
import { ReferenceArrayField, ReferenceField } from '@semapps/field-components';
import CalendarIcon from '../../../svg/CalendarIcon';
import DurationIcon from '../../../svg/DurationIcon' ;
import PlaceIcon from '../../../svg/PlaceIcon' ;

const useStyles = makeStyles((theme) => ({
  eventType: {
    color: theme.palette.primary.contrastText,
    marginBottom: 4,
    marginTop: 3,
    fontSize: 12,
  },
  eventDate: {
    marginBottom: 32,
    '& span': {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.palette.primary.contrastText,
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
  },
  eventLabel: {
    color: theme.palette.primary.contrastText,
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
  },
  eventAddress: {
    color: theme.palette.primary.contrastText,
    fontSize: 12,
    alignSelf: 'center',
  },
  eventPlace: {
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    '& span': {
      fontSize: 12,
    }
  },
  eventDuration: {
    alignSelf: 'baseline',
    color: theme.palette.primary.contrastText,
    '& span': {
      fontSize: 12,
    }
  },
  dataField: {
    color: theme.palette.primary.contrastText
  },
  eventDescription: {
    color: theme.palette.primary.contrastText,
  },
  listItem: {
    position: 'relative',
    padding: 20,
    alignItems: 'flex-start',
    backgroundColor: theme.palette.secondary.main+'99',
    backgroundRepeat: 'no-repeat',
    margin: 10,
    flexBasis: '25%',
    marginLeft: '12px',
    marginRight: '12px',
    marginTop: '0',
    marginBottom: '0',
    '&:first-child': {
      marginLeft: '1px',
    },
    '&:last-child': {
      marginRight: '1px',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      flexShrink: '0',
    },
    display: 'inline-block',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main+'CC',
    },
  },
  listItemText: {
    position: 'relative',
    zIndex: 2,
  },
  icon: {
    color: theme.palette.white.main,
    width: 10,
    marginRight: 5,
  },
  sector: {
    '& img': {
      position: 'absolute',
      width: 'calc(100% - 40px)',
      top: '50%',
      transform: 'translateY(-50%)',
      objectFit: 'cover',
      margin: 0,
      zIndex: 1
    }
  }
}));

const EventCardBlock = ({ record }) => {
  const classes = useStyles();
  const address = record['pair:hasLocation']?.['pair:label'];
  const translate = useTranslate();

  return (
        <ListItem
          className={classes.listItem}
          button={true}
          component={Link}
          to={'/Event/' + encodeURIComponent(record['id']) + '/show'}
          key={record['id']}
        >
          { record['pair:hasSector'] &&
            <Box className={classes.sector}>
              <ReferenceArrayField source="pair:hasSector" reference="Sector" perPage={1} record={record}>
                <SingleFieldList>
                  <ImageField source="cdlt:alternativeImage" title="pair:label" />
                </SingleFieldList>
              </ReferenceArrayField>
            </Box>
          }
          <ListItemText
            className={classes.listItemText}
            primary={
              <>
                {record['pair:hasType'] && (
                  <ReferenceField source="pair:hasType" reference="Type" record={record} link={false}>
                    <TextField
                      source="pair:label"
                      variant="h5"
                      component="div"
                      className={classes.eventType}
                    />
                  </ReferenceField>
                )}
                <Typography
                  variant="h3"
                  component="div"
                  className={classes.eventDate}
                >
                  <DateField
                    record={record}
                    source="pair:startDate"
                    options={{ year: 'numeric', month: 'long', day: 'numeric' }}
                  />
                </Typography>
                
                <Typography variant="h4" component="div" className={classes.eventLabel}>
                  {record['pair:label']}
                </Typography>
                {record['pair:hostedIn'] ? (
                  <div style={{display: 'flex'}}>
                  <PlaceIcon className={classes.icon}/>
                  <ReferenceField record={record} source="pair:hostedIn" reference="Place" link={false}>
                    <FunctionField className={classes.eventAddress} label={translate('app.card.localisation')} render={record => 
                    record['pair:hasPostalAddress'] ?
                      `${record['pair:hasPostalAddress']['pair:addressLocality']} (${record['pair:hasPostalAddress']['pair:addressZipCode']?.slice(0,2)}) - ${record['pair:label']}`
                    : record['pair:label']
                    }/>
                  </ReferenceField>
                </div>
                ) :
                address ? 
                <div style={{display: 'flex'}}>
                  <PlaceIcon className={classes.icon}/>
                  <Typography variant="body1" className={classes.eventAddress} component="div">
                    {address}
                </Typography>
                </div>
                :
                (record['pair:hasLocation'] && (
                  <div style={{display: 'flex'}}>
                    <PlaceIcon className={classes.icon}/>
                    <ReferenceField source="pair:hasLocation" reference="Region" record={record} link={false}>
                      <Box className={classes.eventPlace}>
                        <TextField source="pair:label" variant="body1" />
                      </Box>
                    </ReferenceField>
                  </div>
                ))
                }
                


                <div style={{display: 'flex', marginBottom:'30px'}}>
                  <DurationIcon className={classes.icon}/>
                  <Box className={classes.eventDuration} style={{ minInlineSize: 'fit-content'}}>
                    <DurationField record={record} startDate="pair:startDate" endDate="pair:endDate" component="span" className={classes.eventPlace}/>
                  </Box>
                  <CalendarIcon className={classes.icon} style={{marginLeft:"10px"}}/>
                  <Typography variant="body2" component="div" className={classes.eventDuration} >
                    <DateField
                      record={record}
                      source="pair:startDate"
                      options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}
                      className={classes.dataField}
                    /> {" au "}
                    <DateField
                      record={record}
                      source="pair:endDate"
                      options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}
                      className={classes.dataField}
                    />
                </Typography>
                </div>
                <Typography variant="body2" className={classes.eventDescription} component="div">
                    {record['pair:comment']}
                </Typography>
              </>
            }
            disableTypography={true}
          />
        </ListItem>
  );
};

export default EventCardBlock;
