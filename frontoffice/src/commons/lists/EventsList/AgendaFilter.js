import React from 'react';
import { makeStyles, Grid, FormControl, InputLabel, Select, MenuItem, useMediaQuery, SvgIcon } from '@material-ui/core';
import { useGetList } from 'react-admin';

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
}));
  
const ChevronIcon = (props) => (
    <SvgIcon {...props} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6027 7.64582C16.7984 7.84073 16.7989 8.15731 16.604 8.35292L11.139 13.8374C10.9241 14.0531 10.5748 14.0531 10.3598 13.8374L4.89484 8.35292C4.69993 8.15731 4.70049 7.84073 4.8961 7.64582C5.09171 7.4509 5.40829 7.45147 5.60321 7.64708L10.7494 12.8117L15.8956 7.64708C16.0906 7.45147 16.4071 7.4509 16.6027 7.64582Z" fill="#203142"/>
    </SvgIcon>
);

const SelectResources = ({ reference, inverseSource, selectIcon, ...rest }) =>{
    const { data, ids } = useGetList(reference, undefined, { field: 'pair:label', order: 'ASC' });
    return (
        <Select {...rest} IconComponent = {selectIcon}>
        <MenuItem value="">Choisir...</MenuItem>
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
  

const AgendaFilter = ({ eventType, setEventType, category, setCategory, region, setRegion }) => {
    const classes = useStyles();
    const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

    return (
        <Grid container spacing={2} className={classes.box}>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <FormControl className={classes.formControl} size="small" fullWidth>
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>Événements</InputLabel>
                <SelectResources
                  reference="Type"
                  inverseSource="pair:typeOf" //TODO : filter only event types
                  selectIcon={ChevronIcon}
                  labelId="demo-select-area-label"
                  value={eventType}
                  onChange={e => {setEventType(e.target.value)}}
                  variant={'outlined'}
                  className={classes.select}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl className={classes.formControl} size="small" fullWidth>
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>Secteur d'activité</InputLabel>
                <SelectResources
                  reference="Theme"
                  inverseSource="pair:topicOf"
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
                <InputLabel id="demo-select-area-label" className={classes.inputLabelText}>Région</InputLabel>
                <SelectResources
                  reference="Region"
                  inverseSource="pair:locationOf"
                  selectIcon={ChevronIcon}
                  labelId="demo-select-area-label"
                  value={region}
                  onChange={e => {setRegion(e.target.value)}}
                  variant={'outlined'}
                  className={classes.select}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
};

export default AgendaFilter;