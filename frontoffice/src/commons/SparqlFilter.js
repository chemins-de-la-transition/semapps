import React, { useCallback, useEffect } from 'react';
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

const SparqlFilter = ({ checked, setChecked, sparqlWhere, label }) => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();

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
    [filterValues, setFilters, sparqlWhere, setChecked]
  );

  useEffect(() => {
    if (!filterValues.sparqlWhere) {setChecked(false)}
  }, [filterValues, setChecked]);

  return (
    <FormGroup className={classes.formGroup}>
      <FormControlLabel control={<Checkbox checked={checked} />} label={label} onChange={changeFilter}/>
    </FormGroup>
  );
};

export default SparqlFilter;
