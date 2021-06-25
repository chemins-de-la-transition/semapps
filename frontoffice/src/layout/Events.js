import * as React from "react";
import { makeStyles, Grid, Box, Typography, Button } from '@material-ui/core';
import { ListBase, DateField } from 'react-admin';
import { SimpleList } from '@semapps/archipelago-layout';
import { Link } from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import LargeContainer from './LargeContainer';
import FullWidthBox from './FullWidthBox';
import LargeRound from '../svg/LargeRound';
import CalendarIcon from '../svg/Calendar';

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
    '& svg [fill]':{
      fill: theme.palette.primary.contrastText,
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
  },
  eventListBase: {
    marginBottom: '40px',
  }
}));

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
            perPage={4}
            // filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-vedette' }}
            // sort={{ field: 'pair:startDate', order: 'ASC' }}
            className={classes.eventListBase}
            >
            <SimpleList
              primaryText={record => record['pair:label']}
              secondaryText={record => (
                <>
                  Du&nbsp;
                  <DateField record={record} source="pair:startDate" showTime />
                  &nbsp;au&nbsp;
                  <DateField record={record} source="pair:endDate" showTime />
                </>
              )}
              leftAvatar={() => <EventIcon />}
              linkType="show"
            />
          </ListBase>
          <Button
              to='/Event' 
              variant="outlined" 
              color="secondary" 
              component={Link} 
            > 
            <Typography variant="button1">Voir Tous les évènements</Typography>
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