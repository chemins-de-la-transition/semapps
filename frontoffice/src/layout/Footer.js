import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';
import Fullwidthbox from './Fullwidthbox';
import Largecontainer from './Largecontainer';
import {
        Facebook as FacebookIcon,
        Instagram as InstagramIcon, 
        Twitter as TwitterIcon,
        YouTube as YoutubeIcon,
      }  from '@material-ui/icons';

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
    <Fullwidthbox mb={{ xs: 0, sm: 3 }} className={classes.background}>
      <Largecontainer disableGutters={xs}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item sm={9}>
            <LogoTitle title={title} classes={classes}></LogoTitle>
            <Typography variant="subtitle2" color="secondary">
              <Link to="/About" className={classes.footerLink}>A propos de nous</Link>
              &nbsp;-&nbsp;
              <Link to="/Contact" className={classes.footerLink}>Contactez-nous</Link>
              &nbsp;-&nbsp;
              <Link to="/Legals" className={classes.footerLink}>Mentions légales</Link>
              &nbsp;-&nbsp;
              <Link to="/Legals" className={classes.footerLink}>Mentions légales</Link>
              &nbsp;-&nbsp;
              <br />
              <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="h6" color="secondary">
                Réseaux sociaux
            </Typography>
            <Typography variant="subtitle1" color="secondary">
                Restez informé des dernières actualités de la Trasition en nous suivant sur :
            </Typography>
            <br />
            <IconButton aria-label="facebook" color="secondary" href="https://www.facebook.com/Les-Chemins-de-la-Transition-103307098592299">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="instagram" color="secondary" disabled>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="twitter" color="secondary" href="https://twitter.com/CdlT_Occitanie">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="youtube" color="secondary" disabled>
              <YoutubeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default Footer;
