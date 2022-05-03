import * as React from 'react';
import { makeStyles, Grid, Box, Typography, Hidden } from '@material-ui/core';
import { ListBase } from 'react-admin';
import { Link } from 'react-router-dom';
import LargeContainer from '../../LargeContainer';
import FullWidthBox from '../../FullWidthBox';
import Button from '../../Button';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  allEventsImage: {
    maxWidth: '100%',
    marginTop: 20
  },
  eventListBase: {
    marginBottom: '40px',
    color: theme.palette.primary.contrastText,
  },
}));

const NextEvents = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Grid container spacing={3}>
          <Grid item sm={7}>
            <Hidden smUp>
              <Box mb={2}>
                <Typography variant="h1" component="div">
                  L’agenda des évènements
                </Typography>
              </Box>
            </Hidden>
            <ListBase resource="Event" basePath="/Event" className={classes.eventListBase} perPage={4} sort={{ field: 'pair:startDate', order: 'ASC'}}>
              <ItemsGrid />
            </ListBase>
            <Button to="/Event" variant="contained" color="primary" component={Link} typographyVariant="button1">
              Voir tous les évènements
            </Button>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={1} />
            <Grid item sm={4}>
              <Box display="flex" alignItems="center" justifyContent="center" >
                <img src={process.env.PUBLIC_URL + '/next-events.png'} alt="L'agenda des événements"  className={classes.allEventsImage} />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default NextEvents;
