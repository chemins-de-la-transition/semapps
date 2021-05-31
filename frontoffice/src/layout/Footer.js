import React from 'react';
import { Container, Box, useMediaQuery, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
  footerLink: {
    color: theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Footer = ({ theme }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Box mb={{ xs: 0, sm: 3 }}>
      <Container maxWidth="lg" disableGutters={xs}>
        <Typography variant="subtitle2" color="secondary" align="right">
          <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
          &nbsp;|&nbsp;
          <Link to="/Contact" className={classes.footerLink}>Nous contacter</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
