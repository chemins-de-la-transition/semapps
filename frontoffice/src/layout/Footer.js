import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '../commons/Button';

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  bloc: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  logo: {
    width: 150,
    height: 125,
    top: 40,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '40%',
      height: '40%',
    },
  },
  socialNetworks: {
    marginTop: 80,
  },
  icon: {
    padding: 8,
  },
  footerContent1: {
    padding: 40,
    display: 'grid',
    gridGap: '1em',
  },
  textLinks:{
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.palette.theme_5.contrastText,
  },
  textBar: {
    width: 246,
    height: 1,
    backgroundColor: theme.palette.white.main,
    marginTop: 30,
    [theme.breakpoints.down('xs')]: {
      placeSelf: 'center',
    },
  },
  button: {
    marginTop: 40,
    width: 215,
    [theme.breakpoints.down('xs')]: {
      placeSelf: 'center',
    },
  },
  size: {
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  footer1: {
    backgroundColor: 'white',
    width: '100%',
  },
  footer2: {
    backgroundColor: theme.palette.theme_5.main, 
    color: theme.palette.theme_5.contrastText,
    width: '100%',
  },
  footer3: {
    backgroundColor: theme.palette.secondary.main, 
    color: theme.palette.secondary.contrastText,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 50,
    },
  }
}));



const Footer = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const LinkBloc = () => {
    return (
      <div className={classes.footer2}>
          <div className={classes.footerContent1}>
            <Typography variant="h3" align={xs ? "center" : undefined} className={classes.size}>
              Liens utiles
            </Typography>
            <Link variant="body2" to="/About" align={xs ? "center" : undefined} className={classes.textLinks}>
              A propos
            </Link>
            <Link variant="body2" to={{ pathname: "https://forums.lescheminsdelatransition.org/" }} target="_blank" align={xs ? "center" : undefined} className={classes.textLinks}>
              Notre forum
            </Link>
            <Link variant="body2" to={{ pathname: "https://projet.lescheminsdelatransition.org/" }} target="_blank" align={xs ? "center" : undefined} className={classes.textLinks}>
              Notre site web
            </Link>
            <Link variant="body2" to="/Page/contact/show" align={xs ? "center" : undefined} className={classes.textLinks}>
              Contact
            </Link>
            <div className={classes.textBar} />
            <Link variant="body2" to="/Page/charte-des-chemins-de-la-transition/show" align={xs ? "center" : undefined} className={classes.textLinks}>
              Charte des chemins de la transition
            </Link>
            <Link variant="body2" to="/Page/mentions-legales/show" align={xs ? "center" : undefined} className={classes.textLinks}>
              Mentions légales
            </Link>
            <Link variant="body2" to="/Page/rgpd/show" align={xs ? "center" : undefined} className={classes.textLinks}>
              Politique de gestion des données
            </Link>
          </div>
        </div>
    )
  }

  const FollowBloc = () => {
    return (
      <div className={classes.footer1}>
          <Typography align={"center"}>
            <img src={process.env.PUBLIC_URL + '/logoCut512.png'} alt="logo" className={classes.logo} />
          </Typography>
          <div className={classes.socialNetworks}>
          <Typography variant="h3" color="secondary" component="h3" align={"center"} className={classes.size}>
            Suivez-nous
          </Typography>
          <Typography align={"center"}>
              <IconButton
                aria-label="facebook"
                target="_blank" 
                color="secondary"
                href="https://www.facebook.com/groups/lescheminsdelatransition"
                className={classes.icon}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="twitter" target="_blank" color="secondary" href="https://twitter.com/CDLTransition" className={classes.icon}>
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="linkedin" target="_blank" color="secondary" href="https://www.linkedin.com/company/les-chemins-de-la-transition/" className={classes.icon}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="facebook"
                color="secondary"
                target="_blank"
                href="https://www.facebook.com/CdlTOccitanie"
                className={classes.icon}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
          </Typography>
          </div>
        </div>
    )
  }

  const JoinBloc = () => {
    return (
      <div className={classes.footer3}>
          <div className={classes.footerContent1}>
            <Typography variant="h3" align={xs ? "center" : undefined} className={classes.size}>
              Rejoindre la communauté
            </Typography>
            <Typography variant="body2" align={xs ? "center" : undefined}>
              Vous avez envie de partager vos connaissances en matière de transition et pourquoi pas accueillir des voyageurs le temps d’une visite ou plus pour les former?
            </Typography>
            <Typography variant="body2" align={xs ? "center" : undefined}>
              Vous avez envie d’inscrire votre lieu ou un évènement sur notre plateforme afin de lui donner de la visibilité?
            </Typography>
            <Button to={{ pathname: "https://forums.lescheminsdelatransition.org/"}} target="_blank" variant="contained" color="secondary" component={Link} typographyVariant="button1" className={classes.button}>
              Je me lance
            </Button>
          </div>
        </div>
    )
  }

  return (
    <div className={classes.bloc}>
      <FollowBloc/>
      <LinkBloc/>     
      <JoinBloc/>  
    </div>
  );
};

export default Footer;
