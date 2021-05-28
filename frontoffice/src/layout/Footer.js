import React from 'react';
import { Container, Box, useMediaQuery, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  footerLink: {
    color: theme.palette.grey10.main,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Footer = ({ theme }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box mb={{ xs: 0, sm: 3 }}>
      <Container maxWidth="lg" disableGutters={xs}>
        <Typography variant="subtitle2" color="textSecondary" align="right">
          <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
          &nbsp;|&nbsp;
          <Link to="/Contact" className={classes.footerLink}>Nous contacter</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
