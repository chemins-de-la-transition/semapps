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
      fontFamily: 'Helvetica,'+theme.typography.fontFamily,
      fontSize: 20,
      lineHeight: '27px',
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
      verticalAlign: 'middle',
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down(breakPointlimit)]: {
        fontSize: 14,
        lineHeight: '18px',
      }
    },
    logoBox: {
      width: 220,
      height: logoSize,
      [theme.breakpoints.down(breakPointlimit)]: {
        width: 160,
        height: logoSizeSmall,
      }
    },
}));

const LogoTitle = ({ title,classes, ...other }) => {
    const classesLogo = useStyles();
    return (
        <Box className={classesLogo.logoBox} flexShrink={0} {...other}>
            <Link to="/" className={classes.menuLink}>
                <Box display="flex" alignItems="center">
                <img src={process.env.PUBLIC_URL + '/Logo CDLT.png'} alt="logo" className={classesLogo.logo} />
                <Typography className={classesLogo.logoText} component="div">{title}</Typography>
                </Box>
            </Link>
        </Box>
    );
};

export default LogoTitle;