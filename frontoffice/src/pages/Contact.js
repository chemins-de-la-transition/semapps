import React from 'react';
import LargeContainer from '../layout/LargeContainer';
import FullWidthBox from '../layout/FullWidthBox';
import { Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    text: {
        '& .MuiTypography-root':{
            marginBottom: '20px',
            lineHeight: '18px',
        },
    },
    whiteBackground:{
        backgroundColor: theme.palette.white.main,
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <FullWidthBox className={classes.whiteBackground}>
            <LargeContainer className={classes.text}>
                <Typography variant="h2">Nous contacter</Typography>
                <Typography variant="body1" component="div">
                    <b>Siège social</b><br />
                    Association Les Chemins de la Transition <br />
                    9 rue de la Marquise de Sévigné<br />
                    31200 TOULOUSE<br />
                </Typography>
                <Typography variant="body1" component="div">
                    <b>Par e-mail</b> : <a href="mailto:bonjour@lescheminsdelatransition.org">bonjour@lescheminsdelatransition.org</a>
                </Typography>
                <Typography variant="body1" component="div">
                    <b>Groupe Facebook</b> : <a href="https://www.facebook.com/groups/lescheminsdelatransition/">https://www.facebook.com/groups/lescheminsdelatransition/</a>
                </Typography>
                
            </LargeContainer>
        </FullWidthBox>
    );
};

export default Contact;