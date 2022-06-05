import React, { useRef } from 'react';
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Breadcrumbs,
  Drawer,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import {
  TextField,
  useShowContext,
  Link,
  useRecordContext
} from 'react-admin';
import FullWidthBox from './FullWidthBox';
import LargeContainer from './LargeContainer';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import EditButton from "./buttons/EditButton";
import LikeButton from "./buttons/LikeButton";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  breadcrumbs: {
    paddingTop: 15,
    paddingBottom: 10,
    '& a:hover': {
      color: 'white'
    }
  },
  title: {
    lineHeight: 1.15,
  },
  basePath: {
    color: theme.palette.theme_3.contrastText,
  },
  placeLink: {
    color: theme.palette.theme_3.contrastText,
    fontWeight: 'bold',
  },
  chevronIcon: {
    color: 'white',
  },
  images: {
    marginBottom: 15,
    '& img': {
      width: '100%',
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      height: '100%',
      maxHeight: '15rem',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '8rem',
      }
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    position: 'absolute',
    top: 5,
    right: 0
  }
}));

const MultipleImagesField = ({ source, max = 2 }) => {
  const record = useRecordContext();
  if( !record ) return null;

  if( Array.isArray(record[source]) ) {
    return(
      <Grid container spacing={2}>
        {record[source].slice(0,max).map((url, i) => (
          <Grid item xs={6} key={i}>
            <img src={url} alt={record['pair:label']} />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return(
      <img src={record[source]} alt={record['pair:label']} />
    )
  }
};

const HeaderShow = ({ linkToListText, details, content, actionButton, hasComment }) => {
  const classes = useStyles();
  const { basePath } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  // Calculate header height
  const headerRef = useRef(null);
  const headerHeight = headerRef?.current?.clientHeight;

  // Trigger drawer when we pass beyond header height
  const showDrawer = useScrollTrigger({ threshold: headerHeight, disableHysteresis: true });

  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer ref={headerRef}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" className={classes.chevronIcon} />}
          className={classes.breadcrumbs}
        >
          <Link to={basePath} underline="none" color="inherit" className={classes.basePath}>
            <Typography variant="body2">{linkToListText}</Typography>
          </Link>
          <TextField source="pair:label" variant="body2" className={classes.placeLink} />
        </Breadcrumbs>
        <Box className={classes.images}>
          <MultipleImagesField source="pair:depictedBy" max={2} />
        </Box>
        <Box position="relative">
          {!xs &&
            <div className={classes.buttons}>
              <EditButton />
              <LikeButton />
            </div>
          }
          <TextField source="pair:label" variant="h1" className={classes.title} />
          {hasComment &&
            <TextField source="pair:comment" variant="h2" component="h2" />
          }
          <Box display={xs ? 'block' : 'flex'} pt={2} pb={2}>
            {details &&
              <>
                {React.cloneElement(details, { orientation: xs ? 'vertical' : 'horizontal' })}
              </>
            }
            {content &&
              <div>
                {React.cloneElement(content)}
              </div>
            }
          </Box>
          {xs && (
            <Box pb={3}>
              {actionButton && React.cloneElement(actionButton)}
            </Box>
          )}
        </Box>
        <Drawer anchor="bottom" open={xs && showDrawer} hideBackdrop disableScrollLock variant="persistent">
          <Box className={classes.drawer} pt={1} pb={2}>
            {actionButton && React.cloneElement(actionButton)}
          </Box>
        </Drawer>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderShow;
