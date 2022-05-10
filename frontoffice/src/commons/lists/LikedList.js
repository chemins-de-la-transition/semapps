import React, { useMemo } from 'react';
import { ListContextProvider, useGetMany } from 'react-admin';
import { Box, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useCollection } from "@semapps/activitypub-components";
import FullWidthBox from '../FullWidthBox';
import LargeContainer from '../LargeContainer';
import CardsList from './CardsList';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  container: {
    margin: '32px 0 16px 16px',
    [theme.breakpoints.down('xs')]: {
      margin: '32px 0 16px',
      padding: 0
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
  listBase: {
    overflowY: 'hidden',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      flexShrink: '0',
    },
  },
  likedLoading: {
    margin: '32px 0',
    width: '100%',
    maxWidth: 200,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'unset'
    },
  },
  errorContainer: {
    marginTop: 16,
    padding: '1rem !important'
  },
  noData: {
    margin: '16px 0'
  }
}));

const LikedList = ({ id, type, resource, title, subtitle, headComment, CardComponent }) => {
  const classes = useStyles();
  const { items } = useCollection(id + '/liked');
  
  const { data, loading, loaded, error } = useGetMany(
    'Activity',
    items
  );
  
  const filteredData = useMemo(() => { 
    let filteredData = [];
    data
      .filter(record => record && record.type === type)
      .forEach(record => (filteredData[record.id] = record));
    return filteredData;
  },[data, type]);
  
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container}>
        <Box width={1} className={classes.header}>
          <Box>
            <Typography variant="h3" component="div" className={classes.subTitle}>
              {subtitle}
            </Typography>
            <Typography variant="body2" component="div">
              {headComment}
            </Typography>
          </Box>
        </Box>
        { items.length === 0 && loaded &&
          <Typography variant="body2" component="div" className={classes.noData}>
            Aucun favori enregistré
          </Typography>
        }
        { !loaded && !error &&
          <LinearProgress className={classes.likedLoading}/>
        }
        { error &&
          <Alert severity="error" className={classes.errorContainer}>Un problème est survenu</Alert>
        }
        { data.length > 0 && !loading && !error &&
          <Box className={classes.listBase}>
            <ListContextProvider
              value={{
                basePath: '/' + resource,
                currentSort: { field: 'id', order: 'ASC' },
                data: filteredData,
                // defaultTitle: null,
                // displayedFilters: null,
                // filterValues: null,
                // hasCreate: null,
                // hideFilter: null,
                ids: Object.keys(filteredData),
                loaded,
                loading,
                // onSelect: null,
                // onToggleItem: null,
                // onUnselectItems: null,
                page: 1,
                perPage: 99,
                resource: resource,
                // selectedIds: null,
                // setFilters: null,
                // setPage: null,
                // setPerPage: null,
                // setSort: null,
                // showFilter: null,
                total: filteredData.length
              }}
            >
              <CardsList  CardComponent={CardComponent} link="show" hasLike={true} />
            </ListContextProvider>
          </Box>
        }
      </LargeContainer>
    </FullWidthBox>
  );
};

export default LikedList;
