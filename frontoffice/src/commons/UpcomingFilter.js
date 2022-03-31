import React, { useCallback, useEffect, useState } from 'react';
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

const UpcomingFilter = ({ initialChecked, source, limit, sort, filter, label, onSelect }) => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();
  const [checked, setChecked] = useState(initialChecked);

  const now = new Date();
  const sparqlWhere = [
    {
      type: "bgp",
      triples: [
        {
          "subject": {"termType":"Variable","value":"s1"},
          "predicate": {"termType":"NameNode","value":source},
          "object": {"termType":"Variable","value":"endDate"}
        }
      ]
    },{
      type: "filter",
      expression:{
        type:"operation",
        operator:">",
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
  ];
  
  useEffect(() => {
    if (checked) {
      setFilters({ ...filterValues, 'sparqlWhere': sparqlWhere }, null, false);
    }
  },[checked, setFilters, filterValues, sparqlWhere])

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

UpcomingFilter.defaultProps = {
  limit: 500,
  sort: { field: 'pair:label', order: 'ASC' }
};

export default UpcomingFilter;
