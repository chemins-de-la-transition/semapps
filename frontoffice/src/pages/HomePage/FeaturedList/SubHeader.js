import React from 'react';
import { makeStyles, Typography, Box} from '@material-ui/core';
import Department from '../../Department';
import PlaceIcon from '../../../svg/PlaceIcon';

const useStyles = makeStyles((theme) =>({ 
    subHeader: {
      display: 'flex',
      alignItems: 'center',
      '& svg [fill]':{
          fill: theme.palette.secondary.main,
      }
    },
    text:{
        fontSize: '12px',
        lineHeight: '12px',
        marginLeft: '8px',
        fontWeight: 'normal',
        color: theme.palette.secondary.main,
    },
}));

const SubHeader = ({data,id}) => {
    const classes = useStyles();
    return (
      <Box className={classes.subHeader}>
        <PlaceIcon ></PlaceIcon>
        {
          (data[id]["pair:hasPostalAddress"])
          ? <Typography variant="body2" className={classes.text}><Department postalCode={data[id]["pair:hasPostalAddress"]["pair:addressZipCode"]}></Department></Typography>
          :''
        }
      </Box>
    );
  };

export default SubHeader;