import React from 'react';
import { Container, Box, useMediaQuery, makeStyles, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';

const useStyles = makeStyles((theme) =>({
  footerLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  menuLink: {
    textDecoration: 'none'
  },
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const Footer = ({ title , theme }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Box mb={{ xs: 0, sm: 3 }} className={classes.background}>
      <Container maxWidth="lg" disableGutters={xs}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={9}>
            <LogoTitle title={title} classes={classes}></LogoTitle>
            <Typography variant="subtitle2" color="secondary">
              <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
              &nbsp;|&nbsp;
              <Link to="/Contact" className={classes.footerLink}>Nous contacter</Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" color="secondary">
                Réseaux sociaux
            </Typography>
            <Typography variant="subtitle2" color="secondary">
                Restez informé des dernières actualités de la Trasition en nous suivant sur :
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
