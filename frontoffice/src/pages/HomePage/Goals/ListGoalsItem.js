
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listGoals:{
    marginTop: '12px',
    position: 'relative',
    '&:before': {
      content: "'+'",
      position:'absolute',
      left: '-20px',
      fontFamily: theme.typography.h1.fontFamily,
      fontSize: '20px',
      FontWeight: '900',
      fontStyle: 'normal',
    },
  },
}));


const ListGoalsItem = ({ text }) => {
    const classes = useStyles();
    return (
      <Typography variant="body2" component="li" className={classes.listGoals}>
        {text}
      </Typography>
    );
  };

export default ListGoalsItem;