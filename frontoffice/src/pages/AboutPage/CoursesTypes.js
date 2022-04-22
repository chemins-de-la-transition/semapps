import React from 'react';
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import Type1Icon from '../../icons/Type1Icon.png';
import Type2Icon from '../../icons/Type2Icon.png';
import Type3Icon from '../../icons/Type3Icon.png';
import Type4Icon from '../../icons/Type4Icon.png';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    position: 'relative',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: 40,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left'
    },
  },
  title: {
    marginTop: 40,
  },
  subTitle: {
    marginBottom: 40,
  },
  itemTitle: {
    marginBottom: 8
  },
  iconContainer: {
    position: 'relative',
    width: 150,
    height: 150,
    '& img': {
      width: '100%',
      height: 'auto'
    },
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '& [fill]': {
        fill: theme.palette.secondary.contrastText,
      },
      fontSize: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100
    },
  },
}));

const LocalGridItem = ({ title, text, image, icon }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={3}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Box className={classes.iconContainer}>
          <img src={image} alt="" aria-label="icône" />
          {icon}
        </Box>
        <Typography variant="h5" className={classes.itemTitle}>
          {title}
        </Typography>
        <Typography variant="body2" component="div" align="center">
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

const CoursesTypes = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Une aventure unique
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          adaptée à votre niveau de connaissance
        </Typography>
        <Grid container spacing={3}>
          <LocalGridItem
            title="Découverte"
            text="Je suis curieux, j’ouvre les yeux sur des métiers liés à la transition qui existent en visitant des lieux inspirants pendant mon voyage"
            icon={<img src={Type1Icon} alt="découverte" />}
          />
          <LocalGridItem
            title="Apprentissage"
            text="Une pratique m’intéresse, j’ai envie d’en savoir plus. Profitez de ces parcours sur quelques jours pour visiter différents lieux et rencontrer les porteurs de projets"
            icon={<img src={Type2Icon} alt="apprentissage" />}
          />
          <LocalGridItem
            title="Immersion"
            text="J’ai envie d’apprendre en participant. Ces parcours sur quelques semaines vous permettront d’experimenter par le faire et de participer à un projet de votre choix"
            icon={<img src={Type3Icon} alt="immersion" />}
          />
          <LocalGridItem
            title="Compagnonnage"
            text="Je décide de me lancer pour me former à une pratique. Vous serez en immersion longue au sein d’un lieu et suivrez des modules théoriques pour une validation d’acquis."
            icon={<img src={Type4Icon} alt="compagnonnage" />}
          />
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default CoursesTypes;
