import React, { useCallback } from 'react';
import { useListFilterContext } from 'react-admin';
import { FormControl, makeStyles, Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: theme.palette.white.main,
    borderRadius: 4,
  },
  input: {
    padding:5,
  }
}));

const SearchFilter = () => {
  const classes = useStyles();
  const { filterValues, setFilters } = useListFilterContext();

  const changeFilter = useCallback(
    (e) => {
      setFilters({ ...filterValues, q: e.target.value }, null, false);
    },
    [filterValues, setFilters]
  );

  return (  
    <FormControl className={classes.formControl}>
      <Input 
        onChange={changeFilter} 
        endAdornment={<SearchIcon/>}
        disableUnderline={true}
        placeholder="Commencez votre recherche"
        style={{padding:5}}
      />
    </FormControl>
  );
};

SearchFilter.defaultProps = {
  limit: 500,
  sort: { field: 'pair:label', order: 'ASC' }
};

export default SearchFilter;
