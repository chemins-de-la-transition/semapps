import React from 'react';
import { Box, useMediaQuery, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import Button from '../commons/Button';

const TopBarHeight = 48;
const useStyles = makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    position: 'relative',
  },
  topBarIncluded: {
    height: TopBarHeight,
  },
  topBarHelpIcon: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    lineHeight: '100%',
    width: TopBarHeight,
    height: TopBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      fontFamily: 'sans-serif',
      fontSize: 16,
      lineHeight: '100%',
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  if (xs) {
    return null;
  } else {
    return (
      <FullWidthBox className={classes.topBar}>
        <LargeContainer>
          <Box display="flex" width={1} height={1} alignItems="center" className={classes.topBarIncluded}>
            <Typography variant="subtitle2">Le lieu pour partager et apprendre en voyageant</Typography>
            <Box flexGrow={1} />
            <Button
              to="/Aide"
              className={classes.topBarHelpIcon}
              color="inherit"
              component={Link}
              aria-label="Aide"
              typographyVariant="subtitle2"
            >
              ?
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href="https://lescheminsdelatransition.org/faire-un-don/"
              typographyVariant="subtitle2"
            >
              Soutenez la plateforme avec un don
            </Button>
          </Box>
        </LargeContainer>
      </FullWidthBox>
    );
  }
};

export default TopBar;
