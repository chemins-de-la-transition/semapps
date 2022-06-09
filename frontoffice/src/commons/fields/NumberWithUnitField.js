import React from 'react';
import { NumberField } from 'react-admin';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  numberWithUnitField: (props) => ({
    color: theme.palette[props.color]
      ? theme.palette[props.color].main
      : null
  })
}));

const NumberWithUnitField = ({ source, unit, variant, color, component, ...rest }) => {
  const classes = useStyles({color});
  return (
    <Box className={classes.numberWithUnitField}>
      <Typography variant={variant} color={color} component={component}>
        <NumberField source={source} />&nbsp;<span>{unit}</span>
      </Typography>
    </Box>
  )
}

NumberWithUnitField.defaultProps = {
  variant: "body2",
  color: "primary",
  component: "span",
};

export default NumberWithUnitField;
