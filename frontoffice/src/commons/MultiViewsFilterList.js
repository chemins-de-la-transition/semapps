import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';
import { useListContext, Link } from 'react-admin';
import { useLocation } from 'react-router';
import { Box, Grid, Typography, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  filters: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    minHeight: 'calc(100vh - 148px)',
  },
  filtersTitle: {
    backgroundColor: '#23252E',
  },
  results: {
    minHeight: 'calc(100vh - 148px)',
  },
  icons: {
    paddingTop: 12,
    paddingRight: 12,
  },
  icon: {
    marginLeft: 8,
  },
  iconSelected: {
    marginLeft: 8,
    '& svg': {
      color: 'white',
    },
  },
}));

const MultiViewsFilterList = ({ views, filters }) => {
  const classes = useStyles();
  const { ids } = useListContext();
  const query = new URLSearchParams(useLocation().search);
  const initialView = query.has('view') ? query.get('view') : Object.keys(views)[0];
  const [currentView, setView] = useState(initialView);

  return (
    <Grid container>
      <Grid item xs={4} className={classes.filters}>
        <Box p={2} className={classes.filtersTitle}>
          <Typography variant="subtitle1" bold>
            Filtres:
          </Typography>
        </Box>
        <StickyBox offsetTop={100}>
          <Box p={2}>{filters}</Box>
        </StickyBox>
      </Grid>
      <Grid item xs={8} className={classes.results}>
        <Box bgcolor="primary.main" maxHeight={50}>
          <Grid container>
            <Grid item xs={6}>
              <Box p={2}>
                <Typography variant="body2">{ids.length} résultat(s) correspondant à votre recherche</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign="right" className={classes.icons}>
                {Object.keys(views).map((key) => {
                  query.set('view', key);
                  return (
                    <Link key={key} to={'?' + query.toString()}>
                      <IconButton
                        size="small"
                        color="secondary"
                        onClick={() => setView(key)}
                        className={key === currentView ? classes.iconSelected : classes.icon}
                      >
                        {React.createElement(views[key].icon, { fontSize: 'small' })}
                      </IconButton>
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
        {views[currentView].list}
      </Grid>
    </Grid>
  );
};

export default MultiViewsFilterList;
