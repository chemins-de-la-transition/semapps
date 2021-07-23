import React from 'react';
import { Box, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { LogoutButton } from '@semapps/auth-provider';
import { Link } from 'react-router-dom';
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
  openButton: {},
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
  loginBackground: {
    // backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    // borderRadius: 8,
    '& .MuiIconButton-colorInherit': {
      color: theme.palette.secondary.main,
    },
    '& .MuiIconButton-label::after': {
      marginLeft: '0.5em',
      content: "'Se connecter'",
      fontFamily: theme.typography.subtitle2.fontFamily,
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      textTransform: theme.typography.subtitle2.textTransform,
      lineHeight: theme.typography.subtitle2.lineHeight,
      // [theme.breakpoints.down('xs')]:{
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
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
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
                    height={48}
                    alignItems="center"
                    justifyContent="center"
                    className={classes.linkBox}
                    m={2}
                    key={menuItem.link}
                  >
                    <Link to={menuItem.link} className={classes.menuLink}>
                      <Typography variant="subtitle2" className={classes.menuText}>
                        {menuItem.name}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box flexGrow={1}></Box>
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
