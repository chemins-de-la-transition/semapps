import React from 'react';
import { makeStyles, Typography, Grid, Box, Link } from '@material-ui/core';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import Type1Icon from '../../icons/Type1Icon.png';
import Type2Icon from '../../icons/Type2Icon.png';
import Type3Icon from '../../icons/Type3Icon.png';
import Type4Icon from '../../icons/Type4Icon.png';


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
    marginBottom: 15,
    '& img': {
      backgroundColor: "white",
      borderRadius: 100,
      width: 150,
      height: 150,
      paddingRight: 10,
      [theme.breakpoints.down('xs')]: {
        width: 100,
        height: 100,
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100,
    },
  },
}));

const LocalGridItem = ({ title, text, icon, type }) => {
  const classes = useStyles();
  const filters = {'cdlt:hasCourseType':process.env.REACT_APP_MIDDLEWARE_URL+"types/"+type}
  const link = window.location.href +`Course?filter=${encodeURIComponent(JSON.stringify(filters))}`

  return (
    <Grid item sm={6} md={3}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Link href={link} className={classes.iconContainer}>
          <img src={icon} alt="logo"/>
        </Link>
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
          Apprendre en voyageant
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          à son rythme
        </Typography>
        <Grid container spacing={3}>
          <LocalGridItem
            title="Découverte"
            text="Je suis curieux, j’ouvre les yeux sur des métiers liés à la transition qui existent en visitant des lieux inspirants pendant mon voyage"
            icon={Type1Icon}
            type="ecotourisme" 
          />
          <LocalGridItem
            title="Apprenant"
            text="Une pratique m’intéresse, j’ai envie d’en savoir plus. Profitez de ces voyages sur quelques jours pour visiter différents lieux et rencontrer les porteurs de projets"
            icon={Type2Icon}
            type="voyage-apprenant1"
          />
          <LocalGridItem
            title="Immersif"
            text="J’ai envie d’apprendre en participant. Ces voyages sur quelques semaines vous permettront d’experimenter par le faire et de participer à un projet de votre choix"
            icon={Type3Icon}
            type="immersion-longue"
          />
          <LocalGridItem
            title="Compagnonnage"
            text="Je décide de me lancer pour me former à une pratique. Vous serez en immersion longue au sein d’un lieu et suivrez des modules théoriques pour une validation d’acquis."
            icon={Type4Icon}
            type="compagnonnage"
          />
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default CoursesTypes;
