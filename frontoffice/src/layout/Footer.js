import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YoutubeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  links: {
    [theme.breakpoints.down('xs')]: {
      order: 3
    }
  },
  footerLink: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    textDecoration: 'none',
    lineHeight: '28px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  root: {
    paddingTop: '40px',
  },
  logo: {
    height: 77,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20
    },
  },
  socialLinksText: {
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0
    },
  },
  icon: {
    paddingLeft: 0
  },
}));

const Footer = ({ title }) => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer disableGutters={xs}>
        <Grid container className={classes.root}>
          <Grid item sm={9}>
            <img src={process.env.PUBLIC_URL + '/logoCut512.png'} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle1" color="secondary" component="h6" className={classes.socialLinksText}>
              Réseaux sociaux
            </Typography>
            <Typography variant="body1" color="secondary" component="div" className={classes.socialLinksText}>
              Restez informé des dernières actualités de la Transition en nous suivant sur :
            </Typography>
          </Grid>
          <Grid item sm={9} className={classes.links}>
            <Box pt={3} pb={5}>
              <Typography variant="body2" color="secondary">
                <Link to="/Page/qui-sommes-nous/show" className={classes.footerLink}>
                  A propos de nous
                </Link>
                {" "}{" "}-{" "}{" "}
                <Link to="/Page/contact/show" className={classes.footerLink}>
                  Contactez-nous
                </Link>
                {" "}{" "}-{" "}{" "}
                <Link to="/Page/mentions-legales/show" className={classes.footerLink}>
                  Mentions&nbsp;légales
                </Link>
                {" "}{" "}-{" "}{" "}
                <Link to="/Page/rgpd/show" className={classes.footerLink}>
                  Politique de gestion des données
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <IconButton
              aria-label="facebook"
              color="secondary"
              href="https://www.facebook.com/Les-Chemins-de-la-Transition-103307098592299"
              className={classes.icon}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram" color="secondary" disabled>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="twitter" color="secondary" href="https://twitter.com/CdlT_Occitanie">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="youtube" color="secondary" disabled>
              <YoutubeIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Footer;
