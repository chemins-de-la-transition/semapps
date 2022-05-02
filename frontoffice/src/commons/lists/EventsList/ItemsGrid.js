import React, { useMemo } from 'react';
import {makeStyles, Typography, List, ListItem, ListItemText, ListItemAvatar, Box, Hidden} from '@material-ui/core';
import { DateField, useListContext, TextField, ImageField } from 'react-admin';
import { Link } from 'react-router-dom';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { sortBySimilarity } from "../../../utils";
import CalendarIcon from '../../../svg/CalendarIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  eventType: {
    color: theme.palette.primary.contrastText,
    marginBottom: 4,
    marginTop: 3
  },
  eventLabel: {
    fontSize: 30,
    lineHeight: '43px',
    color: theme.palette.primary.contrastText,
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      lineHeight: '23px',
    },
  },
  eventPlace: {
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
  },
  eventDate: {
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    '& span': {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 'bold',
      color: theme.palette.primary.contrastText,
      textTransform: 'uppercase',
    },
  },
  divider: {
    position: 'relative',
    '& >a:not(:first-child)': {
      marginTop: '5px',
    },
    '& >a:not(:first-child)::before': {
      marginTop: '2px',
      marginBottom: '2px',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.contrastText,
      height: '1px',
      display: 'block',
      width: '100%',
      content: "' '",
      position: 'absolute',
      top: '-5px',
    },
  },
  imageMaxWidth: {
    width: '110px',
    '& img': {
      width: '110px',
      margin: '0',
    },
  },
  imageContainer: {
    width: 120,
    height: 120,
    marginRight: 12,
    marginTop: 6,
    '& img': {
      width: 120,
      height: 120,
      objectFit: 'cover',
      margin: 0
    },
    [theme.breakpoints.down('xs')]: {
      width: 75,
      height: 75,
      '& img': {
        width: 75,
        height: 75
      },
    },
  },
  iconContainer: {
    width: 120,
    height: 120,
    marginRight: 12,
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['400'],
    [theme.breakpoints.down('xs')]: {
      width: 75,
      height: 75,
    },
  },
  listItem: {
    paddingLeft: '0',
    alignItems: 'flex-start'
  },
}));

const ItemsGrid = ({ similarRecord }) => {
  const classes = useStyles();
  let { ids, data } = useListContext();

  const sortedIds = useMemo(() => {
    if( !similarRecord ) return ids;
    return ids
      .filter(id => data[id] && id !== similarRecord.id )
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasType'))
      .sort(sortBySimilarity(data, similarRecord, 'cdlt:hasCourseType'))
      .sort(sortBySimilarity(data, similarRecord, 'cdlt:hasRegion'))
      .slice(0, 4);
  }, [ids, data, similarRecord]);

  return (
    <List className={classes.list + ' ' + classes.divider}>
      {sortedIds.map((id) => (
        <ListItem
          className={classes.listItem}
          button={true}
          component={Link}
          to={'/Event/' + encodeURIComponent(id) + '/show'}
          key={id}
        >
          {data[id]['pair:isDepictedBy'] && Array.isArray(data[id]['pair:isDepictedBy']) ? (
            <ListItemAvatar className={classes.imageContainer}>
              <ImageField source="pair:isDepictedBy.0" record={data[id]} />
            </ListItemAvatar>
          ) : data[id]['pair:isDepictedBy'] && !Array.isArray(data[id]['pair:isDepictedBy']) ? (
            <ListItemAvatar className={classes.imageContainer}>
              <ImageField source="pair:isDepictedBy" record={data[id]} />
            </ListItemAvatar>
          ): (
            <ListItemAvatar className={classes.iconContainer}>
              <CalendarIcon fontSize="large" />
            </ListItemAvatar>
          )}
          <ListItemText
            primary={
              <>
                {data[id]['pair:hasType'] && (
                  <ReferenceField source="pair:hasType" reference="Type" record={data[id]} link={false}>
                    <TextField
                      source="pair:label"
                      variant="h5"
                      component="div"
                      className={classes.eventType}
                    />
                  </ReferenceField>
                )}
                <Typography variant="h4" component="div" className={classes.eventLabel}>
                  {data[id]['pair:label']}
                  <Hidden xsDown>
                    &nbsp;
                    <ChevronRightIcon />
                  </Hidden>
                </Typography>
                <ReferenceField source="cdlt:hasRegion" reference="Region" record={data[id]} link={false}>
                  <Box className={classes.eventPlace}>
                    <TextField source="pair:label" variant="body1" />
                  </Box>
                </ReferenceField>
                <Typography
                  variant="button"
                  component="div"
                  className={classes.eventDate}
                >
                  <DateField
                    record={data[id]}
                    source="pair:startDate"
                    options={{ year: 'numeric', month: 'long', day: 'numeric' }}
                  />
                </Typography>
              </>
            }
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemsGrid;
