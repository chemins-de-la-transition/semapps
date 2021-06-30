import React from 'react';
import { /*useMediaQuery, */makeStyles, Grid, Typography } from '@material-ui/core';
import FullWidthBox from '../../../layout/FullWidthBox';
import LargeContainer from '../../../layout/LargeContainer';
import TwoHandsIcon  from '../../../svg/TwoHandsIcon' ;
import WalkerIcon  from '../../../svg/WalkerIcon' ;
import StarIcon  from '../../../svg/StarIcon' ;
import ListGoalsItem from './ListGoalsItem';
import Top1Shape from './BackgoundShapes/Top1Shape';
import Top2Shape from './BackgoundShapes/Top2Shape';
import Bottom1Shape from './BackgoundShapes/Bottom1Shape';
import Bottom2Shape from './BackgoundShapes/Bottom2Shape';
import LeftShape from './BackgoundShapes/LeftShape';
import SnakeShape from './BackgoundShapes/SnakeShape';

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
      fill: theme.palette.theme_3.main,
    },
  },
  rightTop2: {
    top: 0,
    right: 45,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_4.main,
    },
  },
  leftShape: {
    top: '30%',
    left: '-5px',
    position: 'absolute',
    '& path[stroke]': {
      stroke: theme.palette.theme_3.main,
    },
  },
  snakeShape: {
    top: '30%',
    left: '19%',
    position: 'absolute',
    // '& path[stroke]': {
    //   stroke: theme.palette.theme_3.main,
    // },
  },
  leftBottom1: {
    bottom: -187,
    left: 0,
    position: 'absolute',
    '& path[fill]': {
      fill: theme.palette.theme_1.main,
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
  goalsFirstImage:{
    objectFit: 'cover',
    objectPosition: 'center',
  },
  goalsFirstImageContainer :{
    marginTop: '165px',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
      height: '80%',
    },
  },
  goalsSecondText: {
    marginTop: '200px',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  mb24:{
    marginBottom: '24px',
  },
  mb40:{
    marginBottom: '40px',
  },
  mt65:{
    marginTop: '65px',
  },
  iconWhite :{
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
    padding : '0',
  },
  alignSelfFlexEnd: {
    alignSelf:'flex-end',
  },
  goalsThirdText: {
    // marginTop: '100px',
    alignSelf:'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  goalsFourthText: {
    alignSelf:'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  goalsSecondImage:{
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
  },
}));

const Goals = () => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox  className={classes.mainBox}>
      {/* shapes in the background */}
      <Top1Shape className={classes.rightTop1}/>
      <Top2Shape className={classes.rightTop2}/>
      <LeftShape className={classes.leftShape}/>
      <SnakeShape className={classes.snakeShape}/>
      <Bottom1Shape className={classes.leftBottom1}/>
      <Bottom2Shape className={classes.leftBottom2}/>
      <LargeContainer className={classes.frontBox}>
        <Grid container spacing={3}>
          <Grid item sm={4} className={classes.mt65}>
            <Typography variant="h2">
              Notre objectif
            </Typography>
            <Typography variant="h3" component="div" className={classes.mtb40}>
              Vous permettre d'apprendre en voyageant
            </Typography>
            <Typography variant="body2" >
            Les Chemins de la Transition c’est avant tout une envie de relier et connecter les acteurs de la transition, 
            mais aussi de transmettre pour voir se multiplier les initiatives. 
            Agissons ensemble pour participer à la découverte, la formation et la mise en réseau des personnes souhaitant 
            s’engager dans la Transition afin que le rêve de voir éclore, mûrir et s’entrelacer des mondes solidaires et 
            écologiques s’enracine dans notre réalité.
            </Typography>
          </Grid>
          <Grid item sm={1} className={classes.noPadding}>
          </Grid>
          <Grid item sm={4} className={classes.goalsFirstImageContainer}>
            <img src={process.env.PUBLIC_URL + '/pexels-gary-barnes-6231809.jpg'} width="100%" className={classes.goalsFirstImage} alt="illustration de deux agricultrices qui rient"/>
            <span dangerouslySetInnerHTML={{ __html: `<!-- Image : (Free to Use and no attribution required) Gary Barnes @pexels https://www.pexels.com/photo/happy-multiethnic-female-friends-sitting-on-green-field-in-countryside-6231809/-->` }}/>
          </Grid>
          <Grid item sm={3} className={classes.goalsSecondText}>
            <TwoHandsIcon className={classes.mb24 + ' ' + classes.iconWhite} />
            <Typography variant="h5" component="div" className={classes.mb24}>
              Mailler les territoires & Valoriser les initiatives existantes
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={"Promouvoir et dynamiser l’attractivité des zones rurales grâce à une nouvelle dynamique de tourisme."}></ListGoalsItem>
              <ListGoalsItem text={"Référencer les lieux inspirationnels et les initiatives qui contribuent à la transition (écologique, énergétique, social, culturelle, économique,...)"}></ListGoalsItem>
              <ListGoalsItem text={"Interconnecter les acteurs de la transition et leur donner de la visibilité. Créer des synergies inter-projets / inter-territoires"}></ListGoalsItem>
              <ListGoalsItem text={"Accélérer des projets grâce à l’aide apportée par les voyageurs"}></ListGoalsItem>
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4} className={classes.alignSelfFlexEnd}>
            <img src={process.env.PUBLIC_URL + '/travel_sport_bike_cycling_bicycle_touring_pier_lake_water-685024.jpg'} className={classes.goalsSecondImage} alt="cycliste en randonnée"/>
            <span dangerouslySetInnerHTML={{ __html: `<!-- Image : Creative Commons 0 https://pxhere.com/fr/photo/685024/-->` }}/>
          </Grid>
          <Grid item sm={3} className={classes.goalsThirdText}>
            <WalkerIcon className={classes.mb24 + ' ' + classes.iconWhite}/>
            <Typography variant="h5" component="div" className={classes.mb24}>
              Voyager en apprenant , se&nbsp;former aux&nbsp;enjeux et métiers de la&nbsp;transition
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={"Des parcours immersifs thématiques pour accéder facilement aux pratiques émergentes dans tous les domaines de la transition."}></ListGoalsItem>
              <ListGoalsItem text={"Des parcours avec plusieurs niveaux de découverte et d’apprentissage en faisant."}></ListGoalsItem>
              <ListGoalsItem text={"Liberté de créer ses propres chemins selon ses centres d’intérêts, ses disponibilités, le degré recherché d’apprentissage (découvrir, apprendre par le faire, se former aux métiers)."}></ListGoalsItem>
              <ListGoalsItem text={"Permettre la découverte, l’apprentissage des métiers de la transition au contact d’acteurs passionnés et engagés."}></ListGoalsItem>
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={5} className={classes.alignSelfFlexEnd +' '+ classes.noPadding}>
          </Grid>
          <Grid item sm={3} className={classes.goalsFourthText}>
            <StarIcon className={classes.mb24 + ' ' + classes.iconWhite}/>
            <Typography variant="h5" component="div" className={classes.mb24}>
              Le voyageur comme pollinisateur de nouvelles pratiques
            </Typography>
            <ul className={classes.ulStyle}>
              <ListGoalsItem text={"Contribuer à l’essaimage de projets à fort impact local et faire grandir l’écosystème de la transition."}></ListGoalsItem>
              <ListGoalsItem text={"Stimuler l’émergence de nouvelles initiatives"}></ListGoalsItem>
              <ListGoalsItem text={"Créer du lien grâce un espace d’échange et de partage d’informations, d’idées, de projets. "}></ListGoalsItem>
              <ListGoalsItem text={"Amplifier la transition écologique, par l’implication des citoyens dans la mise en œuvre des actions de transition"}></ListGoalsItem>
              <ListGoalsItem text={"Accroître la résilience du territoire grâce au développement de solutions locales."}></ListGoalsItem>
            </ul>
          </Grid>
          <Grid item sm={4} className={classes.alignSelfFlexEnd}>
            <img src={process.env.PUBLIC_URL + '/pexels-gary-barnes-6231809.jpg'} width="100%" className={classes.goalsFirstImage} alt="illustration de deux agricultrices qui rient"/>
            <span dangerouslySetInnerHTML={{ __html: `<!-- Image : (Free to Use and no attribution required) Gary Barnes @pexels https://www.pexels.com/photo/happy-multiethnic-female-friends-sitting-on-green-field-in-countryside-6231809/-->` }}/>
          </Grid>
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Goals;
