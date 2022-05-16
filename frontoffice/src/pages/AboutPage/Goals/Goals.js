import React from 'react';
import { /*useMediaQuery, */ makeStyles, Grid, Typography, Hidden} from '@material-ui/core';
import FullWidthBox from '../../../commons/FullWidthBox';
import LargeContainer from '../../../commons/LargeContainer';
import TwoHandsIcon from '../../../svg/TwoHandsIcon';
import WalkerIcon from '../../../svg/WalkerIcon';
import StarIcon from '../../../svg/StarIcon';
import ListGoalsItem from './ListGoalsItem';
import Top1Shape from './BackgroundShapes/Top1Shape';
import Top2Shape from './BackgroundShapes/Top2Shape';
import Bottom1Shape from './BackgroundShapes/Bottom1Shape';
import Bottom2Shape from './BackgroundShapes/Bottom2Shape';
import LeftShape from './BackgroundShapes/LeftShape';
import SnakeShape from './BackgroundShapes/SnakeShape';
import GoalsImage1 from '../../../icons/GoalsImage1.png';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '70px',
  },
  frontBox: {
    zIndex: '0',
  },
  rightTop1: {
    top: -90,
    right: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_8.main,
    },
  },
  rightTop2: {
    top: 0,
    right: 45,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_5.main,
    },
  },
  leftShape: {
    top: '30%',
    left: '-5px',
    position: 'absolute',
    '& path[stroke]': {
      stroke: theme.palette.theme_5.main,
    },
  },
  snakeShape: {
    top: '30%',
    left: '19%',
    position: 'absolute',
    '& path[stroke]': {
      stroke: theme.palette.primary.main,
    },
  },
  leftBottom1: {
    bottom: -187,
    left: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.primary.main,
    },
  },
  leftBottom2: {
    bottom: -55,
    left: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_2.main,
    },
  },
  firstImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  firstImageContainer: {
    marginTop: '165px',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
      width: '100%'
    },
  },
  secondText: {
    marginTop: '200px',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
    },
  },
  secondImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  secondImageContainer: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      width: '100%'
    },
  },
  thirdText: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '0px',
    },
  },
  thirdImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    [theme.breakpoints.down(600)]: {
      maxHeight: 275,
    }
  },
  thirdImageContainer: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down(600)]: {
      width: '100%',
      order: -1
    }
  },
  fourthText: {
    alignSelf: 'flex-end'
  },
  mb24: {
    marginBottom: '24px',
  },
  mtb40: {
    marginBottom: '40px',
  },
  mt65: {
    marginTop: '65px',
  },
  iconWhite: {
    fontSize: '3rem',
    '& path[fill]': {
      fill: theme.palette.secondary.contrastText,
    },
    '& path[stroke]': {
      stroke: theme.palette.secondary.contrastText,
    },
  },
  ulStyle: {
    paddingLeft: '22px',
    listStyle: 'none',
  },
  noPadding: {
    padding: '0',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  }
}));

const Goals = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.mainBox}>
      {/* shapes in the background */}
      <Top1Shape className={classes.rightTop1} />
      <Top2Shape className={classes.rightTop2} />
      <LeftShape className={classes.leftShape} />
      <SnakeShape className={classes.snakeShape} />
      <Bottom1Shape className={classes.leftBottom1} />
      <Bottom2Shape className={classes.leftBottom2} />
      <LargeContainer className={classes.frontBox}>
        <Grid container spacing={3}>
          <Grid item sm={8} md={4} className={classes.mt65}>
            <Typography variant="h2">Notre objectif</Typography>
            <Typography variant="h3" component="div" className={classes.mtb40}>
              Vous permettre d'apprendre en voyageant
            </Typography>
            <Typography variant="body2">
              Les Chemins de la Transition c’est avant tout une envie de relier et connecter les acteurs de la
              transition, mais aussi de transmettre pour voir se multiplier les initiatives. Agissons ensemble pour
              participer à la découverte, la formation et la mise en réseau des personnes souhaitant s’engager dans la
              Transition afin que le rêve de voir éclore, mûrir et s’entrelacer des mondes solidaires et écologiques
              s’enracine dans notre réalité.
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4} md={1} className={classes.noPadding} />
          </Hidden>
          <Grid item sm={4} className={classes.firstImageContainer}>
            <img
              src={GoalsImage1}
              className={classes.firstImage}
              alt="illustration objectif 1"
            />
          </Grid>
          <Grid item sm={6} md={3} className={classes.secondText}>
            <TwoHandsIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
              Mailler les territoires & Valoriser les initiatives existantes
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text="Référencer les lieux inspirationnels et les initiatives ouvertes à la transmission qui contribuent à la transition (écologique, énergétique, sociale, culturelle, économique...)." />
              <ListGoalsItem text="Promouvoir et dynamiser l'attractivité des zones rurales grâce à une nouvelle dynamique de flux axés sur la découverte des acteurs de transition locaux." />
              <ListGoalsItem text="Interconnecter les acteurs de la transition et leur donner de la visibilité. Créer des synergies inter-projets / inter-territoires." />
              <ListGoalsItem text="Accélérer des projets grâce à l’aide apportée par les voyageurs." />
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4} className={classes.secondImageContainer}>
            <img
              src={process.env.PUBLIC_URL + '/images/goal2.jpg'}
              className={classes.secondImage}
              alt="objectif 2"
            />
          </Grid>
          <Grid item sm={6} md={4} lg={3} className={classes.thirdText}>
            <WalkerIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
              Voyager en apprenant, se&nbsp;former aux&nbsp;enjeux et métiers de la&nbsp;transition
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text="Des parcours immersifs thématiques pour accéder facilement aux pratiques émergentes dans tous les domaines de la transition." />
              <ListGoalsItem text="Des parcours avec plusieurs niveaux de découverte et d’apprentissage en faisant." />
              <ListGoalsItem text="La liberté de créer ses propres chemins selon ses centres d’intérêts, ses disponibilités, le degré recherché d’apprentissage (découvrir, apprendre par le faire, se former aux métiers)." />
              <ListGoalsItem text="Permettre la découverte, l’apprentissage des métiers de la transition au contact d’acteurs passionnés et engagés." />
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Hidden xsDown>
            <Grid item sm={1} md={5} className={classes.alignSelfFlexEnd + ' ' + classes.noPadding} />
          </Hidden>
          <Grid item sm={6} md={3} className={classes.fourthText}>
            <StarIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
              Le voyageur comme pollinisateur de nouvelles pratiques
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text="Contribuer à l’essaimage de projets à fort impact local et faire grandir l’écosystème de la transition." />
              <ListGoalsItem text="Stimuler l’émergence de nouvelles initiatives." />
              <ListGoalsItem text="Créer du lien grâce à un espace d’échange et de partage d’informations, d’idées, de projets." />
              <ListGoalsItem text="Amplifier la transition socio-écologique, par l’implication des citoyens dans la mise en œuvre des actions de transition." />
              <ListGoalsItem text="Accroître la résilience du territoire grâce au développement de solutions locales." />
            </ul>
          </Grid>
          <Grid item sm={4} className={classes.thirdImageContainer}>
            <img
              src={process.env.PUBLIC_URL + '/images/goal3.jpg'}
              className={classes.thirdImage}
              alt="objectif 3"
            />
          </Grid>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Goals;