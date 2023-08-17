import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';
import { useListContext, Link, usePermissionsOptimized, useListFilterContext, useTranslate } from 'react-admin';
import { useCreateContainer } from '@semapps/semantic-data-provider';
import { useLocation } from 'react-router';
import { Box, Grid, Typography, IconButton, makeStyles, useMediaQuery, Button, Drawer } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

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
  },
  icon: {
    marginLeft: 8,
  },
  iconSelected: {
    marginLeft: 8,
    color: 'white',
    '& svg': {
      color: 'white',
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

const MultiViewsFilterListView = ({ views, filters, currentView, setView, clearFilters }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { resource, basePath, hasCreate, ids, loading } = useListContext();
  const createContainerUri = useCreateContainer(resource);
  const { permissions } = usePermissionsOptimized(createContainerUri);
  const [areFiltersOpen, openFilters] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const activatedViews = Object.keys(views).filter((key) => views[key]);
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  const { filterValues, setFilters } = useListFilterContext();
  
  const removeFilters = () => {setFilters({}); if (clearFilters) {clearFilters()} }

  return (
    <Grid container>
      {xs ? (
        <Grid item xs={12}>
          <Box p={1} className={classes.filtersBar}>
            <Button startIcon={<SearchIcon />} className={classes.filtersButton} onClick={() => openFilters(true)}>
              {translate('app.action.filters')}
            </Button>
            <Drawer anchor="left" open={areFiltersOpen} classes={{ paper: classes.filtersDrawer }}>
              <IconButton onClick={() => openFilters(false)} className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
              <Box p={2} textAlign="center">
                <Typography variant="subtitle1">{translate('app.action.filters')}</Typography>
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
            <Box p={2}>
              {Object.keys(filterValues).length > 0 &&
                <Button variant="outlined" color="secondary" onClick={() => removeFilters()}>{translate('app.action.removeFilters')}</Button>
              }
            </Box>
          </StickyBox>
        </Grid>
      )}
      <Grid item xs={12} sm={8} className={classes.results}>
        <Box bgcolor="primary.main" maxHeight={50}>
          <Grid container>
            <Grid item xs={8}>
              <Box className={classes.icons}>
                {activatedViews.map((key) => {
                  query.set('view', key);
                  return (
                    <Link key={key} to={'?' + query.toString()}>
                      {xs || sm ?
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => setView(key)}
                          className={key === currentView ? classes.iconSelected : classes.icon}
                        >
                          {React.createElement(views[key].icon, { fontSize: 'small' })}
                        </IconButton>
                        :
                        <Button
                          startIcon={React.createElement(views[key].icon)}
                          onClick={() => setView(key)}
                          className={key === currentView ? classes.iconSelected : classes.icon}
                        >
                          {views[key].label}
                        </Button>
                      }
                    </Link>
                  );
                })}
                {!xs && hasCreate && !!permissions && permissions.some(p => ['acl:Append', 'acl:Write'].includes(p['acl:mode'])) &&
                  <Link to={`${basePath}/create`}>
                    <Button className={classes.addButton}>{translate('app.action.create')}</Button>
                  </Link>
                }
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="right" p={2}>
                <Typography variant="body2">{ids.length} {translate('app.message.results')}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {!loading && ids.length === 0 ?
          <Box display="flex" alignItems="center" justifyContent="center" height={400} flexDirection="column">
            <Typography variant="h6" component="div">{translate('app.message.noResult')}</Typography>
            <br />
            {Object.keys(filterValues).length > 0 &&
              <Button variant="contained" color="primary" className={classes.removeFiltersButton} onClick={() => removeFilters()}>{translate('app.action.removeFilters')}</Button>
            }
          </Box>
          :
          views[currentView] && views[currentView].list
        }
      </Grid>
    </Grid>
  );
};

export default MultiViewsFilterListView;
