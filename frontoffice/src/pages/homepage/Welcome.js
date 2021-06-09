import React from 'react';
import { /*useMediaQuery, */makeStyles, Box, Typography} from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const welcomeHeight=600;
const useStyles = makeStyles((theme) =>({
  background1: {
    backgroundColor: theme.palette.primary.contrastText,
    zIndex: '-1',
    position: 'absolute',
  },
  background2: {
    backgroundColor: theme.palette.primary.main,
    zIndex: '-1',
    position: 'absolute',
  },
  welcomeText:{
    color: theme.palette.primary.contrastText,
  },
  welcomeSubtitleText:{
    color: theme.palette.primary.contrastText,
  },
  welcomeContainer:{
    zIndex:0,
    backgroundImage: 'url(\''+process.env.PUBLIC_URL + '/pexels-zen-chung-5529604_1280.jpg\')',
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat'
,   height:'539px',
  },
}));

const ReactComment = ({ text }) => {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}/>
}

const Welcome = ({ theme  }) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Box width={1} height={welcomeHeight} position="relative">
      <Box width={1} height={0.5} className={classes.background1} top={0}>
      </Box>
      <Box width={1} height={0.5} className={classes.background2} top={welcomeHeight/2}>
      </Box>
      <Fullwidthbox>
        <Largecontainer className={classes.welcomeContainer}>
          <ReactComment text={'Image : (Free to Use and no attribution required) Zen Chung @pexels' +
              'https://www.pexels.com/photo/anonymous-local-female-farmers-picking-vegetables-during-harvesting-season-in-garden-5529604/'} />
          <Typography className={classes.welcomeText}>Apprendre en voyageant</Typography>
          <Typography className={classes.welcomeSubtitleText}>
            Pour les curieux qui souhaitent découvrir une région et apprendre en voyageant, 
            nous vous proposons des itinéraires éco-touristiques autour des métiers de la transition, 
            conçus pour être parcourus à pied ou à vélo. Partez à la rencontre des acteurs de lieux inspirationnels 
            et découvrez leurs savoirs-faire.
          </Typography>
        </Largecontainer>
      </Fullwidthbox>
    </Box>
  );
};

export default Welcome;
