import React from 'react';
import { makeStyles, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

const logoSize = 67;
const logoSizeSmall = 40;
// const breakPointlimit = 'xs';
const breakPointlimit = 720;
const useStyles = makeStyles(theme => ({
    logo: {
      width: logoSize,
      height: logoSize,
      verticalAlign: 'middle',
      [theme.breakpoints.down(breakPointlimit)]: {
        width: logoSizeSmall,
        height: logoSizeSmall,
      }
    },
    logoText: {
      fontSize: 20,
      lineHeight: '27px',
      fontWeight: '900',
      color: theme.palette.secondary.main,
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down(breakPointlimit)]: {
        fontSize: 14,
        lineHeight: '18px',
      }
    },
    logoBox: {
      width: 240,
      height: logoSize,
      [theme.breakpoints.down(breakPointlimit)]: {
        width: 180,
        height: logoSizeSmall,
      }
    },
}));

const LogoTitle = ({ title,classes, ...other }) => {
    const classesLogo = useStyles();
    return (
        <Box className={classesLogo.logoBox} flexShrink={0} {...other}>
            <Link to="/" className={(classes) ? classes.menuLink : ''}>
                <Box display="flex" alignItems="center">
                <img src={process.env.PUBLIC_URL + '/Logo CDLT.png'} alt="logo" className={classesLogo.logo} />
                <Typography variant="h1" className={classesLogo.logoText} component="h1">{title}</Typography>
                </Box>
            </Link>
        </Box>
    );
};

export default LogoTitle;