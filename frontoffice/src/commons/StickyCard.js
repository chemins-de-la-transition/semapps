import React from 'react';
import StickyBox from 'react-sticky-box';
import { useRecordContext, TextField } from 'react-admin';
import { makeStyles, Box, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: '1.2em',
    lineHeight: 1.15,
  },
  block: (props) => {
    let backgroundColor = theme.palette.primary.main;
    if (props.variant === 'organization') {
      backgroundColor = theme.palette.theme_5.main;
    }
    return ({
      backgroundColor:backgroundColor,
      color: theme.palette.primary.contrastText
    })
  },
  button: (props) => {
    let backgroundColor = theme.palette.primary.main;
    if (props.variant === 'organization') {
      backgroundColor = theme.palette.theme_5.main;
    }
    return ({
      backgroundColor:backgroundColor,
      textAlign: 'center'
    })
  },
}));

const StickyCard = ({ children, actionButton, variant }) => {
  const classes = useStyles({variant});
  const record = useRecordContext();
  return (
    <StickyBox offsetTop={168} className={classes.root}>
      <Card>
        <Box p={2}>
          <TextField record={record} source="pair:label" variant="h6" className={classes.title} />
        </Box>
        <Box className={classes.block} p={2}>
          {children}
        </Box>
        <Box className={classes.button} pb={3} pr={2} pl={2}>
          {actionButton && React.cloneElement(actionButton)}
        </Box>
      </Card>
    </StickyBox>
  );
};

export default StickyCard;
