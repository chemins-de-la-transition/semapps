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
  },
  path2: {
    top: 70,
    right: 0,
    position: 'relative',
  },
  agriculture: {
    width: 192,
    left: 1161,
    top: 474,
    position: 'absolute',
  },
  artisanat: {
    width: 192,
    left: 77,
    top: 475,
    position: 'absolute',
  },
  communication: {
    width: 192,
    left: 874,
    top: 707,
    position: 'absolute',
  },
  competences: {
    width: 192,
    left: 448,
    top: 672,
    position: 'absolute',
  },
  culture: {
    width: 192,
    left: 553,
    top: 442,
    position: 'absolute',
  },
  dev: {
    width: 192,
    left: 143,
    top: 797,
    position: 'absolute',
  },
  ecologie: {
    width: 192,
    left: 997,
    top: 313,
    position: 'absolute',
  },
  energie: {
    width: 192,
    left: 673,
    top: 237,
    position: 'absolute',
  },
  gouvernance: {
    width: 192,
    left: 285,
    top: 532,
    position: 'absolute',
  },
  habitat: {
    width: 192,
    left: 1161,
    top: 100,
    position: 'absolute',
  },
  justice: {
    width: 192,
    left: 634,
    top: 838,
    position: 'absolute',
  },
  mobilite: {
    width: 192,
    left: 390,
    top: 311,
    position: 'absolute',
  },
  sante: {
    width: 192,
    left: 92,
    top: 259,
    position: 'absolute',
  },
  science: {
    width: 192,
    left: 794,
    top: 415,
    position: 'absolute',
  },
  person1: {
    top: 180,
    left: 100,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  person2: {
    top: 550,
    left: 1100,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  person3: {
    top: 750,
    left: 420,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      left: 0,
    },
    [theme.breakpoints.down('xs')]: {
      left: -50,
    },
  },
  logos: {
    [theme.breakpoints.down('md')]: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 150px)",
      gridTemplateRows: "repeat(3, 150px)",
      gridGap: "5px",
    },
    [theme.breakpoints.down('sm')]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 150px)",
      gridTemplateRows: "repeat(5, 150px)",
      gridGap: "5px",
    },
    [theme.breakpoints.down('xs')]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 150px)",
      gridTemplateRows: "repeat(7, 150px)",
      gridGap: "5px",
    }
  }
}));

const Illustration = () => {
  const classes = useStyles();
  return (
      <div>
        <Path1 className={classes.path1 + ' ' + classes.hidden} />
        <Path2 className={classes.path2 + ' ' + classes.hidden} />
        <div className={classes.logos}>
          <Category logo={AgricultureAlimentation_PictoCdlT} text="Agriculture & Alimentation" className={classes.agriculture + ' ' + classes.logo}/>
          <Category logo={Artisanat_PictoCdlT} text="Artisanat" className={classes.artisanat + ' ' + classes.logo}/>
          <Category logo={Communication_PictoCdlT} text="Communication" className={classes.communication + ' ' + classes.logo}/>
          <Category logo={Competences_PictoCdlT} text="Education alternative" className={classes.competences + ' ' + classes.logo}/>
          <Category logo={CultureModeVie_PictoCdlT} text="Culture & mode de vie" className={classes.culture + ' ' + classes.logo}/>
          <Category logo={DevTerritorial_PictoCdlT} text="Développement territorial" className={classes.dev + ' ' + classes.logo}/>
          <Category logo={Ecologie_PictoCdlT} text="Ecologie" className={classes.ecologie + ' ' + classes.logo}/>
          <Category logo={Energie_PictoCdlT} text="Energie" className={classes.energie + ' ' + classes.logo}/>
          <Category logo={Gouvernance_PictoCdlT} text="Gouvernance" className={classes.gouvernance + ' ' + classes.logo}/>
          <Category logo={Habitat_PictoCdlT} text="Habitat" className={classes.habitat + ' ' + classes.logo}/>
          <Category logo={JusticeSociale_PictoCdlT} text="Justice sociale" className={classes.justice + ' ' + classes.logo}/>
          <Category logo={Mobilite_PictoCdlT} text="Mobilité" className={classes.mobilite + ' ' + classes.logo}/>
          <Category logo={Sante_Bienetre_PictoCdlT} text="Sante & Bien-Etre" className={classes.sante + ' ' + classes.logo}/>
          <Category logo={ScienceTech_PictoCdlT} text="Sciences & Technologies" className={classes.science + ' ' + classes.logo}/>
        </div>
        <Person1 className={classes.person1 + ' ' + classes.hidden}/>
        <Person2 className={classes.person2 + ' ' + classes.hidden}/>
        <Person3 className={classes.person3 + ' ' + classes.hidden}/>
      </div>
  );
};

export default Illustration;
