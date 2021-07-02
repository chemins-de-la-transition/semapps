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
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  outlinedInversed:{
    
  },
}));

const Button = ({to,variant,color,component,text,typographyVariant,className,href,disabled}) => {
    const classes = useStyles();
    const typographyClasName = (typographyVariant === 'button1')
        ? classes.button1
        : (
            (typographyVariant === 'button2')
            ? classes.button2
            :''
        );
    const typoVar = (typographyVariant === 'button1' || typographyVariant === 'button2') ? 'button' : typographyVariant;
    const formattedVar = (variant === 'outlinedInversed') ? 'outlined' : variant;
    return (
        <MuiButton
            to={to} 
            variant={formattedVar} 
            color={color}
            component={component} 
            className={className}
            href={href}
            disabled={disabled}
        > 
            <Typography variant={typoVar} className={typographyClasName}>{text}</Typography>
        </MuiButton>
    );
};

export default Button;