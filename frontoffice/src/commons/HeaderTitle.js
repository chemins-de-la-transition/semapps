import React from 'react';
import { Link } from 'react-admin';
import { makeStyles, Typography, Box, Grid } from '@material-ui/core';
import FullWidthBox from './FullWidthBox';
import LargeContainer from './LargeContainer';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  title: {
    lineHeight: 1.15,
  },
  button: {
    marginRight: 10,
  },
}));

const HeaderTitle = ({ children, actions }) => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Box pt={3} pb={3}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="h1" className={classes.title} id="react-admin-title">
                {children}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="right">
                {actions &&
                  actions.map((action, i) =>
                    React.cloneElement(action, {
                      key: i,
                      component: Link,
                      variant: 'contained',
                      color: 'primary',
                      typographyVariant: 'button1',
                      className: classes.button,
                    })
                  )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderTitle;
