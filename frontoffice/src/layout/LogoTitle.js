import React from 'react';
import { makeStyles, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

const logoSize = 67;
const logoSizeSmall = 24;
const useStyles = makeStyles(theme => ({
    logo: {
      width: logoSize,
      height: logoSize,
      verticalAlign: 'middle',
      [theme.breakpoints.down('xs')]: {
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
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      }
    },
}));

const LogoTitle = ({ title,classes, ...other }) => {
    const classesLogo = useStyles();
    return (
        <Box height={logoSize} width="200px" flexShrink={0} {...other}>
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