import React from 'react';
import { makeStyles, Button as MuiButton, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button1:{
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '12px',
    textTransform: 'uppercase',
  },
  button2:{
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
}));

const Button = ({to,variant,color,component,text,typographyVariant,className}) => {
    const classes = useStyles();
    const typographyClasName = (typographyVariant === 'button1')
        ? classes.button1
        : (
            (typographyVariant === 'button2')
            ? classes.button2
            :''
        );
    const typoVar = (typographyVariant === 'button1' || typographyVariant === 'button2') ? 'button' : typographyVariant;
    return (
        <MuiButton
            to={to} 
            variant={variant} 
            color={color}
            component={component} 
            className={className}
        > 
            <Typography variant={typoVar} className={typographyClasName}>{text}</Typography>
        </MuiButton>
    );
};

export default Button;