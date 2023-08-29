import React, { useState, useMemo, useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useListContext, useListFilterContext, ListContextProvider, useTranslate } from 'react-admin';
import { Box, Grid, Typography, IconButton, makeStyles, useMediaQuery, Button, Drawer } from '@material-ui/core';
import { useDataModels } from "@semapps/semantic-data-provider";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import  { useHistory } from 'react-router-dom';
import CardsList from "../CardsList";
import ResourceTab from "./ResourceTab";

const useStyles = makeStyles((theme) => ({
  filters: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    minHeight: 'calc(100vh - 145px)',
  },
  filtersTitle: {
    backgroundColor: '#23252E',
  },
  filtersBar: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  filtersButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  filtersDrawer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'white',
  },
  results: {
    minHeight: 'calc(100vh - 145px)',
  },
  icons: {
    paddingTop: 8,
    paddingRight: 8,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.down('xs')]: {
      display: '-webkit-box',
      overflow: 'scroll',
    },
  },
  addButton: {
    backgroundColor: 'white',
    color: 'black',
    radius: 3,
    padding: '8px 20px',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Roboto',
    marginRight: 16
  },
  removeFiltersButton: {
    padding: '8px 20px',
  },
}));

const getTabFromPathname = (pathname) => {
  switch (pathname) {
    case "/LEP/organizations":
      return 3;
    case "/LEP/places":
      return 2;
    case "/LEP/events":
      return 1;
    default:
      return 0;
  }
};

const TabbedListView = ({ tabs, filters, futureActivities }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { ids, data, loaded, loading } = useListContext();
  const dataModels = useDataModels();
  const [areFiltersOpen, openFilters] = useState(false);
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(tabs[getTabFromPathname(history.location.pathname)].resource);
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const { filterValues, setFilters } = useListFilterContext();

  const removeFilters = () => {setFilters({})}

  const dataByTabs = useMemo(() => {
    if (ids.length > 0 && dataModels) {
      // Ensure entries are on the right order
      let dataByTabs = Object.fromEntries(tabs.map(t => [t.resource, {}]));
      for (let [id, record] of Object.entries(data)) {
        const recordTypes = Array.isArray(record.type) ? record.type : [record.type];
        for (let resource of Object.keys(dataModels)) {
          if (dataByTabs[resource] && recordTypes.some(t => dataModels[resource].types.includes(t))) {
            dataByTabs[resource][id] = record;
          }
        }
      }
      if (dataByTabs['Place']) {
        dataByTabs['Place']=Object.fromEntries(Object.entries(dataByTabs['Place'])
          .filter(key => key[1]['id'].includes(process.env.REACT_APP_MIDDLEWARE_URL))
          .filter(key => key[1]['cdlt:hasPublicationStatus']===process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide"))
      }
      if (dataByTabs['Course']) {
        dataByTabs['Course']=Object.fromEntries(Object.entries(dataByTabs['Course']).filter(key => key[1]['cdlt:hasPublicationStatus']===process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide"))
        if (futureActivities) {
          dataByTabs['Course']=Object.fromEntries(Object.entries(dataByTabs['Course']).filter(key => key[1]['pair:startDate']>(new Date()).toISOString()))
        }
      }
      if (futureActivities && dataByTabs['Event']) {
        dataByTabs['Event']=Object.fromEntries(Object.entries(dataByTabs['Event'])
          .filter(key => key[1]['pair:startDate']>(new Date()).toISOString())
          .filter(key => key[1]['cdlt:hasPublicationStatus']===process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide"))
      }
      if (dataByTabs['Organization']) {
        dataByTabs['Organization']=Object.fromEntries(Object.entries(dataByTabs['Organization'])
          .filter(key => key[1]['cdlt:hasPublicationStatus']===process.env.REACT_APP_MIDDLEWARE_URL+"publication-status/valide"))
      }
      return dataByTabs;
    }
  }, [ids, data, tabs, dataModels, futureActivities]);

  const filteredIds = useMemo(() => {
    let filteredIds = [];
    if (dataByTabs) {
      for (let resource of Object.keys(dataByTabs)) {
        if (Object.keys(dataByTabs[resource]).length > 0) {
          filteredIds.push(Object.keys(dataByTabs[resource]));
        }
      }
    }
    return filteredIds;
  }, [dataByTabs])

  useEffect(() => {
    if( dataByTabs && Object.keys(dataByTabs[currentTab]).length === 0 ) {
      const firstTab = Object.keys(dataByTabs).find(t => Object.keys(dataByTabs[t]).length > 0);
      if (firstTab) setCurrentTab(firstTab);
    }
  }, [dataByTabs, currentTab, setCurrentTab]);

  return (
    <Grid container>
      {xs ? (
        <Grid item xs={12}>
          <Box p={1} className={classes.filtersBar}>
            <Button startIcon={<SearchIcon />} className={classes.filtersButton} onClick={() => openFilters(true)}>
              Filtres
            </Button>
            <Drawer anchor="left" open={areFiltersOpen} classes={{ paper: classes.filtersDrawer }}>
              <IconButton onClick={() => openFilters(false)} className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
              <Box p={2} textAlign="center">
                <Typography variant="subtitle1">Filtres</Typography>
              </Box>
              <Box p={2}>
                {filters.map((filter, i) => React.cloneElement(filter, { key: i, onSelect: () => openFilters(false) }))}
              </Box>
              <Box p={2}>
                {Object.keys(filterValues).length > 0 &&
                  <Button variant="outlined" color="secondary" onClick={() => removeFilters()}>{translate('app.action.removeFilters')}</Button>
                }
              </Box>
            </Drawer>
          </Box>
        </Grid>
      ) : (
        <Grid item sm={4} className={classes.filters}>
          <Box p={2} className={classes.filtersTitle}>
            <Typography variant="subtitle1">{translate('app.action.filters')}:</Typography>
          </Box>
          <StickyBox offsetTop={100}>
            <Box p={2}>{filters.map((filter, i) => React.cloneElement(filter, { key: i }))}</Box>
          </StickyBox>
          <Box p={2}>
            {Object.keys(filterValues).length > 0 &&
              <Button variant="outlined" color="secondary" onClick={() => removeFilters()}>{translate('app.action.removeFilters')}</Button>
            }
          </Box>
        </Grid>
      )}
      <Grid item xs={12} sm={8} className={classes.results}>
        <Box bgcolor="primary.main" height={{ xs: 44, sm: 48 }}>
          <Box className={classes.icons}>
            {dataByTabs && tabs.map(tab => Object.keys(dataByTabs[tab.resource]).length > 0 && (
              <ResourceTab
                key={tab.resource}
                resource={tab.resource}
                total={Object.keys(dataByTabs[tab.resource]).length}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            ))}
          </Box>
        </Box>
        {!loading && filteredIds.length === 0 ?
          <Box display="flex" alignItems="center" justifyContent="center" height={400} flexDirection="column">
            <Typography variant="h6" component="div">{translate('app.message.noResult')}</Typography>
            <br />
            {Object.keys(filterValues).length > 0 &&
              <Button variant="contained" color="primary" className={classes.removeFiltersButton} onClick={() => setFilters({})}>{translate('app.action.removeFilters')}</Button>
            }
          </Box>
          :
          <Box p={xs ? 2 : 3}>
            {
              dataByTabs && dataByTabs[currentTab] &&
                <ListContextProvider value={{
                  basePath: '/' + currentTab,
                  data: dataByTabs[currentTab],
                  ids: Object.keys(dataByTabs[currentTab]),
                  loaded,
                  loading,
                  page: 1,
                  perPage: 1000,
                  resource: currentTab,
                  total: Object.keys(dataByTabs[currentTab]).length,
                }}>
                  <CardsList CardComponent={tabs.find(t => t.resource === currentTab).card} />
                </ListContextProvider>
            }
          </Box>
        }
      </Grid>
    </Grid>
  );
};

export default TabbedListView;
