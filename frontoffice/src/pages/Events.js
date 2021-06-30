import * as React from "react";
import { makeStyles, Grid, Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import { ListBase, DateField, useListContext, useGetOne,Loading } from 'react-admin';
import { Link } from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LargeContainer from '../layout/LargeContainer';
import FullWidthBox from '../layout/FullWidthBox';
import LargeRound from '../svg/LargeRound';
import CalendarIcon from '../svg/Calendar';
import Department from './Department';
import Button from '../layout/Button';

const useStyles = makeStyles((theme) => ({
  backgound: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  eventIcon: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: theme.palette.white.main,
    '& svg [fill]':{
      fill: theme.palette.white.main,
    },
  },
  internalIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    width: '70%',
    paddingLeft: '10%',
    '& .MuiTypography-root':{
      [theme.breakpoints.down('xs')]: {
        fontSize: '48px',
        lineHeight: '70px',
      },
      [theme.breakpoints.down(1000)]: {
        fontSize: '40px',
        lineHeight: '52px',
      },
      [theme.breakpoints.down(800)]: {
        fontSize: '30px',
        lineHeight: '40px',
      },
      [theme.breakpoints.down(666)]: {
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
    '& svg':{
      width: '50%',
      height: '50%',
    },
  },
  eventListBase: {
    marginBottom: '40px',
    color: theme.palette.primary.contrastText,
  },
  eventTopic:{
    color: theme.palette.primary.contrastText,
    marginBottom: '8px',
  },
  eventLabel:{
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  eventPlace: {
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
  },
  eventDate: {
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    ' & span':{
      fontSize: '16px',
      lineHeight: '20px',
      color: theme.palette.primary.contrastText,
      marginBottom: '4px',
      textTransform: 'uppercase',
    },
  },
  divider:{
    marginTop: '2px',
    marginBottom: '2px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.contrastText,
    height:'1px',
  },
  imageMaxWidth: {
    width: '110px',
  },
  avataSize: {
    width: '60%',
    height: '60%',
  },
  avatarContainer: {
    width: '110px',
    marginRight: '8px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  noDecoration: {
    textDecoration: 'none',
  },
}));

const GetOneResourceValue = ({id,resourceName,keyName}) => {
  const { data, loading, error} = useGetOne(resourceName, id);
  if (loading) { return <Loading />; }
  if (error) { return <p>ERROR when getting {id} on '{resourceName}'</p>; }
  if (data){
    return (
      <span>{data[keyName]}</span>
    ) ;
  } else {
    return '';
  }
};
const GetFirstShuffledResourceValue = ({id,resourceName,resourceName2,keyName}) => {
  let { data, loading, error} = useGetOne(resourceName, id);
  if (loading) { return <Loading />; }
  if (error) { return <p>ERROR</p>; }

  if (!data[keyName]) {return '';}

  let keys = data[keyName];
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  // shuffle keys
  keys.sort(() => Math.random() - 0.5);
  keys.sort(() => Math.random() - 0.5);
  const firstKey = keys[0];
  if (firstKey){
    return (
      <GetOneResourceValue id={firstKey} keyName='pair:label' resourceName={resourceName2}/>
    ) ;
  } else {
    return '';
    // return <p>Empty value for {keyName} in {resourceName} {id}</p>;
  }
};

function sortStartDate (firstElemId,SecondElemId,order, eventsData){
  const eventStartDate1 = eventsData[firstElemId]['pair:startDate'];
  const eventStartDate2 = eventsData[SecondElemId]['pair:startDate'];
  if (eventStartDate1 === eventStartDate2){
    return 0;
  }
  const eventStartDateObject1 = new Date(eventStartDate1);
  const eventStartDateObject2 = new Date(eventStartDate2);
  const ascResponse = (order === 'ASC') ? -1: 1;
  return (eventStartDateObject1 < eventStartDateObject2) ? ascResponse : -ascResponse;
}

const GetDepartment = ({id}) => {
  let { data, loading, error} = useGetOne('Place', id);
  if (loading) { return <Loading />; }
  if (error) { return <p>ERROR</p>; }
  return (
    <Department postalCode={data["pair:hasPostalAddress"]["pair:addressZipCode"]}></Department>
  );
};

const GetImage = ({id}) => {
  const classes = useStyles();
  let { data, loading, error} = useGetOne('Place', id);
  if (loading) { return <Loading />; }
  if (error) { return <p>ERROR</p>; }
  if (data["pair:image"]) {
    return (<img src={data["pair:image"]} className={classes.imageMaxWidth} alt=""></img>);
  } else {
    return (
      <Avatar>
        <EventIcon />
      </Avatar>
    );
  }
};

const ItemsGrid = ({nb}) => {
  const classes = useStyles();
  let { ids , data } = useListContext();
  const eventsData = data;
  // filter on startData
  let sortedIds = ids;
  sortedIds = sortedIds.filter(elemId => {
      return (typeof eventsData[elemId]['pair:startDate'] !== 'undefined' && eventsData[elemId]['pair:startDate'].length !== 0) ;
    });
  // take those wth startDate in the future
  let futureIds = sortedIds.filter(elemId => {
    const eventStartDate = new Date(eventsData[elemId]['pair:startDate']);
    const today = Date.now();
    return (eventStartDate >= today) ;
  });
  futureIds = futureIds.slice(0,nb).sort((firstElemId,SecondElemId) => {
      return sortStartDate(firstElemId,SecondElemId,'DESC',eventsData);
    });
  if (futureIds.length < nb){
    // take those wth startDate in the past
    let pastIds = sortedIds.filter(elemId => {
      const eventStartDate = new Date(eventsData[elemId]['pair:startDate']);
      const today = Date.now();
      return (eventStartDate <= today) ;
    });
    sortedIds = futureIds.concat(pastIds.sort((firstElemId,SecondElemId) => {
      return sortStartDate(firstElemId,SecondElemId,'DESC',eventsData);
    }));
    sortedIds = sortedIds.slice(0,nb);
  } else {
    sortedIds = futureIds ;
  }
  let firstItem = true;
  return (
    <List className={classes.list}>
    {sortedIds.map(id => {
        const host = eventsData[id]['pair:hostedIn'];
        let displayDivider = true;
        if (firstItem) {
          firstItem = false;
          displayDivider = false;
        }
        return (
          <Link to={'/event/'+encodeURIComponent(id)+'/show'} className={classes.noDecoration} key={id}>
            {(displayDivider)
                ? <Divider className={classes.divider}/>
                : ''
            }
            <ListItem>
                <ListItemAvatar className={classes.avatarContainer}>
                  <GetImage id={host}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h5" className={classes.eventTopic+' '+classes.noDecoration}>
                      <GetFirstShuffledResourceValue resourceName='Place' id={host} keyName='pair:hasTopic' resourceName2='Theme' />
                    </Typography>}
                  secondary={
                    <>
                      <Typography variant="h4" className={classes.eventLabel+' '+classes.noDecoration}>
                        {eventsData[id]['pair:label']}
                        &nbsp;
                        <ChevronRightIcon></ChevronRightIcon>
                      </Typography>
                      <Typography variant="body1" component="div" className={classes.eventPlace+' '+classes.noDecoration}>
                        <GetOneResourceValue resourceName='Place' id={host} keyName='pair:label'/>
                        &nbsp;-&nbsp;
                        <GetDepartment id={host} />
                      </Typography>
                      <Typography variant="button" component="div" className={classes.eventDate+' '+classes.noDecoration}>
                        <DateField record={eventsData[id]} source="pair:startDate" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                      </Typography>
                    </>
                  }>

                </ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

const Event = () => {
  const classes = useStyles();
  return (
  <FullWidthBox className={classes.backgound}>
    <LargeContainer>
      <Grid container spacing={3}>
        <Grid item sm={7} className={classes.eventList}>
          <ListBase
            resource='Event'
            basePath='/Event'
            className={classes.eventListBase}
            >
              <ItemsGrid nb={4}/>
          </ListBase>
          <Button
              to='/Event' 
              variant="contained" 
              color="primary" 
              component={Link} 
              typographyVariant="button1"
              text="Voir Tous les évènements"
            > 
          </Button>
        </Grid>
        <Grid item sm={5} className={classes.eventIcon}>
          <LargeRound />
          <Box className={classes.internalIcon}>
            <Typography variant="h1" component="div">
              L’agenda des évènements
            </Typography>
            <CalendarIcon />
          </Box>
        </Grid>
      </Grid>
    </LargeContainer>
  </FullWidthBox>
  );
};

export default Event;