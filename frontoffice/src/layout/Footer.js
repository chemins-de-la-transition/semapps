import React from 'react';
import { IconButton, useMediaQuery, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '../commons/Button';
import { useTranslate } from 'react-admin';

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
  const translate = useTranslate();

  const LinkBloc = () => {
    return (
      <div className={classes.footer2}>
          <div className={classes.footerContent1}>
            <Typography variant="h3" align={xs ? "center" : undefined} className={classes.size}>
            {translate('app.message.footer.usefulLinks')}
            </Typography>
            <Link variant="body2" to="/About" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.about')}
            </Link>
            <Link variant="body2" to={{ pathname: "https://forum.gen-europe.org" }} target="_blank" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.forum')}
            </Link>
            <Link variant="body2" to={{ pathname: "https://gen-europe.org/regenerative-communities-for-all-project-launch/" }} target="_blank" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.website')}
            </Link>
            <Link variant="body2" to="/Page/contact/show" align={xs ? "center" : undefined} className={classes.textLinks}>
              Contact
            </Link>
            <div className={classes.textBar} />
            <Link variant="body2" to="/Page/charte-des-chemins-de-la-transition/show" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.codeOfConduct')}
            </Link>
            <Link variant="body2" to="/Page/mentions-legales/show" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.legalNotice')}
            </Link>
            <Link variant="body2" to="/Page/rgpd/show" align={xs ? "center" : undefined} className={classes.textLinks}>
            {translate('app.message.footer.dataPolicy')} 
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
          {translate('app.message.home.followUs')} 
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
            {translate('app.message.footer.join')}
            </Typography>
            <Typography variant="body2" align={xs ? "center" : undefined}>
            {translate('app.message.footer.joinSubText1')}
            </Typography>
            <Typography variant="body2" align={xs ? "center" : undefined}>
            {translate('app.message.footer.joinSubText2')}
            </Typography>
            <Button to={{ pathname: "https://forum.gen-europe.org"}} target="_blank" variant="contained" color="secondary" component={Link} typographyVariant="button1" className={classes.button}>
            {translate('app.message.footer.joinButton')}  
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
