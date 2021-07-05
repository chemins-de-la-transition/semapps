import React from 'react';
import LargeContainer from '../layout/LargeContainer';
import FullWidthBox from '../layout/FullWidthBox';
import { Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    text: {
        '& .MuiTypography-root':{
            marginBottom: '20px',
            lineHeight: '1_px',
        },
    },
    whiteBackground:{
        backgroundColor: theme.palette.white.main,
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <FullWidthBox className={classes.whiteBackground}>
            <LargeContainer className={classes.text}>
                <Typography variant="h2">Qui sommes-nous ?</Typography>
                <Typography variant="body1" component="div">
                    Les <a href="https://lescheminsdelatransition.org/">Chemins de la Transition</a> une association loi 1901, 
                    sont à l'origine d'un écosystème composé d'une vingtaine 
                    de <a href="https://lescheminsdelatransition.org/lequipe/" target="blank">contributeurs actifs</a>
                    , de 12 <a href="https://lescheminsdelatransition.org/le-conseil-dadministration/" target="blank">administrateurs</a> et
                    d'une <Link to="Partenaires">quinzaine d'organisations partenaires</Link>.
                </Typography>
                <Typography variant="body1" component="div">
                    <b><i>
                    Retrouvez la liste complète des membres en cliquant sur les liens dans le paragraphe précedent.
                    </i></b>
                </Typography>
                <Typography variant="h3">Histoire</Typography>
                <Typography variant="body1" component="div">
                    Les <a href="https://lescheminsdelatransition.org/">Chemins de la Transition</a> sont
                    nés en 2014 à la suite d’une réflexion en parcourant les Chemins de Saint-Jacques de Compostelle. 
                    Alors que les pèlerins y sont mus par un imaginaire chrétien, 
                    ne serait-il pas possible de provoquer une mise en mouvement en mobilisant l’imaginaire de la transition ? 
                </Typography>
                <Typography variant="body1"  component="div"> 
                Ainsi naquirent les Chemins de la Transition, dont l’objectif principal est de mettre en synergie et relier différents <b>lieux 
                et acteurs s’inscrivant dans le champ des transitions écologique, énergétique, culturelle, sociale, économique et technologique.</b> Notre
                association permet aux divers acteurs de la transition d’être référencés sur la carte présente sur le site, de développer 
                et mettre en avant les activités qu’ils proposent (écotourisme, formation, etc...), 
                de partager, mutualiser des ressources et des compétences .
                </Typography>

                <Typography variant="body1"  component="div"> 
                    En utilisant la plateforme, les utilisateurs peuvent alors partir à 
                    la rencontre d'initiatives et de lieux alternatifs, se sensibiliser, 
                    découvrir et se former à de nombreuses compétences utiles à la transition. 
                </Typography>
                
            </LargeContainer>
        </FullWidthBox>
    );
};

export default About;