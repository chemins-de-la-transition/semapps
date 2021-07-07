import React from 'react';
import { makeStyles, Typography, Box, Breadcrumbs, useMediaQuery } from '@material-ui/core';
import FullWidthBox from '../layout/FullWidthBox';
import LargeContainer from '../layout/LargeContainer';
import { TextField, useShowContext, ReferenceField, ImageField, Link } from 'react-admin';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.theme_3.main,
    color: theme.palette.theme_3.contrastText,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  basePathLinks: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 0,
    paddingRight: 8,
  },
  breadcrumbs: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  type: {
    paddingTop: 15,
    paddingBottom: 10,
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
  noDecoration: {
    textDecoration: 'none',
    lineHeight: '24px',
  },
  images: {
    // display: 'flex',
    // justifyContent: 'center',
    // marginTop: 12,
    // marginBottom: 35,
    // '& >:not(:first-child)': {
    //   marginLeft: 12,
    // },
    // '& >:not(:last-child)': {
    //   marginRight: 12,
    // },
    '& img': {
      width: '100%',
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      maxHeight: '15rem',
    },
  },
}));

const HeaderShow = ({ type, linkToListText, details }) => {
  const classes = useStyles();
  const { basePath, record } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" className={classes.chevronIcon} />}
          className={classes.breadcrumbs}
        >
          <Link to={basePath} underline="none" color="inherit" className={classes.basePath}>
            <Typography variant="body2">{linkToListText}</Typography>
          </Link>
          <TextField source="pair:label" variant="body2" className={classes.placeLink + ' ' + classes.noDecoration} />
        </Breadcrumbs>
        <Box className={classes.images}>
          <ImageField source="pair:isDepictedBy" />
        </Box>
        {record && record[type] && (
          <ReferenceField source={type} reference="Type" link={false}>
            <TextField source="pair:label" variant="subtitle2" component="div" className={classes.type} />
          </ReferenceField>
        )}
        <TextField source="pair:label" variant="h1" className={classes.title} />
        <Box display={xs ? 'block' : 'flex'} pt={2} pb={2}>
          {React.cloneElement(details, { orientation: xs ? 'vertical' : 'horizontal' })}
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderShow;
