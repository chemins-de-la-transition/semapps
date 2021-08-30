import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';
import { useListContext, Link, usePermissionsOptimized } from 'react-admin';
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
  }
}));

const MultiViewsFilterList = ({ views, filters }) => {
  const classes = useStyles();
  const { resource, basePath, hasCreate, ids } = useListContext();
  const { permissions } = usePermissionsOptimized(resource);
  const [areFiltersOpen, openFilters] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const activatedViews = Object.keys(views).filter((key) => views[key]);
  const initialView =
    query.has('view') && activatedViews.includes(query.get('view')) ? query.get('view') : activatedViews[0];
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const [currentView, setView] = useState(initialView);

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
            </Drawer>
          </Box>
        </Grid>
      ) : (
        <Grid item sm={4} className={classes.filters}>
          <Box p={2} className={classes.filtersTitle}>
            <Typography variant="subtitle1">Filtres:</Typography>
          </Box>
          <StickyBox offsetTop={100}>
            <Box p={2}>{filters.map((filter, i) => React.cloneElement(filter, { key: i }))}</Box>
          </StickyBox>
        </Grid>
      )}
      <Grid item xs={12} sm={8} className={classes.results}>
        <Box bgcolor="primary.main" maxHeight={50}>
          <Grid container>
            <Grid item xs={6}>
              <Box p={2}>
                <Typography variant="body2">{ids.length} résultat(s)</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign="right" className={classes.icons}>
                {!xs && hasCreate && !!permissions && permissions.some(p => ['acl:Append', 'acl:Write'].includes(p['acl:mode'])) &&
                  <Link to={`${basePath}/create`}>
                    <Button className={classes.addButton}>Ajouter</Button>
                  </Link>
                }
                {activatedViews.map((key) => {
                  query.set('view', key);
                  return (
                    <Link key={key} to={'?' + query.toString()}>
                      {xs ?
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
              </Box>
            </Grid>
          </Grid>
        </Box>
        {views[currentView] && views[currentView].list}
      </Grid>
    </Grid>
  );
};

export default MultiViewsFilterList;
