import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    circle: {
      position: 'absolute',
    },
    logo: {
      position: 'absolute',
    },
    text: {
       position: 'absolute',
       top: 110,
       left: 92,
       width: 134,
       textAlign: 'center',
    }
  }));
  
const Category = ({ logo, text, className }) => {
    const classes = useStyles();
    return (
    <div className={className}>
        <svg
            className={classes.circle}
            width="134" 
            height="134" 
            viewBox="0 0 134 134" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="67.2896" cy="66.8702" r="66.6002" fill="white"/>
        </svg>
        <img 
            className={classes.logo}
            src={logo} 
            alt="découverte" 
            width="134" 
            height="134"
        />
        <Typography variant="h6" style={{fontSize:'12px'}} className={classes.text}>
                {text}
        </Typography>
    </div>
    );
};

export default Category;
