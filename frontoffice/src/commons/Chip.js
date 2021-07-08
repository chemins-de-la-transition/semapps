import * as React from 'react';
import { Chip as MuiChip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'unset',
  },
  icon: {
    width: 14,
    height: 14,
    marginLeft: 0,
    marginRight: 2,
  },
  label: {
    '& span': {
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },
}));

const Chip = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      <MuiChip size="small" label={children} classes={classes} {...rest} />
    </div>
  );
};

export default Chip;
