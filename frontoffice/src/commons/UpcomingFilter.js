import React, { useCallback, useEffect, useState, useMemo } from 'react';
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

const UpcomingFilter = ({ initialChecked, source, label }) => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();
  const [checked, setChecked] = useState(initialChecked);

  const sparqlWhere = useMemo(() => {
    const now = new Date();
    return [
      {
        type: "bgp",
        triples: [
          {
            "subject": { termType: "Variable", value:"s1" },
            "predicate": { termType:"NameNode", value: source },
            "object": { termType:"Variable", value: "endDate" }
          }
        ]
      },{
      type: "filter",
      expression:{
        type: "operation",
        operator: ">",
        args:[
          {
            termType: "Variable",
            value: "endDate"
          },
          {
            termType: "Literal",
            datatype: {
              termType:"NamedNode",
              value:"http://www.w3.org/2001/XMLSchema#dateTime"
            },
            language: "",
            // value: "2022-11-17T10:20:13+05:30"
            value: now.toISOString()
          }
        ]
      }
    }
    ]
  }, [source]);
  
  useEffect(() => {
    if (checked) {
      setFilters({ ...filterValues, 'sparqlWhere': sparqlWhere }, null, false);
    }
  },[checked, filterValues, setFilters, sparqlWhere])

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

export default UpcomingFilter;
