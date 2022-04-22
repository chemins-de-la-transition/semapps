import React from 'react';
import { /*useMediaQuery, */ makeStyles} from '@material-ui/core';
import Path1 from './Path1';
import Path2 from './Path2';
import Category from './Category';
import Person1 from './Person1';
import Person2 from './Person2';
import Person3 from './Person3';

import AgricultureAlimentation_PictoCdlT from "../../../../icons/AgricultureAlimentation_PictoCdlT.png" ;
import Artisanat_PictoCdlT from "../../../../icons/Artisanat_PictoCdlT.png" ;
import Communication_PictoCdlT from "../../../../icons/Communication_PictoCdlT.png" ;
import Competences_PictoCdlT from "../../../../icons/Competences_PictoCdlT.png" ;
import CultureModeVie_PictoCdlT from "../../../../icons/CultureModeVie_PictoCdlT.png" ;
import DevTerritorial_PictoCdlT from "../../../../icons/DevTerritorial_PictoCdlT.png" ;
import Ecologie_PictoCdlT from "../../../../icons/Ecologie_PictoCdlT.png" ;
import Energie_PictoCdlT from "../../../../icons/Energie_PictoCdlT.png" ;
import Gouvernance_PictoCdlT from "../../../../icons/Gouvernance_PictoCdlT.png" ;
import Habitat_PictoCdlT from "../../../../icons/Habitat_PictoCdlT.png" ;
import JusticeSociale_PictoCdlT from "../../../../icons/JusticeSociale_PictoCdlT.png" ;
import Mobilite_PictoCdlT from "../../../../icons/Mobilite_PictoCdlT.png" ;
import Sante_Bienetre_PictoCdlT from "../../../../icons/Sante_Bienetre_PictoCdlT.png" ;
import ScienceTech_PictoCdlT from "../../../../icons/ScienceTech_PictoCdlT.png" ;

const useStyles = makeStyles((theme) => ({
  path1: {
    top: 140,
    right: 0,    
    left: 130,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      width: 0
    },
  },
  path2: {
    top: 70,
    right: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: 0
    },
    [theme.breakpoints.down('md')]: {
      left: 100,
    },
  },
  agriculture: {
    width: 192,
    left: 1161,
    top: 474,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 150,
      left: -50,
    },
  },
  artisanat: {
    width: 192,
    left: 77,
    top: 475,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 150,
      left: 100,
    },
  },
  communication: {
    width: 192,
    left: 874,
    top: 707,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 300,
      left: -50,
    },
  },
  competences: {
    width: 192,
    left: 448,
    top: 672,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 300,
      left: 100,
    },
  },
  culture: {
    width: 192,
    left: 553,
    top: 442,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 450,
      left: -50,
    },
  },
  dev: {
    width: 192,
    left: 143,
    top: 797,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 450,
      left: 100,
    },
  },
  ecologie: {
    width: 192,
    left: 997,
    top: 313,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 600,
      left: -50,
    },
  },
  energie: {
    width: 192,
    left: 673,
    top: 237,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 600,
      left: 100,
    },
  },
  gouvernance: {
    width: 192,
    left: 285,
    top: 532,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 750,
      left: -50,
    },
  },
  habitat: {
    width: 192,
    left: 1161,
    top: 100,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 750,
      left: 100,
    },
  },
  justice: {
    width: 192,
    left: 634,
    top: 838,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 900,
      left: -50,
    },
  },
  mobilite: {
    width: 192,
    left: 390,
    top: 311,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 900,
      left: 100,
    },
  },
  sante: {
    width: 192,
    left: 92,
    top: 259,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 1050,
      left: -50,
    },
  },
  science: {
    width: 192,
    left: 794,
    top: 415,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: 1050,
      left: 100,
    },
  },
  person1: {
    top: 180,
    left: 100,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      width: 0
    },
  },
  person2: {
    top: 550,
    left: 1100,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      width: 0
    },
  },
  person3: {
    top: 750,
    left: 420,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      width: 0
    },
  }
}));

const Illustration = () => {
  const classes = useStyles();
  return (
      <div>
        <Path1 className={classes.path1} />
        <Path2 className={classes.path2} />
        <Category logo={AgricultureAlimentation_PictoCdlT} text="Agriculture & Alimentation" className={classes.agriculture}/>
        <Category logo={Artisanat_PictoCdlT} text="Artisanat" className={classes.artisanat}/>
        <Category logo={Communication_PictoCdlT} text="Communication" className={classes.communication}/>
        <Category logo={Competences_PictoCdlT} text="Education alternative" className={classes.competences}/>
        <Category logo={CultureModeVie_PictoCdlT} text="Culture & mode de vie" className={classes.culture}/>
        <Category logo={DevTerritorial_PictoCdlT} text="Développement territorial" className={classes.dev}/>
        <Category logo={Ecologie_PictoCdlT} text="Ecologie" className={classes.ecologie}/>
        <Category logo={Energie_PictoCdlT} text="Energie" className={classes.energie}/>
        <Category logo={Gouvernance_PictoCdlT} text="Gouvernance" className={classes.gouvernance}/>
        <Category logo={Habitat_PictoCdlT} text="Habitat" className={classes.habitat}/>
        <Category logo={JusticeSociale_PictoCdlT} text="Justice sociale" className={classes.justice}/>
        <Category logo={Mobilite_PictoCdlT} text="Mobilité" className={classes.mobilite}/>
        <Category logo={Sante_Bienetre_PictoCdlT} text="Sante & Bien-Etre" className={classes.sante}/>
        <Category logo={ScienceTech_PictoCdlT} text="Sciences & Technologies" className={classes.science}/>
        <Person1 className={classes.person1}/>
        <Person2 className={classes.person2}/>
        <Person3 className={classes.person3}/>
      </div>
  );
};

export default Illustration;
