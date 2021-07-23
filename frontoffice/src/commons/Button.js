import React from 'react';
import { makeStyles, Button as MuiButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button1: {
    fontFamily: theme.typography.body3.fontFamily,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '14px',
    textTransform: 'uppercase',
  },
  button2: {
    fontFamily: theme.typography.body2.fontFamily,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  outlinedInversed: {},
}));

const Button = ({ variant, children, typographyVariant, ...rest }) => {
  const classes = useStyles();
  const typographyClassName =
    typographyVariant === 'button1' ? classes.button1 : typographyVariant === 'button2' ? classes.button2 : '';
  const typoVar = typographyVariant === 'button1' || typographyVariant === 'button2' ? 'button' : typographyVariant;
  const formattedVar = variant === 'outlinedInversed' ? 'outlined' : variant;
  return (
    <MuiButton variant={formattedVar} {...rest}>
      <Typography variant={typoVar} className={typographyClassName}>
        {children}
      </Typography>
    </MuiButton>
  );
};

export default Button;
