import React from 'react';
import { useMediaQuery, makeStyles, Box, Typography} from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
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
    [theme.breakpoints.down('xs')]:{
      position: 'initial',
      height: '400px',
    },
  },
  welcomeText:{
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  welcomeSubtitleText:{
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    maxWidth: '898px',
    marginLeft: '40px',
    marginRight: '40px',
  },
  welcomeTextBar: {
    width: '51px',
    height: '2px',
    backgroundColor: theme.palette.primary.contrastText,
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  welcomeContainer:{
    zIndex:0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%,rgba(0, 0, 0, 0) 100%),url(\''+process.env.PUBLIC_URL + '/pexels-zen-chung-5529604_1280.jpg\')',
    backgroundClip: 'padding-box',
    backgroundPosition: 'center -40px',
    backgroundRepeat: 'no-repeat',
    height:'539px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]:{
      margin: '0px',
    },
  },
}));

const ReactComment = ({ text }) => {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}/>
}

const Welcome = () => {
  const classes = useStyles();
  const transition = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Box width={1} height={welcomeHeight} position="relative">
      { !transition ? 
        (<>
          <Box width={1} height={0.5} className={classes.background1} top={0}>
          </Box>
          <Box width={1} height={0.5} className={classes.background2} top={welcomeHeight/2}>
          </Box>
          </>
        ) : ''
      }
      <FullWidthBox>
        <Largecontainer className={classes.welcomeContainer}>
          <ReactComment text={'Image : (Free to Use and no attribution required) Zen Chung @pexels' +
              'https://www.pexels.com/photo/anonymous-local-female-farmers-picking-vegetables-during-harvesting-season-in-garden-5529604/'} />
              <Box display="flex" justifyContent="center" flexDirection="column">
                <Typography variant="h1" className={classes.welcomeText}>Apprendre en voyageant</Typography>
                <div className={classes.welcomeTextBar}></div>
                <Typography variant="body1" className={classes.welcomeSubtitleText} component="div">
                  Pour les curieux qui souhaitent découvrir une région et apprendre en voyageant, 
                  nous vous proposons des itinéraires éco-touristiques autour des métiers de la transition, 
                  conçus pour être parcourus à pied ou à vélo. Partez à la rencontre des acteurs de lieux inspirationnels 
                  et découvrez leurs savoirs-faire.
                </Typography>
              </Box>
        </Largecontainer>
      </FullWidthBox>
      { transition ? 
        (<>
          <Box width={1} className={classes.background2}>
          </Box>
         </>
        ) : ''
      }
    </Box>
  );
};

export default Welcome;
