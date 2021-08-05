import React, { useCallback } from 'react';
import { useGetList, getResources, useListFilterContext } from 'react-admin';
import { shallowEqual, useSelector } from 'react-redux';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginBottom: 30,
    color: 'white',
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-input': {
      color: 'white',
    },
    '& svg': {
      color: 'white',
    },
  },
}));

const Filter = ({ reference, source, inverseSource, limit, sort, filter, label, onSelect }) => {
  const classes = useStyles();
  const { data, ids } = useGetList(reference, { page: 1, perPage: limit }, sort, filter);
  const resources = useSelector(getResources, shallowEqual);
  const currentResource = resources.filter((r) => r?.name === reference)[0];
  const { filterValues, setFilters } = useListFilterContext();

  const changeFilter = useCallback(
    (e) => {
      setFilters({ ...filterValues, [source]: e.target.value }, null, false);
      if (onSelect) onSelect(e.target.value);
    },
    [filterValues, setFilters, source, onSelect]
  );

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="region">{label || currentResource.options.label}</InputLabel>
      <Select labelId="region" value={filterValues[source]} onChange={changeFilter}>
        <MenuItem>---</MenuItem>
        {ids
          .filter((id) => !inverseSource || data[id][inverseSource])
          .map((id) => (
            <MenuItem key={id} value={id}>
              {data[id]?.['pair:label']}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

Filter.defaultProps = {
  limit: 500,
};

export default Filter;
