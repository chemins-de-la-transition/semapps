import React from 'react';
import { makeStyles, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

const logoHeight = 77;
const logoWidth = 94;
const logoHeightSmall = 40;
// const logoWidthSmall = 65;
// const breakPointlimit = 'xs';
const breakPointlimit = 720;
const useStyles = makeStyles(theme => ({
    logo: {
      // width: logoWidth,
      height: logoHeight,
      verticalAlign: 'middle',
      [theme.breakpoints.down(breakPointlimit)]: {
        // width: logoWidthSmall,
        height: logoHeightSmall,
      }
    },
    // logoText: {
    //   fontSize: 20,
    //   lineHeight: '27px',
    //   fontWeight: '900',
    //   color: theme.palette.secondary.main,
    //   paddingLeft: theme.spacing(1),
    //   [theme.breakpoints.down(breakPointlimit)]: {
    //     fontSize: 14,
    //     lineHeight: '18px',
    //   }
    // },
    logoBox: {
      // width: 240,
      height: logoHeight,
      [theme.breakpoints.down(breakPointlimit)]: {
        // width: 180,
        height: logoHeightSmall,
      }
    },
}));

const LogoTitle = ({ title,classes, ...other }) => {
    const classesLogo = useStyles();
    return (
        <Box className={classesLogo.logoBox} flexShrink={0} {...other}>
            <Link to="/" className={(classes) ? classes.menuLink : ''}>
                <Box display="flex" alignItems="center">
                <img src={process.env.PUBLIC_URL + '/logoCut512.png'} alt="logo" className={classesLogo.logo} />
                {/* <Typography variant="h1" className={classesLogo.logoText} component="h1">{title}</Typography> */}
                </Box>
            </Link>
        </Box>
    );
};

export default LogoTitle;