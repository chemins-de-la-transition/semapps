import React from 'react';
import { makeStyles, Typography, Box, Breadcrumbs } from '@material-ui/core';
import FullWidthBox from '../layout/FullWidthBox';
import LargeContainer from '../layout/LargeContainer';
import { TextField, useRecordContext, ReferenceField, ImageField } from 'react-admin';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconsList from './IconsList';

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
  basePath: {
    color: theme.palette.theme_3.contrastText,
  },
  placeLink: {
    color: theme.palette.theme_3.contrastText,
    fontWeight: 'bold',
  },
  chevronIcon: {
    marginLeft: 8,
    marginRight: 8,
    width: 12,
    height: 12,
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
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      maxHeight: '15rem'
    }
  }
}));

const HeaderShow = ({ subheaderSource, subheaderDefault, linkToListText, basePath }) => {
  const classes = useStyles();
  const record = useRecordContext();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className={classes.basePathLinks}>
          <Link to={basePath} className={classes.basePath + ' ' + classes.noDecoration}>
            <Typography variant="body2">{linkToListText}</Typography>
          </Link>
          <TextField source="pair:label" variant="body2" className={classes.placeLink + ' ' + classes.noDecoration} />
        </Breadcrumbs>
        <Box className={classes.images}>
          <ImageField source="pair:isDepictedBy" />
        </Box>
        {record && record[subheaderSource] ? (
          <ReferenceField source={subheaderSource} reference="Type" linkType="show">
            <TextField
              source="pair:label"
              variant="subtitle2"
              component="div"
              className={classes.basePath + ' ' + classes.noDecoration}
            />
          </ReferenceField>
        ) : (
          <Typography variant="subtitle2" component="div">
            {subheaderDefault}
          </Typography>
        )}
        <TextField source="pair:label" variant="h1" />
        <Box display="flex" pt={2} pb={2}>
          <IconsList />
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderShow;
