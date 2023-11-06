import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';
import ChevronRightIcon from '../../../svg/ChevronRightIcon';
import {useShowContext} from 'react-admin';
import ListBaseWithOnlyPublishedResources from '../ListBaseWithOnlyPublishedResources';
import { Link } from 'react-router-dom';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: 40,
    borderTop: '0px lightgrey solid',
  },
  container: {
    marginTop: 40,
    marginBottom: 0
  },
  header: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
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
    marginLeft: '20px',
    marginTop: '10px',
    '& span': {
      textTransform: 'unset',
      fontWeight: 600,
      '&:hover': {
        textDecoration: 'underline',
      }
    },
    '& svg': {
      height: '12px',
      fill: 'unset'
    },
  },
  listBase: {
    overflowY: 'hidden',
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
  logo: {
    height: 91,
    [theme.breakpoints.down('xs')]: {
      height: 64,
    },
  }
}));

const SimilarList = ({ resource, basePath, title, subtitle, logo, headComment, linkText, CardSubHeaderComponent }) => {
  const classes = useStyles();
  const { record } = useShowContext();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container}>
        <Box width={1} className={classes.header}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <Box>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3" component="div">
              {subtitle}
            </Typography>
            <Typography variant="body2" component="div">
              {headComment}
            </Typography>
          </Box>
          <Link to={basePath} className={classes.link}>
            <Typography variant="button" color="secondary">
              {linkText}
            </Typography>
            <ChevronRightIcon />
          </Link>
        </Box>
        <Box className={classes.listBase}>
          <ListBaseWithOnlyPublishedResources
            resource={resource}
            basePath={basePath}
          >
            <ItemsGrid similarRecord={record} CardSubHeaderComponent={CardSubHeaderComponent} />
          </ListBaseWithOnlyPublishedResources>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default SimilarList;
