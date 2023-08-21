import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import regen4all from '../icons/regen4all.png';

const logoHeight = 77;
const logoHeightSmall = 40;
const breakPointlimit = 720;
const useStyles = makeStyles((theme) => ({
  logo: {
    height: logoHeight,
    verticalAlign: 'middle',
    [theme.breakpoints.down(breakPointlimit)]: {
      height: logoHeightSmall,
    },
  },
  logoBox: {
    height: logoHeight,
    [theme.breakpoints.down(breakPointlimit)]: {
      height: logoHeightSmall,
    },
  },
}));

const LogoTitle = ({ title, classes, ...other }) => {
  const classesLogo = useStyles();
  return (
    <Box className={classesLogo.logoBox} flexShrink={0} {...other}>
      <Link to="/" className={classes ? classes.menuLink : ''}>
        <Box display="flex" alignItems="center">
          <img src={regen4all} alt="logo" className={classesLogo.logo} />
        </Box>
      </Link>
    </Box>
  );
};

export default LogoTitle;
