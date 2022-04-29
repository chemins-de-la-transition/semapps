import React from 'react';
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import DiscoverIcon from '../../svg/DiscoverIcon';
import FarmerIcon from '../../svg/FarmerIcon';
import IdeaIcon from '../../svg/IdeaIcon';
import EcologyIcon from '../../svg/EcologyIcon';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
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
        <Typography variant="h6" className={classes.itemTitle}>
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
          Apprendre en voyageant
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          à son rythme
        </Typography>
        <Grid container spacing={3}>
          <LocalGridItem
            title="Voyage découverte"
            text="Je suis curieux, j’ouvre les yeux sur des métiers liés à la transition qui existent en visitant des lieux inspirants pendant mon voyage"
            image={process.env.PUBLIC_URL + '/rond1.png'}
            icon={<DiscoverIcon />}
          />
          <LocalGridItem
            title="Voyage Apprenant"
            text="Une pratique m’intéresse, j’ai envie d’en savoir plus. Profitez de ces voyages sur quelques jours pour visiter différents lieux et rencontrer les porteurs de projets"
            image={process.env.PUBLIC_URL + '/rond2.png'}
            icon={<IdeaIcon />}
          />
          <LocalGridItem
            title="Voyage immersif"
            text="J’ai envie d’apprendre en participant. Ces voyages sur quelques semaines vous permettront d’experimenter par le faire et de participer à un projet de votre choix"
            image={process.env.PUBLIC_URL + '/rond3.png'}
            icon={<FarmerIcon />}
          />
          <LocalGridItem
            title="Compagnonnage"
            text="Je décide de me lancer pour me former à une pratique. Vous serez en immersion longue au sein d’un lieu et suivrez des modules théoriques pour une validation d’acquis."
            image={process.env.PUBLIC_URL + '/rond4.png'}
            icon={<EcologyIcon />}
          />
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default CoursesTypes;
