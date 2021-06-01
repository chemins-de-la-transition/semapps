import React from 'react';
import { Container, Box, Grid, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery } from '@material-ui/core';
import { UserMenu, LogoutButton } from '@semapps/auth-provider';
import { Link } from 'react-router-dom';

const logoSize = 67;
const logoSizeSmall = 24;
const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.white.main,
    boxShadow: 'none'
  },
  header: {
    position: 'relative',
    padding: 10,
    // height: 65,
    // [theme.breakpoints.down('xs')]: {
    //   height: 50
    // }
  },
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
  userMenu: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
    '& button': {
      padding: '6px 12px'
    }
  },
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
          <Box height={logoSize} width="237px" justifyContent="flex-start" flexShrink={0}>
            <Link to="/" className={classes.menuLink}>
              <Box display="flex" alignItems="center">
                <img src={process.env.PUBLIC_URL + '/images/Logo CDLT.png'} alt="logo" className={classes.logo} />
                <Typography className={classes.logoText} component="div">{title}</Typography>
              </Box>
            </Link>
          </Box>
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
          <Grid container>
            {Object.keys(menuItems).map(link => (
              <Grid item sm={2} key={link}>
                <Box display="flex" height={48} alignItems="center" justifyContent="center">
                  <Link to={link} className={classes.menuLink}>
                    <Typography className={classes.menuText}>
                      {menuItems[link]}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box flexGrow={1}></Box>
          <Box justifyContent="flex-end">
            <UserMenu logout={<LogoutButton />} classes={{ userButton: classes.userMenu }} />
          </Box>
        </Box>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
