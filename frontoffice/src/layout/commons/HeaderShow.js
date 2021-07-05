import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import FullWidthBox from '../FullWidthBox';
import LargeContainer from '../LargeContainer';
import { TextField, useRecordContext, ReferenceField, ImageField } from 'react-admin';
import { Link } from 'react-router-dom';
import ChevronRight from '../../svg/ChevronRight';

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
    display: 'flex',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 35,
    '& >:not(:first-child)': {
      marginLeft: 12,
    },
    '& >:not(:last-child)': {
      marginRight: 12,
    },
  },
}));

const HeaderShow = ({ subheaderSource, subheaderDefault, linkToListText, basePath, props }) => {
  const classes = useStyles();
  const record = useRecordContext(props);
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Box className={classes.basePathLinks}>
          <Link to={basePath} className={classes.basePath + ' ' + classes.noDecoration}>
            <Typography variant="body2">{linkToListText}</Typography>
          </Link>
          <ChevronRight className={classes.chevronIcon} />
          <ReferenceField source="pair:hostedIn" reference="Place" {...props} linkType="show">
            <TextField source="pair:label" variant="body2" className={classes.placeLink + ' ' + classes.noDecoration} />
          </ReferenceField>
        </Box>
        <Box className={classes.images}>
          <ImageField source="pair:isDepictedBy" />
          <ReferenceField source="pair:hostedIn" reference="Place" basePath={basePath} {...props} linkType="show">
            <ImageField source="pair:isDepictedBy" />
          </ReferenceField>
        </Box>
        {record[subheaderSource] ? (
          <ReferenceField source={subheaderSource} reference="Type" {...props} linkType="show">
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
        <TextField source="pair:label" variant="h2" basePath={basePath} {...props} />
      </LargeContainer>
    </FullWidthBox>
  );
};

export default HeaderShow;
