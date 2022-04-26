import React, { useMemo } from 'react';
import {makeStyles, Typography, List, ListItem, ListItemText, Box } from '@material-ui/core';
import { DateField, useListContext, TextField } from 'react-admin';
import DurationField from '../../fields/DurationField';
import { Link } from 'react-router-dom';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { sortBySimilarity } from "../../../utils";
import CalendarIcon from '../../../svg/CalendarIcon';
import DurationIcon from '../../../svg/DurationIcon' ;
import PlaceIcon from '../../../svg/PlaceIcon' ;
import AgricultureAlimentation_PictoSeul from '../../../icons/AgricultureAlimentation_PictoSeul.png' ;
import Artisanat_PictoSeul from '../../../icons/Artisanat_PictoSeul.png' ;
import Communication_PictoSeul from '../../../icons/Communication_PictoSeul.png' ;
import CultureModeVie_PictoSeul from '../../../icons/CultureModeVie_PictoSeul.png' ;
import DevTerritorial_PictoSeul from '../../../icons/DevTerritorial_PictoSeul.png' ;
import Ecologie_PictoSeul from '../../../icons/Ecologie_PictoSeul.png' ;
import Energie_PictoSeul from '../../../icons/Energie_PictoSeul.png' ;
import Gouvernance_PictoSeul from '../../../icons/Gouvernance_PictoSeul.png' ;
import Habitat_PictoSeul from '../../../icons/Habitat_PictoSeul.png' ;
import JusticeSociale_PictoSeul from '../../../icons/JusticeSociale_PictoSeul.png' ;
import Mobilite_PictoSeul from '../../../icons/Mobilite_PictoSeul.png' ;
import Sante_Bienetre_PictoSeul from '../../../icons/Sante_Bienetre_PictoSeul.png' ;
import ScienceTech_PictoSeul from '../../../icons/ScienceTech_PictoSeul.png' ;

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
      fontSize: 28,
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
  eventDescription: {
    color: theme.palette.primary.contrastText,
  },
  listItem: {
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
      flexBasis: '80%',
      flexShrink: '0',
    },
    display: 'inline-block',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main+'CC',
    },
  },
  icon: {
    color: theme.palette.white.main,
    width: 10,
    marginRight: 5,
  },
  listBox: {
    margin: '0',
    paddingTop: '32px',
    display: 'flex',
    position: 'relative',
  },
}));


const EventItemsGrid = ({ similarRecord }) => {
  const classes = useStyles();
  let { ids, data } = useListContext();

  const sortedIds = useMemo(() => {
    if( !similarRecord ) return ids;
    return ids
      .filter(id => data[id] && id !== similarRecord.id )
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasType'))
      .sort(sortBySimilarity(data, similarRecord, 'cdlt:hasCourseType'))
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasLocation'))
      .slice(0, 4);
  }, [ids, data, similarRecord]);

  function ChoosePicture(categories) {
    const category=Array.isArray(categories) ? categories[0] : categories;
    return (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/agriculture-et-alimentation") ? AgricultureAlimentation_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/artisanat-commerce-industrie") ? Artisanat_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/decentralisation-du-web") ? Communication_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/education-alternative") ? CultureModeVie_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/developpement-territorial") ? DevTerritorial_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/ecopsychologie") ? Ecologie_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/web-semantique") ? Energie_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/open-hardware") ? Gouvernance_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/tiers-lieu") ? Habitat_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/justice-sociale") ? JusticeSociale_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/mobilites") ? Mobilite_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/sante-et-bien-etre") ? Sante_Bienetre_PictoSeul
      : (category===process.env.REACT_APP_MIDDLEWARE_URL+"themes/low-tech") ? ScienceTech_PictoSeul
      : null
  }

  return (
    <List className={classes.listBox}>
      {sortedIds.map((id) => (
        <ListItem
          className={classes.listItem}
          style={{backgroundImage:`url(${ChoosePicture(data[id]['pair:hasTopic'])})`}}
          button={true}
          component={Link}
          to={'/Event/' + encodeURIComponent(id) + '/show'}
          key={id}
        >
          <ListItemText
            primary={
              <>
                {data[id]['pair:hasType'] && (
                  <ReferenceField source="pair:hasType" reference="Type" record={data[id]} link={false}>
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
                    record={data[id]}
                    source="pair:startDate"
                    options={{ year: 'numeric', month: 'long', day: 'numeric' }}
                  />
                </Typography>
                
                <Typography variant="h4" component="div" className={classes.eventLabel}>
                  {data[id]['pair:label']}
                </Typography>
                {data[id]['pair:hostedIn'] ? (
                  <div style={{display: 'flex'}}>
                  <PlaceIcon className={classes.icon}/>
                  <ReferenceField source="pair:hasLocation" reference="Region" record={data[id]} link={false}>
                    <Typography variant="body1" component="div" className={classes.eventAddress}>
                      {data[id]['pair:hostedIn']['pair:hasPostalAddress']?.['pair:addressLocality']+' ('+data[id]['pair:hostedIn']['pair:hasPostalAddress']?.['pair:addressZipCode'].slice(0, 2)+')'}
                    </Typography>
                  </ReferenceField>
                </div>
                ) :
                (data[id]['pair:hasLocation'] && (
                  <div style={{display: 'flex'}}>
                    <PlaceIcon className={classes.icon}/>
                    <ReferenceField source="pair:hasLocation" reference="Region" record={data[id]} link={false}>
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
                    <DurationField record={data[id]} startDate="pair:startDate" endDate="pair:endDate" component="span" className={classes.eventPlace}/>
                  </Box>
                  <CalendarIcon className={classes.icon} style={{marginLeft:"10px"}}/>
                  <Typography variant="body2" component="div" className={classes.eventDuration} >
                    <DateField
                      record={data[id]}
                      source="pair:startDate"
                      options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}
                    /> {" au "}
                    <DateField
                      record={data[id]}
                      source="pair:endDate"
                      options={{ year: 'numeric', month: 'numeric', day: 'numeric' }}
                    />
                </Typography>
                </div>
                <Typography variant="body2" className={classes.eventDescription} component="div">
                    {data[id]['pair:comment']}
                </Typography>
              </>
            }
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default EventItemsGrid;
