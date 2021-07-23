import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import SearchContent from './SearchContent';

const useStyles = makeStyles((theme) => ({
  box: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeText: {
    color: theme.palette.white.main,
    textAlign: 'center',
    fontSize: 48,
  },
  welcomeSubtitleText: {
    color: theme.palette.white.main,
    textAlign: 'center',
    maxWidth: '898px',
    marginLeft: '40px',
    marginRight: '40px',
    fontWeight: 'bold',
  },
  welcomeTextBar: {
    width: '51px',
    height: '2px',
    backgroundColor: theme.palette.white.main,
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  welcomeContainer: {
    zIndex: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%,rgba(0, 0, 0, 0) 100%),url('" +
      process.env.PUBLIC_URL +
      "/pexels-zen-chung-5529604_1280.jpg')",
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    height: '539px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
      height: '400px',
    },
  },
}));

const ReactComment = ({ text }) => {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
};

const WelcomeContent = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.box}>
      <LargeContainer className={classes.welcomeContainer}>
        <ReactComment
          text={
            'Image : (Free to Use and no attribution required) Zen Chung @pexels' +
            'https://www.pexels.com/photo/anonymous-local-female-farmers-picking-vegetables-during-harvesting-season-in-garden-5529604/'
          }
        />
        <Box display="flex" justifyContent="center" flexDirection="column" justifySelf="center">
          <Typography variant="h1" className={classes.welcomeText}>
            Apprendre en voyageant
          </Typography>
          <div className={classes.welcomeTextBar} />
          <Typography variant="body1" className={classes.welcomeSubtitleText} component="div">
            Pour les curieux qui souhaitent découvrir une région et apprendre en voyageant, nous vous proposons des
            itinéraires éco-touristiques autour des métiers de la transition, conçus pour être parcourus à pied ou à
            vélo. Partez à la rencontre des acteurs de lieux inspirationnels et découvrez leurs savoirs-faire.
          </Typography>
        </Box>
      </LargeContainer>
      <SearchContent />
    </FullWidthBox>
  );
};

export default WelcomeContent;
