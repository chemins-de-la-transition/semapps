import React, { useCallback, useEffect } from 'react';
import { useListFilterContext } from 'react-admin';
import { FormControl, makeStyles, Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import throttle from 'lodash.throttle';

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
  const textInput = React.useRef(null);

  const changeFilter = useCallback(
    throttle((keyword) => {
      keyword.target && setFilters({ ...filterValues, q: keyword.target.value }, null, false) ;
    }, 500),
    [filterValues, setFilters]
  );

  useEffect(() => {
    if (!filterValues.q) {textInput.current.value=""}
  }, [filterValues]);
  
  return (  
    <FormControl className={classes.formControl}>
      <Input 
        onChange={changeFilter} 
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

export default React.forwardRef(SearchFilter);;
