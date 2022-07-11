import React, { useEffect, useRef } from 'react';
import { useListFilterContext } from 'react-admin';
import { FormControl, makeStyles, Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import debounce from 'lodash.debounce';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: theme.palette.white.main,
    borderRadius: 4,
  },
  input: {
    padding:"5px 12px 5px 12px"
  }
}));

const SearchFilter = () => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();
  const textInput = useRef(null);

  const changeFilter = debounce(query => {
    setFilters({ ...filterValues, q: query}, null, false);
  }, 500)

  useEffect(() => {
    if (!filterValues.q) {textInput.current.value=""}
    if (filterValues.q && textInput.current.value==="") {textInput.current.value=filterValues.q}
  }, [filterValues, textInput ]);
  
  return (  
    <FormControl className={classes.formControl}>
      <Input 
        onChange={event => (changeFilter(event.target.value))} 
        endAdornment={<SearchIcon/>}
        disableUnderline={true}
        placeholder="Commencez votre recherche"
        className={classes.input}
        inputRef={textInput}
      />
    </FormControl>
  );
};

SearchFilter.defaultProps = {
  limit: 500,
  sort: { field: 'pair:label', order: 'ASC' }
};

export default SearchFilter;
