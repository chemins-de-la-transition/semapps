import React, { useRef, useState } from 'react';
import {
  makeStyles,
  Box,
  Grid,
  Drawer,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import {
  TextField,
  useShowContext,
  useRecordContext,
  Loading
} from 'react-admin';
import FullWidthBox from './FullWidthBox';
import LargeContainer from './LargeContainer';
import EditButton from "./buttons/EditButton";
import LikeButton from "./buttons/LikeButton";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor:theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  container: {
    marginTop: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    lineHeight: 1.15,
  },
  iconsContainer: {
    paddingTop: 16,
    paddingBottom: 12
  },
  basePath: {
    '& p': {
      color: theme.palette.theme_3.contrastText,
      fontSize: 14    
    }
  },
  images: {
    '& img': {
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      height: '100%',
      maxHeight: '15rem',
      maxWidth: "-webkit-fill-available",
    },
  },
  fullWidth: {
    width: '100%'
  },
  leftImage: {
    float: 'left',
    margin: '5px 15px 20px 0 !important',
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
  const classes = useStyles();
  const record = useRecordContext();
  const [imageWidth, setImageWidth] = useState(0);

  const onImgLoad = ({ target: img }) => {
    const { offsetWidth } = img;
    setImageWidth(offsetWidth);
  };

  if( !record ) return null;
  if( Array.isArray(record[source]) ) {
    return(
      <Grid container spacing={2}>
        {record[source].slice(0,max).map((url, i) => (
          <Grid item xs={6} key={i} >
            <img src={url} className={classes.fullWidth} alt={record['pair:label']} />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return(
      <img src={record[source]} onLoad={onImgLoad} className={(imageWidth > 1000) ? classes.fullWidth : (imageWidth < 400) ? classes.leftImage :''} alt={record['pair:label']} />
    )
  }
};

const HeaderShow = ({ details, content, actionButton, hasComment, variant }) => {
  const classes = useStyles({variant});
  const { loaded } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  // Calculate header height
  const headerRef = useRef(null);
  const headerHeight = headerRef?.current?.clientHeight;

  // Trigger drawer when we pass beyond header height
  const showDrawer = useScrollTrigger({ threshold: headerHeight, disableHysteresis: true });

  if (!loaded) return <Loading />;

  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer ref={headerRef} className={classes.container}>
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
          <Box display={xs ? 'block' : 'flex'} className={classes.iconsContainer}>
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
              {actionButton && React.cloneElement(actionButton, { mainButton: true })}
            </Box>
          )}
        </Box>
        {xs &&
          <Drawer anchor="bottom" open={showDrawer} hideBackdrop disableScrollLock variant="persistent">
            <Box className={classes.drawer} pt={1} pb={2}>
              {actionButton && React.cloneElement(actionButton, { mainButton: false })}
            </Box>
          </Drawer>
        }
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderShow;
