import React from 'react';
import { makeStyles, Box, Typography, FormControl, InputLabel, Select, MenuItem, useMediaQuery } from '@material-ui/core';
import LargeContainer from '../../../commons/LargeContainer';
import FullWidthBox from '../../../commons/FullWidthBox';
import Button from '../../../commons/Button';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  searchBox: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      top: '-50px',
    },
  },
  searchBackground: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    marginLeft: '40px',
    marginRight: '40px',
    padding: '20px 24px 24px',
    borderRadius: '4px',
  },
  commonsSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchBackgroundXs :{
    backgroundColor: theme.palette.primary.main,
  },
  containerXs:{
    paddingTop: 32,
    paddingBottom: 32,
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,
  },
  formContainer: {
    width: '100%',
    '& :not(:first-child)': {
      marginLeft: '6px',
      [theme.breakpoints.up('xs')]: {
        marginLeft: '0px',
      },
    },
    '& :not(:last-child)': {
      marginRight: '6px',
      [theme.breakpoints.up('xs')]: {
        marginRight: '0px',
      },
    },
  },
  formControl: {
    minWidth: '25%',
    [theme.breakpoints.down('md')]: {
      minWidth: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.secondary.main,
      position: 'relative',
      minWidth: '100%',
      marginTop: '4px',
      marginBottom: '4px',
      '&:before': {
        backgroundColor: theme.palette.secondary.contrastText,
        borderRadius: '4px',
        content: "' '",
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      '& .MuiInputLabel-formControl':{
        left: '4px',
      }
    },
  },
  button: {
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
    },
  },
  searchTitle:{
    [theme.breakpoints.down('xs')]: {
      marginBottom: '18px',
    },
  },
}));

const FormBox = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      alignItems="center"
      className={classes.formContainer}
    >
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-select-eventtype-label">Type d'évènement</InputLabel>
        <Select labelId="demo-select-eventtype-label" id="demo-select-eventtype">
          <MenuItem value="Test">Test</MenuItem>
          <MenuItem value="Test2">Test2</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-select-area-label">Région</InputLabel>
        <Select labelId="demo-select-area-label" id="demo-select-area" disabled>
          <MenuItem value="" />
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-select-topic-label">Thématique</InputLabel>
        <Select labelId="demo-select-topic-label" id="demo-select-topic" disabled>
          <MenuItem value="" />
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        href="#"
        typographyVariant="button2"
        className={classes.button}
      >
        Rechercher
      </Button>
    </Box>
  );
};

const SearchContent = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  if (xs) {
    return (
      <FullWidthBox className={classes.searchBackgroundXs}>
        <LargeContainer className={classes.commonsSearch + ' ' + classes.containerXs}>
          <Typography variant="subtitle1" className={classes.searchTitle}>
            Quel voyage recherchez vous ?
          </Typography>
          <FormBox />
        </LargeContainer>
      </FullWidthBox>
    );
  } else {
    return (
      <Box className={classes.box}>
        <FullWidthBox className={classes.searchBox}>
          <LargeContainer>
            <Box className={classes.searchBackground + ' ' + classes.commonsSearch}>
              <Typography variant="subtitle1" className={classes.searchTitle}>
                PARTEZ SUR LES CHEMINS DE LA TRANSITION
              </Typography>
              <FormBox />
            </Box>
          </LargeContainer>
        </FullWidthBox>
      </Box>
    );
  }
};

export default SearchContent;
