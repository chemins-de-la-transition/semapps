import React, { useCallback, useState } from 'react';
import { useListFilterContext } from 'react-admin';
import { Checkbox, FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formGroup: {
    width: '100%',
    marginTop: 14,
    marginBottom: 16,
    color: 'white',
    '& label': {
      color: 'white',
    },
    '& svg': {
      color: 'white',
    },
  },
}));

const SparqlFilter = ({ initialChecked, sparqlWhere, label }) => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();
  const [checked, setChecked] = useState(initialChecked);

  const changeFilter = useCallback(
    (e) => {
      setChecked(e.target.checked);
      if (e.target.checked) {
        setFilters({ ...filterValues, 'sparqlWhere': sparqlWhere }, null, false);
      } else {
        if (filterValues.sparqlWhere) {
          setFilters({ ...filterValues, 'sparqlWhere': null }, null, false);
        }
      }
    },
    [filterValues, setFilters, sparqlWhere]
  );

  return (
    <FormGroup className={classes.formGroup}>
      <FormControlLabel control={<Checkbox checked={checked} />} label={label} onChange={changeFilter}/>
    </FormGroup>
  );
};

export default SparqlFilter;
