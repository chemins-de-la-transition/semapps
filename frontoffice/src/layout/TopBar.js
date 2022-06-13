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
    height: TopBarHeight,
    width: TopBarHeight,
    minWidth: TopBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      fontFamily: 'sans-serif',
      fontSize: 16,
      lineHeight: '100%',
    },
  },
  topBarButton: {
    flexShrink: 0,
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox className={classes.topBar}>
      <LargeContainer>
        <Box display="flex" width={1} height={1} alignItems="center" className={classes.topBarIncluded}>
          {
            (xs) ? ''
            : <Typography variant="subtitle2">Le lieu pour partager et apprendre en voyageant</Typography>
          }
          <Box flexGrow={1} />
          <Button
            to="/Page/aide/show"
            className={classes.topBarHelpIcon}
            color="inherit"
            component={Link}
            aria-label="Aide"
            typographyVariant="subtitle2"
          >
            ?
          </Button>
          <a href="https://projet.lescheminsdelatransition.org/accueil/faire-un-don/" target="_blank" rel="noopener noreferrer">
            <Button
              className={classes.topBarButton}
              variant="outlined"
              color="secondary"
              typographyVariant="button1"
            >
              Soutenez la plateforme avec un don
            </Button>
          </a>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default TopBar;
