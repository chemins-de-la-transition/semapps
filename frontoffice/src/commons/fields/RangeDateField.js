import React from 'react';
import { DateField } from 'react-admin';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rangeDateField: (props) => ({
    color: theme.palette[props.color]
      ? theme.palette[props.color].main
      : null
  })
}));

const RangeDateField = ({ source, toSource, variant, color, component, ...rest }) => {
  const classes = useStyles({color});
  return (
    <Box className={classes.rangeDateField}>
      <Typography variant={variant} color={color} component={component}>
        <span>du</span>&nbsp;<DateField source="pair:startDate" />
        <span>au</span>&nbsp;<DateField source="pair:endDate" />
      </Typography>
    </Box>
  )
}

RangeDateField.defaultProps = {
  variant: "body2",
  color: "primary",
  component: "span",
};

export default RangeDateField;
