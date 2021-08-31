import * as React from 'react';
import { makeStyles, Grid, Box, Typography, Hidden } from '@material-ui/core';
import { ListBase, useShowContext } from 'react-admin';
import { Link } from 'react-router-dom';
import LargeContainer from '../../LargeContainer';
import FullWidthBox from '../../FullWidthBox';
import LargeRound from '../../../svg/LargeRound';
import Button from '../../Button';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  eventIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    color: theme.palette.white.main,
    '& svg': {
      fontSize: '20rem',
    },
    // '& > .MuiSvgIcon-root': {
    //   fill: 'inherit',
    //   width: 'inherit',
    //   height: 'inherit',
    //   display: 'inherit',
    //   fontSize: 'inherit',
    //   transition: 'inherit',
    //   flexShrink: 'inherit',
    // },
  },
  internalIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    width: '40%',
    paddingLeft: '10%',
    // '& .MuiTypography-root': {
    //   [theme.breakpoints.down('xs')]: {
    //     fontSize: '48px',
    //     lineHeight: '70px',
    //   },
    //   [theme.breakpoints.down(1000)]: {
    //     fontSize: '40px',
    //     lineHeight: '52px',
    //   },
    //   [theme.breakpoints.down(800)]: {
    //     fontSize: '30px',
    //     lineHeight: '40px',
    //   },
    //   [theme.breakpoints.down(666)]: {
    //     fontSize: '20px',
    //     lineHeight: '30px',
    //   },
    // },
    // '& svg': {
    //   width: '50%',
    //   height: '50%',
    //   '& path':{
    //     fill: theme.palette.primary.contrastText,
    //   }
    // },
  },
  eventListBase: {
    marginBottom: '40px',
    color: theme.palette.primary.contrastText,
  },
}));

const SimilarEvents = () => {
  const classes = useStyles();
  const { record } = useShowContext();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Grid container spacing={3}>
          <Grid item sm={8} className={classes.eventList}>
            <ListBase resource="Event" basePath="/Event" className={classes.eventListBase} filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/open' }} sort={{ field: 'pair:startDate', order: 'ASC'}}>
              <ItemsGrid similarRecord={record} />
            </ListBase>
            <Button to="/Event" variant="contained" color="primary" component={Link} typographyVariant="button1">
              Voir tous les évènements
            </Button>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4} className={classes.eventIcon}>
              <LargeRound />
              <Box className={classes.internalIcon}>
                <Typography variant="h1" component="div">
                  Evénements similaires
                </Typography>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default SimilarEvents;
