import React from 'react';
import { Box, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery, IconButton } from '@material-ui/core';
import { useTranslate } from 'react-admin';
import MenuIcon from '@material-ui/icons/Menu';
import { LogoutButton } from '@semapps/auth-provider';
import { Link, useLocation } from 'react-router-dom';
import LogoTitle from './LogoTitle';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import UserMenu from './UserMenu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.white.main,
    boxShadow: 'none',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuLink: {
    textDecoration: 'none',
  },
  menuText: {
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.secondary.main,
  },
  linkBox: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  linkBoxSelected: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    borderBottom: 'black 2px solid'
  },
  loginBackground: {
    color: theme.palette.secondary.main,
    '& .MuiIconButton-colorInherit': {
      color: theme.palette.secondary.main,
    },
    '& .MuiIconButton-label::after': {
      textTransform: "uppercase",
      marginLeft: '0.5em',
      content: props => "'" + props.signInLabel + "'",
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.subtitle2.fontFamily,
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      // textTransform: theme.typography.subtitle2.textTransform,
      lineHeight: theme.typography.subtitle2.lineHeight,
      [theme.breakpoints.down('700')]: {
        content: 'none',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiIconButton-root': {
        padding: '8px',
      },
    },
    '& .MuiIconButton-root': {
      borderRadius: '8px',
    },
  },
}));

const AppBar = ({ menuItems, setSidebarOpen, title }) => {
  const translate = useTranslate();
  const signInLabel = translate('app.menu.login');
  const classes = useStyles({ signInLabel });
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const location = useLocation();
  return (
    <MuiAppBar position="sticky" className={classes.appBar}>
      <FullWidthBox>
        {xs ? (
          <Box width={1} display="flex" alignItems="center">
            <IconButton color="secondary" onClick={() => setSidebarOpen(true)} className={classes.openButton}>
              <MenuIcon />
            </IconButton>
            <Box flexGrow={1} />
            <LogoTitle title={title} justifyContent="flex-start" classes={{ menuLink: classes.menuLink }} />
            <Box flexGrow={1} />
            <Box justifyContent="flex-end" className={classes.loginBackground}>
              <UserMenu logout={<LogoutButton />} />
            </Box>
          </Box>
        ) : (
          <LargeContainer className={classes.header}>
            <Box width={1} display="flex" alignItems="center">
              <LogoTitle title={title} justifyContent="flex-start" classes={{ menuLink: classes.menuLink }} />
              <Box flexGrow={1} />
              <Box display="flex" justifyContent="center" width={1}>
                {menuItems.map((menuItem) => (
                  <Box
                    display="flex"
                    height={40}
                    alignItems="center"
                    justifyContent="center"
                    className={location.pathname.startsWith(menuItem.link) ? classes.linkBoxSelected : classes.linkBox}
                    m={2}
                    key={menuItem.link}
                  >
                    <Link to={{pathname: menuItem.link}} target={menuItem.externalLink ? "_blank" : ""} className={classes.menuLink}>
                      <Typography variant="subtitle2" className={classes.menuText}>
                        {menuItem.name}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box flexGrow={1} />
              <Box justifyContent="flex-end" className={classes.loginBackground}>
                <UserMenu logout={<LogoutButton />} />
              </Box>
            </Box>
          </LargeContainer>
        )}
      </FullWidthBox>
    </MuiAppBar>
  );
};

export default AppBar;
