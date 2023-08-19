import React, { useState } from 'react';
import { makeStyles, Grid, FormControl, InputLabel, Select, MenuItem, SvgIcon, useMediaQuery, Button } from '@material-ui/core';
import { useGetList, useTranslate } from 'react-admin';

const useStyles = makeStyles((theme) => ({
    box: {
      marginTop: 20,
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
    inputLabelText: {
      fontWeight: 700,
      marginLeft: 12,
      fontFamily: 'Roboto',
      color: theme.palette.secondary.main,
      fontSize: 14,
      top: -10,
    },
    filtersButton: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: 20,
      paddingLeft: 50,
      paddingRight: 50,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }
    },
    chevronUp: {
      transform: "rotate(180deg)",
    },
    filters: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        placeContent: 'center',
        padding: 20,
      },
      '&.MuiGrid-spacing-xs-2': {
        width: '100% !important',
      }
    }
}));
  
const ChevronIcon = (props) => (
    <SvgIcon {...props} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6027 7.64582C16.7984 7.84073 16.7989 8.15731 16.604 8.35292L11.139 13.8374C10.9241 14.0531 10.5748 14.0531 10.3598 13.8374L4.89484 8.35292C4.69993 8.15731 4.70049 7.84073 4.8961 7.64582C5.09171 7.4509 5.40829 7.45147 5.60321 7.64708L10.7494 12.8117L15.8956 7.64708C16.0906 7.45147 16.4071 7.4509 16.6027 7.64582Z"/>
    </SvgIcon>
);

const SelectResources = ({ reference, inverseSource, selectIcon, filter, ...rest }) =>{
    const { data, ids } = useGetList(reference, { perPage: 999, page: 1 }, { field: 'pair:label', order: 'ASC' }, filter);
    return (
      <Select {...rest} IconComponent = {selectIcon}>
        <MenuItem value="">Choisir...</MenuItem>
        {ids
          .filter((id) => !inverseSource || data[id]?.[inverseSource])
          .map((id) => (
            <MenuItem key={id} value={id}>
              {data[id]['pair:label']}
            </MenuItem>
          ))
        }
      </Select>
    );
};
  

const AgendaFilter = ({ eventType, setEventType, category, setCategory, region, setRegion }) => {
    const classes = useStyles();
    const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
    const [areFiltersOpen, openFilters] = useState(false);
    const translate = useTranslate();

    return (
        <Grid container className={classes.box}>
        <Grid item xs={12} spacing={2} sm={10}>
          <Grid container spacing={2} className={classes.filters}>
          {xs ?
            <Button IconComponent={ChevronIcon} className={classes.filtersButton} onClick={() => openFilters(!areFiltersOpen)}>
             {translate('app.action.showFilters')}
              {areFiltersOpen ? <ChevronIcon className={classes.chevronUp}/> : <ChevronIcon />}
            </Button>
            :
            null
          }
          {(!xs || areFiltersOpen) ?
            <>
            <Grid item xs={12} sm={3}>
                <FormControl className={classes.formControl} size="small" fullWidth>  
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>{translate('app.action.event.event')}</InputLabel>
                <SelectResources
                  reference="Type"
                  inverseSource="pair:typeOf"
                  selectIcon={ChevronIcon}
                  labelId="demo-select-area-label"
                  value={eventType}
                  onChange={e => {setEventType(e.target.value)}}
                  variant={'outlined'}
                  className={classes.select}
                  filter={{ a: 'pair:EventType' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl className={classes.formControl} size="small" fullWidth>
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>{translate('app.input.sector')}</InputLabel>
                <SelectResources
                  reference="Sector"
                  inverseSource="pair:sectorOf"
                  selectIcon={ChevronIcon}
                  labelId="demo-select-area-label"
                  value={category}
                  onChange={e => {setCategory(e.target.value)}}
                  variant={'outlined'}
                  className={classes.select}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl className={classes.formControl} size="small" fullWidth>
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>{translate('app.input.region')}</InputLabel>
                <SelectResources
                  reference="Region"
                  inverseSource="cdlt:regionOf"
                  selectIcon={ChevronIcon}
                  labelId="demo-select-area-label"
                  value={region}
                  onChange={e => {setRegion(e.target.value)}}
                  variant={'outlined'}
                  className={classes.select}
                />
              </FormControl>
            </Grid>
            </>
            : null }
          </Grid>
        </Grid>
      </Grid>
    );
};

export default AgendaFilter;