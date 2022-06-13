import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';
import ChevronRightIcon from '../../../svg/ChevronRightIcon';
import { ListBase } from 'react-admin';
import { Link } from 'react-router-dom';
import ItemsGrid from './ItemsGrid';
import { linkToFilteredList } from "../../../utils";
import NextEvents from '../EventsList/NextEvents';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  container: {
    marginTop: 60,
    marginBottom: '0',
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
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },  
  listBase: {
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      overflowX: 'scroll',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      overflowX: 'scroll',
      flexShrink: '0',
    },
  },
  agenda: {
    boxShadow: "0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)",
    borderRadius: 4,
    padding: 28,
  }
}));

const FeaturedList = ({ resource, basePath, title, subtitle, logo, linkText, CardSubHeaderComponent, filter, isAgenda }) => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container + (isAgenda ? ' '+ classes.agenda : '')}>
        <Box width={1} className={classes.header}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <Box>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3" component="div" className={classes.subTitle}>
              {subtitle}
            </Typography>
          </Box>
          <Link to={filter ? linkToFilteredList(resource, filter.field)({ id: filter.value }) : basePath} className={classes.link}>
            <Typography className={classes.linkText} component="div">
              {linkText}
            </Typography>
            <ChevronRightIcon />
          </Link>
        </Box>
        {isAgenda ? 
          <Box>
            <NextEvents />
          </Box>
        : 
          <Box className={classes.listBase}>
            <ListBase resource={resource} basePath={basePath} perPage={4} sort={{ field: 'dc:created', order: 'DESC' }} filter={filter ? {[filter.field]:filter.value} : null}>
              <ItemsGrid CardSubHeaderComponent={CardSubHeaderComponent} resource={resource}/>
            </ListBase>
          </Box>
        }
      </LargeContainer>
    </FullWidthBox>
  );
};

export default FeaturedList;
