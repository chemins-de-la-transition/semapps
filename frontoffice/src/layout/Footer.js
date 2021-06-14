import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';
import FullWidthBox from './FullWidthBox';
import LargeContainer from './LargeContainer';
import {
        Facebook as FacebookIcon,
        Instagram as InstagramIcon, 
        Twitter as TwitterIcon,
        YouTube as YoutubeIcon,
      }  from '@material-ui/icons';

const iconHeight = '33px';
const useStyles = makeStyles((theme) =>({
  footerLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  root: {
    paddingTop: '40px',
  },
  menuLink: {
    textDecoration: 'none'
  },
  iconSize: {
    height: iconHeight,
    width: iconHeight,
  },
}));

const Footer = ({ title }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer disableGutters={xs}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item sm={9}>
            <LogoTitle title={title} mb={'30px'} classes={{ menuLink:classes.menuLink}}></LogoTitle>
            <Typography variant="body2" color="secondary">
              <Link to="/About" className={classes.footerLink}>A propos de nous</Link>
              &nbsp;-&nbsp;
              <Link to="/Contact" className={classes.footerLink}>Contactez-nous</Link>
              &nbsp;-&nbsp;
              <Link to="/Legals" className={classes.footerLink}>Mentions légales</Link>
              &nbsp;-&nbsp;
              <Link to="/RGPD" className={classes.footerLink}>Politique de gestion des données</Link>
              <br />
              <Link to="/SemApps" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</Link>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle1" color="secondary" component="h6" style={{marginBottom:'12px'}}>
                Réseaux sociaux
            </Typography>
            <Typography variant="body1" color="secondary" component="div" style={{marginBottom:'12px'}}>
                Restez informé des dernières actualités de la Trasition en nous suivant sur :
            </Typography>
            <IconButton aria-label="facebook" color="secondary" href="https://www.facebook.com/Les-Chemins-de-la-Transition-103307098592299">
              <FacebookIcon className={classes.iconSize}/>
            </IconButton>
            <IconButton aria-label="instagram" color="secondary" disabled>
              <InstagramIcon className={classes.iconSize}/>
            </IconButton>
            <IconButton  aria-label="twitter" color="secondary" href="https://twitter.com/CdlT_Occitanie">
              <TwitterIcon className={classes.iconSize}/>
            </IconButton>
            <IconButton  aria-label="youtube" color="secondary" disabled>
              <YoutubeIcon className={classes.iconSize}/>
            </IconButton>
          </Grid>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Footer;
