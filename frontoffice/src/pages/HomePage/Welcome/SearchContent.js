import React from 'react';
import { makeStyles, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import LargeContainer from '../../../layout/LargeContainer';
import FullWidthBox from '../../../layout/FullWidthBox';
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '4px',
  },
  formContainer: {
    width: '100%',
    '& :not(:first-child)': {
      marginLeft: '6px',
    },
    '& :not(:last-child)': {
      marginRight: '6px',
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
  },
  button: {
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
    },
  },
}));

const SearchContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <FullWidthBox className={classes.searchBox}>
        <LargeContainer>
          <Box className={classes.searchBackground}>
            <Typography variant="subtitle1" className={classes.searchTitle}>
              PARTEZ SUR LES CHEMINS DE LA TRANSITION
            </Typography>
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
                  <MenuItem value=""></MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-select-topic-label">Thématique</InputLabel>
                <Select labelId="demo-select-topic-label" id="demo-select-topic" disabled>
                  <MenuItem value=""></MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                href="#"
                text="Rechercher"
                typographyVariant="button2"
                className={classes.button}
              />
            </Box>
          </Box>
        </LargeContainer>
      </FullWidthBox>
    </Box>
  );
};

export default SearchContent;
