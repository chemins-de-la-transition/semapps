import React, { useState } from 'react';
import { makeStyles, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, useMediaQuery, SvgIcon } from '@material-ui/core';
import LargeContainer from '../../../commons/LargeContainer';
import FullWidthBox from '../../../commons/FullWidthBox';
import Button from '../../../commons/Button';
import  { useHistory } from 'react-router-dom';
import { useGetList, useTranslate } from 'react-admin';
import { typeOfCourseWeight } from '../../../commons/Weights';

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
  boxXs: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBackgroundXs :{
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    marginLeft: 15,
    marginRight: 15,
    padding: '20px 20px 24px',
    borderRadius: 4,
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
    '& .MuiFormLabel-root.Mui-focused': {
      top: 0,
    }
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
    padding: '10px 18px',
    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-body1' : {
        fontSize: 12,
      }
    },
  },
  searchTitle:{
    [theme.breakpoints.down('xs')]: {
      marginBottom: 18,
    },
    marginBottom: 14,
    fontWeight: 500, 
    fontFamily: 'Roboto'
  },
  inputLabelText: {
    fontWeight: 700,
    marginLeft: 12,
    fontFamily: 'Roboto',
    color: theme.palette.secondary.main,
    fontSize: 14,
    top: -10,
  },
}));

const ChevronIcon = (props) => (
  <SvgIcon {...props} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6027 7.64582C16.7984 7.84073 16.7989 8.15731 16.604 8.35292L11.139 13.8374C10.9241 14.0531 10.5748 14.0531 10.3598 13.8374L4.89484 8.35292C4.69993 8.15731 4.70049 7.84073 4.8961 7.64582C5.09171 7.4509 5.40829 7.45147 5.60321 7.64708L10.7494 12.8117L15.8956 7.64708C16.0906 7.45147 16.4071 7.4509 16.6027 7.64582Z" fill="#203142"/>
  </SvgIcon>
 );

const SelectResources = ({ reference, inverseSource, selectIcon, ...rest }) =>{
  const translate = useTranslate();
  const courseWeights = typeOfCourseWeight(translate);
  const { data, ids } = useGetList(reference, { perPage: 999, page: 1 }, { field: 'pair:label', order: 'ASC' });
  return (
    <Select {...rest} IconComponent = {selectIcon}>
      <MenuItem value="">{translate('app.helper.choose')}</MenuItem>
      {ids
        .filter((id) => !inverseSource || data[id]?.[inverseSource])
        .sort((a, b) => (courseWeights[data[b]?.['pair:label']] || 0) - (courseWeights[data[a]?.['pair:label']] || 0))
        .map((id) => (
          <MenuItem key={id} value={id}>
            {data[id]['pair:label']}
          </MenuItem>
        ))
      }
    </Select>
  );
};

const FormBox = () => {
  const classes = useStyles();
  const history = useHistory();
  const translate = useTranslate();

  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const search = () => {
    let filters = {};
    if( region ) filters['cdlt:hasRegion'] = region;
    if( type ) filters['cdlt:hasCourseType'] = type;
    if( category ) filters['pair:hasSector'] = category;
    history.push(`/LEP?filter=${encodeURIComponent(JSON.stringify(filters))}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>{translate('app.input.courseType')}</InputLabel>
              <SelectResources
                reference="Type"
                inverseSource="cdlt:typeOfCourse"
                labelId="demo-select-type-label"
                value={type}
                onChange={e => setType(e.target.value)}
                className={classes.select} 
                variant={'outlined'}
                selectIcon={ChevronIcon}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-select-sector-label" className={classes.inputLabelText}>{translate('app.input.sector')}</InputLabel>
              <SelectResources
                reference="Sector"
                inverseSource="pair:sectorOf"
                selectIcon={ChevronIcon}
                labelId="demo-select-sector-label"
                value={category}
                onChange={e => setCategory(e.target.value)}
                variant={'outlined'}
                className={classes.select}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>{translate('app.input.region')}</InputLabel>
              <SelectResources
                reference="Region"
                inverseSource="cdlt:regionOf"
                selectIcon={ChevronIcon}
                labelId="demo-select-area-label"
                value={region}
                onChange={e => setRegion(e.target.value)}
                variant={'outlined'}
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
            className={classes.button}
            onClick={search}
          >
            {translate('app.action.search')}
        </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const SearchContent = () => {
  const classes = useStyles();
  const translate = useTranslate();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  if (xs) {
    return (
      <FullWidthBox className={classes.boxXs}>
        <LargeContainer className={classes.searchBackgroundXs + ' ' + classes.commonsSearch}>
          <Typography variant="subtitle1" className={classes.searchTitle}>
            {translate('app.block.search')}
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
                {translate('app.block.search')}
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
