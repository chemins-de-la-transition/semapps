import React from 'react';
import { makeStyles, Typography, Grid, Box} from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';
import DiscoverIcon from '../../svg/Discover';
import FarmerIcon from '../../svg/FarmerIcon';
import IdeaIcon from '../../svg/IdeaIcon';
import EcologyIcon from '../../svg/EcologyIcon';

const useStyles = makeStyles((theme) =>({
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
    paddingBottom: '40px',
  },
  title:{
    marginTop: '40px',
  },
  subTitle: {
    marginBottom: '40px',
  },
  itemTitle:{
    marginBottom: '8px',
    // fontSize: '10px',
    // lineHeight: '12px',
  },
  iconContainer:{
    position: 'relative',
    '& svg':{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '& [fill]':{
        fill: theme.palette.secondary.contrastText,
      }
    }
  }
}));

const LocalGridItem = ({title, text, image,icon}) => {
  const classes = useStyles();
  return (
    <Grid item sm={3} className={classes.item}>
      <Box className={classes.iconContainer}>
        <img src={image} alt="" aria-label="icône"></img>
        {icon}
      </Box>
      <Typography variant="h6" className={classes.itemTitle}>
        {title}
      </Typography>
      <Typography variant="body2" component="div">
        {text}
      </Typography>
    </Grid>
  );
};

const CoursesTypes = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Apprendre en voyageant
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          à son rythme
        </Typography>
        <Grid container spacing={3}>
          <LocalGridItem 
            title='Voyage découverte'
            text='Je suis curieux, j’ouvre les yeux sur des métiers liés à la transition qui existent en visitant des lieux inspirants pendant mon voyage'
            image={process.env.PUBLIC_URL + '/rond1.png'}
            icon={<DiscoverIcon></DiscoverIcon>}
          />
          <LocalGridItem 
            title='Voyage Apprenant'
            text='Une pratique m’intéresse, j’ai envie d’en savoir plus. Profitez de ces parcours sur quelques jours pour visiter différents lieux et rencontrer les porteurs de projets'
            image={process.env.PUBLIC_URL + '/rond2.png'}
            icon={<IdeaIcon></IdeaIcon>}
          />
          <LocalGridItem 
            title='Voyage immersif'
            text='J’ai envie d’apprendre en participant. Ces parcours sur quelques semaines vous permettront d’experimenter par le faire et de participer à un projet de votre choix'
            image={process.env.PUBLIC_URL + '/rond3.png'}
            icon={<FarmerIcon></FarmerIcon>}  
          />
          <LocalGridItem 
            title='Compagnonnage'
            text='Je décide de me lancer pour me former à une pratique. Vous serez en immersion longue au sein d’un lieu et suivrez des modules théoriques pour une validation d’acquis.'
            image={process.env.PUBLIC_URL + '/rond4.png'}
            icon={<EcologyIcon></EcologyIcon>}  
          />
        </Grid>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default CoursesTypes;
