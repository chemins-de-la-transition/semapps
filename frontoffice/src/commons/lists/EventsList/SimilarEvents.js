import * as React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useShowContext, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';
import LargeContainer from '../../LargeContainer';
import FullWidthBox from '../../FullWidthBox';
import NextEvents from './NextEvents';
import ChevronRightIcon from '../../../svg/ChevronRightIcon';
import PictoAgenda from '../../../icons/PictoAgenda.png' ;

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  logo: {
    height: 91,
    [theme.breakpoints.down('xs')]: {
      height: 64,
    },
  },
  header: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  subTitle: {
    marginTop: -5,
    marginBottom: 5
  },
  link: {
    alignSelf: 'flex-end',
    flexShrink: '0',
    textDecoration: 'none',
    display: 'flex',
    flewWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: '10',
    marginLeft: 20,
    marginTop: 10,
    color: theme.palette.secondary.main,
    '& .MuiTypography-root': {
      color: theme.palette.secondary.main,
    },
    '& svg [fill]': {
      fill: theme.palette.secondary.main,
    },
    '& svg': {
      height: '12px',
    }
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },  
  agenda: {
    boxShadow: "0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)",
    borderRadius: 4,
    padding: 28,
  }
}));

const SimilarEvents = () => {
  const classes = useStyles();
  const { record } = useShowContext();
  const translate = useTranslate();

  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.agenda}>
        <Box>
          <Box width={1} className={classes.header}>
            <img src={PictoAgenda} alt="logo" className={classes.logo}/>
            <Box>
              <Typography variant="h2">{translate('app.bookmark.event')} </Typography>
              <Typography variant="h3" component="div" className={classes.subTitle}>
              {translate('app.card.similar')}
              </Typography>
            </Box>
            <Link to='/Event' className={classes.link}>
              <Typography component="span" className={classes.linkText}>
              {translate('app.message.home.seeAllEvents')}
              </Typography>
              <ChevronRightIcon />
            </Link>
          </Box>
          <NextEvents similarRecord={record}/>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default SimilarEvents;
