import React from 'react';
import { Container, Box, Grid, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery } from '@material-ui/core';
import { UserMenu, LogoutButton } from '@semapps/auth-provider';
import { Link } from 'react-router-dom';
import LogoTitle from './LogoTitle';
// import Container from './Container';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.white.main,
    boxShadow: 'none'
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  openButton: {
    padding: 5,
    float: 'right'
  },
  menuLink: {
    textDecoration: 'none'
  },
  menuText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.secondary.main
  },
  linkBox: {
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    }
  },
  loginBackground: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: 8,
  },
  // userMenu: {
  //   marginTop: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   borderColor: theme.palette.secondary.main, 
  //   outlineColor: theme.palette.secondary.main, 
  //   color: theme.palette.secondary.main,
  //   '& button': {
  //     padding: '6px 12px'
  //   }
  // },
  // title: {
  //   position: 'absolute',
  //   top: 180,
  //   textOverflow: 'ellipsis',
  //   whiteSpace: 'nowrap',
  //   overflow: 'hidden',
  //   [theme.breakpoints.down('sm')]: {
  //     top: 70,
  //     left: 15,
  //     right: 50,
  //     fontSize: 22,
  //     zIndex: 10
  //   }
  // },
}));

const AppBar = ({ menuItems, setSidebarOpen, title }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <MuiAppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="lg" className={classes.header}>
        <Box width={1} display="flex" alignItems="center" justifyItems="center">
          <LogoTitle title={title} justifyContent="flex-start" classes={classes}></LogoTitle>
          <Box flexGrow={1}></Box>
            {/*{xs ? (*/}
            {/*  <IconButton*/}
            {/*    color="inherit"*/}
            {/*    onClick={() => setSidebarOpen(true)}*/}
            {/*    className={classes.openButton}*/}
            {/*  >*/}
            {/*    <MenuIcon />*/}
            {/*  </IconButton>*/}
            {/*) : (*/}
            
            {/*)}*/}
          <Box display='flex' justifyContent='center' width={1}>
            {Object.keys(menuItems).map(link => (
              <Box display="flex" height={48} alignItems="center" justifyContent="center" className={classes.linkBox} m={2}>
                <Link to={link} className={classes.menuLink}>
                  <Typography className={classes.menuText}>
                    {menuItems[link]}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box flexGrow={1}></Box>
          <Box justifyContent="flex-end" className={classes.loginBackground}>
            <UserMenu logout={<LogoutButton />} /> {/* classes={{ userButton: classes.userMenu }} /> */}
          </Box>
        </Box>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
