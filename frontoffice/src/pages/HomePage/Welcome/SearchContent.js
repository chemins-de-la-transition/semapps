import React, { useState } from 'react';
import { makeStyles, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, useMediaQuery } from '@material-ui/core';
import LargeContainer from '../../../commons/LargeContainer';
import FullWidthBox from '../../../commons/FullWidthBox';
import Button from '../../../commons/Button';
import  { useHistory } from 'react-router-dom';
import { useGetList } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  searchBox: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      top: '-50px',
    },
  },
  searchBackground: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    marginLeft: 40,
    marginRight: 40,
    padding: '20px 24px 24px',
    borderRadius: 4,
  },
  commonsSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchBackgroundXs :{
    backgroundColor: theme.palette.primary.main,
  },
  containerXs:{
    paddingTop: 32,
    paddingBottom: 32,
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,
  },
  formContainer: {
    width: '100%',
    '& :not(:first-child)': {
      marginLeft: 6,
      [theme.breakpoints.up('xs')]: {
        marginLeft: '0px',
      },
    },
    '& :not(:last-child)': {
      marginRight: '6px',
      [theme.breakpoints.up('xs')]: {
        marginRight: '0px',
      },
    },
  },
  formControl: {
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.contrastText,
      position: 'relative',
      minWidth: '100%',
      '& .MuiFormLabel-filled':{
        visibility: 'hidden'
      },
      '& .MuiInputLabel-formControl': {
        top: 12,
        left: 10,
        transform: 'unset'
      }
    },
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
      '& .MuiSelect-root': {
        padding: '10px !important',
      }
    },
  },
  button: {
    marginTop: 7,
    padding: '10px 18px',
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
  },
  searchTitle:{
    [theme.breakpoints.down('xs')]: {
      marginBottom: 18,
    },
    marginBottom: 14
  },
}));

const SelectResources = ({ reference, inverseSource, ...rest }) =>{
  const { data, ids } = useGetList(reference, undefined, { field: 'pair:label', order: 'ASC' });
  return (
    <Select {...rest}>
      <MenuItem value="">Choisir...</MenuItem>/>
      {ids
      .filter((id) => !inverseSource || data[id][inverseSource])
      .map((id) => (
        <MenuItem key={id} value={id}>
          {data[id]['pair:label']}
        </MenuItem>
      ))}
    </Select>
  );
};

const FormBox = () => {
  const classes = useStyles();
  const history = useHistory();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const [type, setType] = useState("Place");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("");

  const search = () => {
    let filters = {};
    if( region ) filters['cdlt:hasRegion'] = region;
    if( theme ) filters['pair:hasTopic'] = theme;
    history.push(`/${type}?filter=${encodeURIComponent(JSON.stringify(filters))}&view=list`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-select-objecttype-label">Type</InputLabel>
              <Select labelId="demo-select-objecttype-label" value={type} onChange={e => setType(e.target.value)} className={classes.select} variant={xs ? 'outlined' : 'standard'}>
                <MenuItem key="Place" value="Place">Lieux</MenuItem>
                <MenuItem key="Event" value="Event">Évènements</MenuItem>
                <MenuItem key="Course" value="Course">Parcours</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-select-area-label">Région</InputLabel>
              <SelectResources
                reference="Region"
                inverseSource="cdlt:RegionOf"
                labelId="demo-select-area-label"
                value={region}
                onChange={e => setRegion(e.target.value)}
                variant={xs ? 'outlined' : 'standard'}
                className={classes.select}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-select-topic-label">Thématique</InputLabel>
              <SelectResources
                reference="Theme"
                inverseSource="pair:topicOf"
                labelId="demo-select-topic-label"
                value={theme}
                onChange={e => setTheme(e.target.value)}
                variant={xs ? 'outlined' : 'standard'}
                className={classes.select}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            variant="contained"
            color="secondary"
            typographyVariant="button2"
            className={classes.button}
            onClick={search}
          >
            Rechercher
        </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const SearchContent = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  if (xs) {
    return (
      <FullWidthBox className={classes.searchBackgroundXs}>
        <LargeContainer className={classes.commonsSearch + ' ' + classes.containerXs}>
          <Typography variant="subtitle1" className={classes.searchTitle}>
            Que recherchez-vous ?
          </Typography>
          <FormBox />
        </LargeContainer>
      </FullWidthBox>
    );
  } else {
    return (
      <Box className={classes.box}>
        <FullWidthBox className={classes.searchBox}>
          <LargeContainer>
            <Box className={classes.searchBackground + ' ' + classes.commonsSearch}>
              <Typography variant="subtitle1" className={classes.searchTitle}>
                PARTEZ SUR LES CHEMINS DE LA TRANSITION
              </Typography>
              <FormBox />
            </Box>
          </LargeContainer>
        </FullWidthBox>
      </Box>
    );
  }
};

export default SearchContent;
