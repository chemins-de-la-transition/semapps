import * as React from "react";
import { makeStyles, Grid, Box, Typography  } from '@material-ui/core';
import { ListBase } from 'react-admin';
import { Link } from 'react-router-dom';
import LargeContainer from '../../layout/LargeContainer';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeRound from '../../svg/LargeRound';
import CalendarIcon from '../../svg/Calendar';
import Button from '../../layout/Button';
import ItemsGrid from "./ItemsGrid";

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
    width:'100%',
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